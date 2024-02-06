import { useState } from "react";
import PdfDialog from "./ConfirmationFormDialog";
import PdfViewer from "./PdfViewer";
import html2pdf from "html2pdf.js";
import { Button } from "@mui/material";

import { Document, Page } from "react-pdf";
import SignatureCanvas from "react-signature-canvas";

const pdfURL = "./Copy.pdf";
export const ConfirmFileUpload = ({
  name,
  stateFunction,
  setStateFunction,
  error,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pdfContent, setPdfContent] = useState("");
  // console.log("pdf:", pdfContent);

  const [signatureRef, setSignatureRef] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSavePdf = (content) => {
    generatePdf(content).then((pdf) => {
      setPdfContent(pdf);
      setDialogOpen(false);
    });
  };

  const generatePdf = async (content) => {
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = content;

    const options = {
      margin: 10,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    try {
      const pdf = await html2pdf().from(contentDiv).set(options).outputPdf();
      const pdfDataUrl = `data:application/pdf;base64,${btoa(pdf)}`;
      return pdfDataUrl;
    } catch (error) {
      console.error("Error generating PDF:", error);
      return "";
    }
  };
  const [fileUploadLabel, setFileUploadLabel] = useState("No file chosen");

  const fileUploadHandler = (e) => {
    const allowedFileTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/tiff",
      "image/webp",
      "application/pdf",
    ];
    const maxFileSize = 10000000; // 50 MB

    if (e.target.files.length > 0) {
      const file = e.target.files[0];

      // Check file type
      if (!allowedFileTypes.includes(file.type)) {
        alert("File type not allowed: " + file.name);
        return;
      }

      // Check file size
      if (file.size > maxFileSize) {
        alert("File size exceeds the maximum limit: " + file.name);
        return;
      }

      // Proceed with setting state and processing the file
      const fileNames = Array.from(e.target.files).map((file) => file.name);
      setFileUploadLabel(fileNames.join(", "));
      setStateFunction(file);
    } else {
      setFileUploadLabel("Choose a file");
    }
  };

  // console.log("file emp:", stateFunction);
  // console.log("file emp:", stateFunction !== null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    // Do something when the PDF is loaded, if needed
    // console.log(`Document loaded with ${numPages} pages.`);
  };

  const handleClearSignature = () => {
    signatureRef.clear();
  };

  const handleSaveSignature = () => {
    const signatureData = signatureRef.toDataURL();
    // Now you can save the signatureData or use it as needed
    // console.log("Signature Data:", signatureData);
  };

  const handleSavePDF = async () => {
    const pdfCanvas = document.createElement("canvas");
    const pdfContext = pdfCanvas.getContext("2d");

    const pdfPage = document.querySelector(".react-pdf__Page");
    pdfCanvas.width = pdfPage.clientWidth;
    pdfCanvas.height = pdfPage.clientHeight;

    const pdfImage = new Image();
    pdfImage.src = await signatureRef.toDataURL();
    pdfImage.onload = () => {
      pdfContext.drawImage(
        pdfImage,
        pdfCanvas.width - pdfImage.width,
        pdfCanvas.height - pdfImage.height
      );

      const pdfBlob = pdfCanvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pdfBlob;
      downloadLink.download = "signed_document.pdf";
      downloadLink.click();
    };
  };

  return (
    <>
      <div>
        <input
          type="file"
          name={name}
          multiple={false}
          className="file-upload"
          data-method="ajax"
          accept=".jpg, .jpeg, .png, .gif, .bmp, .tiff, .tif, .webp, .pdf"
          data-size="50000000"
          data-size-message="Maximum file size allowed is 50 MB. "
          data-filetype="jpg|jpeg|png|gif|bmp|tiff|tif|webp|pdf"
          data-filetype-message="file extension is not allowed."
          onChange={fileUploadHandler}
          required
        />
        <div
          className={`${
            stateFunction !== null ? "success" : error ? "error" : ""
          } file-upload-label`}
          aria-hidden="true"
        >
          <i className="fas fa-cloud-upload-alt"></i>
          <p>
            Drag and Drop (or) <span>Choose Files</span>
            <br />
            {stateFunction?.name || "No file chosen"}
          </p>
        </div>
      </div>
      <div>
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>

        {/* Render the PDF Viewer */}
        {pdfContent && <PdfViewer pdfContent={pdfContent} />}

        {/* Render the PDF Dialog */}
        <PdfDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onSave={handleSavePdf}
        />

        <Document file={pdfURL} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>

        <SignatureCanvas
          ref={(ref) => setSignatureRef(ref)}
          canvasProps={{
            width: 200,
            height: 100,
            className: "signature-canvas",
          }}
        />

        <div>
          <button onClick={handleClearSignature}>Clear Signature</button>
          <button onClick={handleSaveSignature}>Save Signature</button>
          <button onClick={handleSavePDF}>Save PDF</button>
        </div>
      </div>
    </>
  );
};
