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
      const signature = signatureRef.current.toDataURL();
      onSave(signature);
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
        <SignatureCanvas ref={signatureRef} />
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
