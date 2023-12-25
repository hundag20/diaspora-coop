import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = ({ pdfContent }) => {
  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
    >
      <Viewer fileUrl={`data:application/pdf;base64,${pdfContent}`} />
    </Worker>
  );
};

export default PdfViewer;
