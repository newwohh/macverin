import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function ModalForm({
  setMessage,
  message,
  sendEmail,
}: {
  setMessage: any;
  message: any;
  sendEmail: any;
}) {
  return (
    <div>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "500px",
          textAlign: "center",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 1000, color: "#1AA7EC" }}
        >
          UNYN
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontWeight: 1000 }}
        >
          FIll the details
        </Typography>
        <TextField
          label="Name"
          placeholder="Enter your name"
          onChange={(e) => setMessage({ ...message, name: e.target.value })}
        />
        <TextField
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setMessage({ ...message, email: e.target.value })}
        />
        <TextField
          label="Phone Number"
          placeholder="Enter your phone number"
          onChange={(e) =>
            setMessage({ ...message, phoneNumber: e.target.value })
          }
        />
        <TextField
          label="College"
          placeholder="Enter your college name"
          onChange={(e) => setMessage({ ...message, college: e.target.value })}
        />
        <Button
          sx={{ width: "100%", background: "#1AA7EC", color: "white" }}
          onClick={sendEmail}
        >
          Join
        </Button>
      </Box>
    </div>
  );
}

export default ModalForm;
