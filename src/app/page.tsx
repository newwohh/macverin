"use client";

import Image from "next/image";
import styles from "./page.module.css";
import group8 from "@/assets/Group 8.png";
import rectangle from "@/assets/Rectangle 5.png";
import rectangle6 from "@/assets/Rectangle 6.png";
import rectangle8 from "@/assets/Rectangle 8.png";
import group11 from "@/assets/Group 11.png";
import group15 from "@/assets/Group 14.png";
import johndoe from "@/assets/Ellipse 5.png";
import johndoe2 from "@/assets/Ellipse 5(1).png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import axios from "axios";
import ModalForm from "@/components/Modal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [message, setMessage] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    college: "",
  });

  const sendEmail = async () => {
    try {
      const request = await axios.post("/api/email", {
        subject: "hello from " + message.phoneNumber,
        message: `Hi ${message.name} you are from ${message.college}`,
      });

      console.log(request.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <section>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Typography variant="h3">
                Empowering Youth for a Brighter Future
              </Typography>
              <Typography variant="h5" style={{ color: "gray" }}>
                United Youth Network (UNYN) is a dynamic and impactful
                international student society committed to nurturing the talents
                and potential of young individuals across colleges and
                universities of different countries. Join us today to be a part
                of our mission to create a brighter and more promising future.
              </Typography>
              <div style={{ marginTop: "30px" }}>
                <Button
                  sx={{
                    borderRadius: "30px",
                    background: "#1AA7EC",
                    color: "white",
                    padding: "15px 40px",
                    marginRight: "20px",
                  }}
                  onClick={handleOpen}
                >
                  Join
                </Button>
                <Button endIcon={<KeyboardArrowRightIcon />}>
                  Learn More{" "}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Image src={group8} alt="group8" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "350px",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "800px",
              height: "250px",
              overflow: "visible",
            }}
          >
            <Typography variant="h2">
              Empowering Youth for a Brighter Future: UNYN’s Impact on Youth
              Individuals
            </Typography>
          </div>
          <div style={{ textAlign: "left", width: "500px" }}>
            <Typography>
              United Youth Network (UNYN) is dedicated to empowering young
              individuals by providing them with opportunities for growth and
              development. Through our international student society, we aim to
              nurture their talents and unlock their full potential. By
              investing in the youth today, we believe that we can create a
              brighter and more promising future for tomorrow.
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={rectangle}
            alt="rectangle"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>
      <section>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", width: "800px" }}>
            <Typography>Empower</Typography>
            <Typography variant="h3" style={{ fontWeight: 1000 }}>
              Unlock Your Potential with UNYN
            </Typography>
            <Typography sx={{ color: "grey" }}>
              At UNYN, we offer a range of impactful programs and events
              designed to empower young individuals. From mentorship programs to
              networking events and international collaborations, we provide the
              resources and support needed to help you thrive.
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: "50px" }}>
            <div style={{ width: "400px" }}>
              <Image
                src={group11}
                alt="group8"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h4" sx={{ fontWeight: 1000 }}>
                Networking Events
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Expand your network and forge valuable connection with
                like-minded individual
              </Typography>
            </div>
            <div style={{ width: "400px" }}>
              <Image
                src={group15}
                alt="group8"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h4" sx={{ fontWeight: 1000 }}>
                International Collaborations
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Gain global exposure and collaborate with students from
                different countries.
              </Typography>
            </div>
            <div style={{ width: "400px" }}>
              <Image
                src={group15}
                alt="group8"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h4" sx={{ fontWeight: 1000 }}>
                Mentorship Programs
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Connect with experienced mentors who will guide you towards
                success
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <Button
              sx={{
                borderRadius: "30px",
                background: "#1AA7EC",
                color: "white",
                padding: "15px 40px",
                marginRight: "20px",
              }}
              onClick={handleOpen}
            >
              Join
            </Button>
            <Button endIcon={<KeyboardArrowRightIcon />}>Learn More </Button>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "600px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">
              Unlock Your Potential and Make a Lasting Impact with UNYN
            </Typography>
            <Typography>
              Joining UNYN offers a unique opportunity for personal growth,
              professional development, and making a positive difference in the
              world. Our dynamic and impactful international student society is
              dedicated to nurturing the talents and potential of young
              individuals across colleges and universities worldwide. Through
              our diverse range of programs, events, and initiatives, we empower
              the youth today to create a brighter and more promising future for
              tomorrow.
            </Typography>
          </div>
          <div>
            <Image src={rectangle6} alt="rectangle6" />
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <Typography variant="h4">Member Testimonials</Typography>
          <Typography>
            Here what our members have to say about their experience with UNYN
          </Typography>
          <div style={{ display: "flex", marginTop: "50px" }}>
            <div>
              <Rating
                name="read-only"
                value={4}
                readOnly
                sx={{ color: "#1AA7EC" }}
              />
              <Typography variant="h6">
                UNYN has provided me with incredible opportunities to grow and
                connect with like-minded individuals.
              </Typography>
              <div style={{ display: "flex" }}>
                <Image src={johndoe} alt="johndoe" />
                <Typography>
                  John Doe <br />{" "}
                  <span style={{ fontSize: "10px" }}>
                    Marketing Manager, XYZ Company
                  </span>
                </Typography>
              </div>
            </div>
            <div>
              <Rating
                color="red"
                name="read-only"
                value={4}
                sx={{ color: "#1AA7EC" }}
                readOnly
              />
              <Typography variant="h6">
                UNYN has provided me with incredible opportunities to grow and
                connect with like-minded individuals.
              </Typography>
              <div style={{ display: "flex" }}>
                <Image src={johndoe2} alt="johndoe" />
                <Typography>
                  John Doe <br />{" "}
                  <span style={{ fontSize: "10px" }}>
                    Marketing Manager, XYZ Company
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundColor: "#1AA7EC",
            padding: "50px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Typography variant="h3" style={{ fontWeight: 1000 }}>
              Empowering Your Potential with UNYN
            </Typography>
            <Typography>
              Join UNYN and unlock endless opportunities for growth
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button
              sx={{
                borderRadius: "30px",
                background: "white",
                color: "black",
                padding: "15px 40px",
                marginRight: "20px",
              }}
              onClick={handleOpen}
            >
              Join
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderRadius: "30px",
                borderColor: "white",
              }}
            >
              Get evolved
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "200px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              Stay Updated with UNYN Newsletter
            </Typography>
            <Typography>
              Gets the latest updates, news and exciting opportunities for UNYN.
            </Typography>
            <div style={{ display: "flex", margin: "30px 0px" }}>
              <TextField placeholder="Enter your email"></TextField>
              <Button
                sx={{
                  borderRadius: "30px",
                  color: "white",
                  padding: "5px 40px",
                  marginRight: "20px",
                  background: "#1AA7EC",
                  marginLeft: "20px",
                }}
              >
                Sign up
              </Button>
            </div>
            <Typography>
              By signing up, you agree to our Term and Conditions.
            </Typography>
          </div>
          <div>
            <Image src={rectangle8} alt="newsletter" />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Typography variant="h3" sx={{ fontWeight: 1000 }}>
              Get in touch
            </Typography>
            <Typography>
              Contact with our team to talk about how we can help your business
              process at scale, or sign up for more info{" "}
            </Typography>
            <div>
              <Typography>
                1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032
              </Typography>
              <Typography>+91-8888888888</Typography>
              <Typography>info@unyn.com</Typography>
            </div>
          </div>
          <div
            style={{
              zIndex: 1,
              backgroundColor: "white",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              height: "400px",
              justifyContent: "space-evenly",
              width: "300px",
              position: "absolute",
              right: 0,
              marginRight: "200px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 1000 }}>
              Say something
            </Typography>
            <TextField
              placeholder="Your name..."
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            ></TextField>
            <TextField
              placeholder="Your mail..."
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
            ></TextField>
            <TextField
              placeholder="Message..."
              minRows={20}
              onChange={(e) =>
                setMessage({ ...message, phoneNumber: e.target.value })
              }
            ></TextField>
            <Button
              sx={{
                width: "100%",
                borderRadius: "30px",
                background: "#1AA7EC",
                color: "white",
                padding: "15px 40px",
                marginRight: "20px",
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalForm
          setMessage={setMessage}
          message={message}
          sendEmail={sendEmail}
        />
      </Modal>
    </main>
  );
}
