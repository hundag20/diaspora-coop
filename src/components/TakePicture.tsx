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
  onCapture: (photoURL: string | null) => void;
}

const PhotoCaptureButton: React.FC<PhotoCaptureButtonProps> = ({
  open,
  onClose,
  onOpen,
  onCapture,
}) => {
  const webcamRef = useRef<Webcam | null>(null);

  const capture = () => {
    if (webcamRef.current) {
      const photoSrc = webcamRef.current.getScreenshot();
      onCapture(photoSrc);
      onClose();
    }
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={onOpen}>
        Take a Photo
      </Button> */}

      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Take a Photo</DialogTitle>
        <DialogContent style={{ width: "100%" }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={"100%"}
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
