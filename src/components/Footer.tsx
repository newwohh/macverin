import { Button, TextField, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <div
        style={{
          padding: "250px 100px 100px 100px",
          backgroundColor: "#106690",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h3" sx={{ color: "white" }}>
            UNYN
          </Typography>
          <Typography sx={{ color: "white" }}>
            Stay up to date on the latest features and releases by joining our
            newslatter
          </Typography>
          <div>
            <TextField
              placeholder="Enter your email"
              sx={{ color: "white" }}
            ></TextField>
            <Button
              sx={{
                borderRadius: "30px",
                background: "white",
                color: "black",
                padding: "15px 40px",
                marginRight: "20px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              width: "200px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: 1000, marginBottom: "20px" }}
            >
              Quick Links
            </Typography>
            <Typography>Home</Typography>
            <Typography>About us</Typography>
            <Typography>Services</Typography>
            <Typography>Events</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: 1000, marginBottom: "20px" }}
            >
              Updates
            </Typography>
            <Typography>News</Typography>
            <Typography>Blog</Typography>
            <Typography>FAQs</Typography>
            <Typography>Contacts</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              width: "200px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: 1000, marginBottom: "20px" }}
            >
              Follow us
            </Typography>
            <Typography>Twitter</Typography>
            <Typography>Facebook</Typography>
            <Typography>Instagram</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
