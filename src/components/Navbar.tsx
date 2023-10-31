import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <header>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Typography>UNYN</Typography>
          <div
            style={{
              width: "350px",
              marginLeft: "60px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              href="#"
              className="navlink"
              style={{ textDecoration: "none", color: "black" }}
            >
              About us
            </a>
            <a
              href="#"
              className="navlink"
              style={{ textDecoration: "none", color: "black" }}
            >
              Services
            </a>
            <a
              href="#"
              className="navlink"
              style={{ textDecoration: "none", color: "black" }}
            >
              Events
            </a>
            <Typography>More</Typography>
            <Box sx={{ minWidth: 50, height: "3px" }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="More"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div>
          <Button
            sx={{
              borderRadius: "30px",
              background: "#1AA7EC",
              color: "white",
              padding: "15px 30px",
            }}
          >
            Contact us
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
