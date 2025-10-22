import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaSquareXTwitter,
  FaDownload,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import profileImage from "../assets/img_ 1.png";
import Typed from 'typed.js';

function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.innerHTML = '';// empything the left over for further animation
    }
    
    const options = {
      strings: [
        "AIML Student",
        "Frontend Developer",
        "Video Editor",
        "Problem Solver"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };
    
    const typed = new Typed(typedRef.current, options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-section" id="about">
      <Container
        fluid
        className="bg-slate-900 text-white sticky top-0 shadow-lg w-full hero-section-container"
        style={{ minHeight: "86.4vh" }}
      >
        <Row className="flex flex-col md:flex-row items-center justify-between w-full" style={{ minHeight: "86.4vh" }}>
          <Col md={6} className="text-start">
            <h1
              className="font-bold pt-1"
              style={{ fontSize: 100 }}
            >
              <span style={{ color: "white" }}>Mukul</span>{" "}
              <span style={{ color: "#3b82f6" }}>Singh</span>
            </h1>
            <h4 className="pt-2 hero-section-h4" style={{ fontSize: 35 }}>
              <span ref={typedRef} style={{color:'white'}}></span>
            </h4>
            <p className="max-w-5xl pt-10 hero-section-p" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
              I'm a 3rd-year B.Tech student specializing in Artificial Intelligence & Machine Learning, passionate about solving problems through DSA (Java) and crafting smooth, responsive web experiences using the MERN stack. I enjoy turning complex ideas into simple, user-friendly interfaces and constantly explore new technologies to stay ahead. Beyond coding, I love collaborating on innovative projects that create real-world impact and help me grow as both a developer and a solver.
            </p>
            <div className="mt-6 flex pt-1 hero-section-links">
              <a
                href="https://www.linkedin.com/in/mukul-singh-b26604288"
                className="flex items-center gap-2 transition duration-300 group"
                style={{ color: "white" }}
              >
                <FaLinkedin size={30} className="group-hover:text-yellow-400" />
                <span className="font-semibold group-hover:text-yellow-400">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mukulsingh24"
                className="flex items-center gap-2 transition duration-300 group"
                style={{ color: "white" }}
              >
                <FaGithub size={30} className="group-hover:text-yellow-400" />
                <span className="font-semibold group-hover:text-yellow-400">GitHub</span>
              </a>
              <a
                href="https://x.com/MUKULSINGH5906"
                className="flex items-center gap-2 transition duration-300 group"
                style={{ color: "white" }}
              >
                <FaSquareXTwitter size={30} className="group-hover:text-yellow-400" />
                <span className="font-semibold group-hover:text-yellow-400">X</span>
              </a>
              <a
                href="https://leetcode.com/u/mukulsingh24/"
                className="flex items-center gap-2 transition duration-300 group"
              >
                <SiLeetcode size={24} className="group-hover:text-yellow-400"/>
                <span className="font-semibold group-hover:text-yellow-400">LeetCode</span>
              </a>
            </div>
            <Button
              className="font-bold rounded-lg flex items-center gap-3 transition duration-300 hover:scale-105 hover:shadow-2xl hero-section-btn"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                color: "white",
                border: "none",
                fontSize: "18px",
                justifyContent: "center",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1OPzCAfPJ1ZGjGCyJ-RyIsMagX2rbQc9r/view",
                  "_blank"
                )
              }
            >
              <FaDownload size={24} />
              View Resume
            </Button>
          </Col>

          {/* Right side - Circular photo */}
          <Col md={2} className="flex justify-center items-center hero-section-img">
            <div
              className="relative w-screen h-screen rounded-full overflow-hidden shadow-2xl border-4 hop-animation"
              style={{
                width: '550px',
                height: '550px',
                borderColor: "#3b82f6",
                boxShadow:
                  "0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              <img
                src={profileImage}
                alt="Mukul Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
