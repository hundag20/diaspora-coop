// SignatureDialog.tsx

import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
// interface SignatureDialogProps {
//   open: boolean;
//   onClose: () => void;
//   onSave: (signature: string) => void;
// }

const SignatureDialog = ({ open, onClose, onSave }) => {
  const signatureRef = useRef(null);

  const handleSave = () => {
    if (signatureRef.current) {
      const canvas = signatureRef.current.getCanvas();

      // Convert the canvas content to a Blob
      canvas.toBlob((blob) => {
        // Create a file from the Blob
        const file = new File([blob], "signature.png", { type: "image/png" });

        // Pass the file to the onSave function
        onSave(file);
      });

      // Close the signature dialog or perform any other necessary actions
      onClose();
    }
  };

  const handleReset = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Here</DialogTitle>
      <DialogContent sx={{ border: "1px solid grey", margin: "0 15px" }}>
        <div
        >
        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
              width: 'auto', height: 200
          }}
          ca
          />
          </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignatureDialog;
