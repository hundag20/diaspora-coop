// PhotoCaptureButton.tsx

import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface PhotoCaptureButtonProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  onSave: (file: File | null) => void;
  onCapture: (photoURL: string | null) => void;
}

const PhotoCaptureButton: React.FC<PhotoCaptureButtonProps> = ({
  open,
  onClose,
  onOpen,
  onSave,
  onCapture,
}) => {
  const webcamRef = useRef<Webcam | null>(null);

  // const capture = () => {
  //   if (webcamRef.current) {
  //     const photoSrc = webcamRef.current.getScreenshot();
  //     onCapture(photoSrc);
  //     onClose();
  //   }
  // };

  const capture = async () => {
    if (webcamRef.current) {
      const photoSrc = webcamRef.current.getScreenshot();

      // Convert base64 to Blob
      const base64ToBlob = (base64: string, type: string): Blob => {
        const binStr = atob(base64.split(",")[1]);
        const arr = new Uint8Array(binStr.length);
        for (let i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i);
        }
        return new Blob([arr], { type });
      };

      // Convert base64 to Blob and create a File
      const blob = base64ToBlob(photoSrc || "", "image/jpeg");
      const file = new File([blob], "captured-photo.jpg", {
        type: "image/jpeg",
      });

      // console.log("file", file);

      onSave(file);
      onCapture(photoSrc);
      onClose();
    }
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={onOpen}>
        Take a Photo
      </Button> */}

      <Dialog open={open} onClose={onClose} sx={{}}>
        <DialogTitle>Take a Photo</DialogTitle>
        <DialogContent style={{}}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            // max-width={"100%"}
            // width={300} // Adjust the width to maintain a 3:4 aspect ratio (3x4 passport size)
            height={400}
            forceScreenshotSourceSize={true} // Ensure the screenshot has the same size as the video source
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={capture}>Capture Photo</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PhotoCaptureButton;
