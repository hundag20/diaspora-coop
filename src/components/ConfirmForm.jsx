import { useState } from "react";
import PdfDialog from "./ConfirmationFormDialog";
import PdfViewer from "./PdfViewer";
import html2pdf from "html2pdf.js";
import { Button } from "@mui/material";

export const ConfirmFileUpload = ({
  name,
  stateFunction,
  setStateFunction,
  error,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pdfContent, setPdfContent] = useState("");
  console.log("pdf:", pdfContent);

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

  console.log("file emp:", stateFunction);
  console.log("file emp:", stateFunction !== null);

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
      </div>
    </>
  );
};
