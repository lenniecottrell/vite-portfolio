import React, { useState } from "react";
//icons
import mail from "../img/mail.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";
import github from "../img/github.svg";
//animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactMe = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <S_Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#1b1b1b" }}
    >
      <S_Title>
        <S_Hide>
          <motion.h2>Get in touch.</motion.h2>
        </S_Hide>
      </S_Title>
      <div>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <img src={mail} alt="email" onClick={() => setToggle(!toggle)} />
            <h2 layout>Send me a message</h2>
          </S_Social>
          {toggle ? (
            <S_h4 initial="hidden" animate="show">
              lenniecottrell@gmail.com
            </S_h4>
          ) : (
            ""
          )}
        </S_Hide>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <a
              href="https://twitter.com/lenniecottrell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <h2>Say hi on Twitter</h2>
          </S_Social>
        </S_Hide>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <a
              href="https://www.github.com/lenniecottrell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <h2>Check out my GitHub</h2>
          </S_Social>
        </S_Hide>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <a
              href="https://linkedin.com/in/lenniecottrell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <h2>Connect with me</h2>
          </S_Social>
        </S_Hide>
      </div>
    </S_Contact>
  );
};

const S_Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  h2 {
    color: white;
  }
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const S_Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const S_Hide = styled.div`
  overflow: hidden;
`;

const S_h4 = styled(motion.h4)`
  align-items: center;
`;

const S_Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: white;
  }
  img {
    cursor: pointer;
  }
`;

export default ContactMe;
