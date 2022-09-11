import React from "react";
import trendingUp from "../img/trending-up.svg";
import pumpkinPatch from "../img/Len_with_pup.jpg";
import messageCircle from "../img/message-circle.svg";
import teamwork from "../img/users.svg";
import shuffle from "../img/shuffle.svg";
import styled from "styled-components";
import { GS_Section, GS_Description, GS_Image } from "../styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion"; //this gives you more control over when to trigger animations
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ValuesSection = () => {
  const [element, controls] = useScroll();
  return (
    <S_Values
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <GS_Image>
        <img src={pumpkinPatch} alt="camera 2" />
      </GS_Image>
      <S_Content>
        <S_Title>
          Workplace <span>values</span>
        </S_Title>
        <S_Cards>
          <S_Card>
            <div className="icon">
              <img src={trendingUp} alt="growth" />
              <h3>Growth</h3>
            </div>
            <p>I'm always chasing improvement</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Working together is better than working alone</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={messageCircle} alt="communication" />
              <h3>Communication</h3>
            </div>
            <p>Everyone should be on the same page</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={shuffle} alt="flexibility" />
              <h3>Collaboration</h3>
            </div>
            <p>I love working across teams</p>
          </S_Card>
        </S_Cards>
      </S_Content>
    </S_Values>
  );
};

const S_Content = styled(GS_Description)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const S_Values = styled(GS_Section)`
  /* h2 {
    padding-bottom: 5rem;
  } */
  p {
    padding: 1rem 0rem 1rem 4rem;
    width: 100%;
    //border: 2px solid purple;
  }
`;

const S_Title = styled.h2`
  padding: 0rem 0rem 0rem 5rem;
  text-align: center;
  padding-bottom: 0;
  @media (max-width: 1300px) {
    padding: 2.5rem 0rem 2.5rem 4rem;
  }
`;

const S_Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const S_Card = styled.div`
  flex-basis: auto;
  text-align: left;
  //border: 2px solid purple;
  margin: 2rem 0rem;
  width: 50%;
  .icon {
    display: flex;
    align-items: center;
    //border: 2px solid purple;
    h3 {
      margin: 0rem 0rem 0rem 1rem;
      background: white;
      color: black;
      padding: 1rem;
      width: 100%;
      text-align: center;
      //border: 2px solid purple;
    }
  }
  @media (max-width: 1300px) {
    margin: 1rem 0rem;
    width: 75%;
    font-size: 1.5rem;
    p {
      padding: 1rem 0rem 1rem 4rem;
      margin: 0rem 2rem 0rem 1rem;
      font-size: 2rem;
    }
  }
`;

export default ValuesSection;
