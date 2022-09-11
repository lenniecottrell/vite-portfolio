import styled from "styled-components";
import { motion } from "framer-motion";

export const GS_Section = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const GS_Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h1 {
    font-weight: lighter;
  }
  button {
    margin: 0rem 2rem 0rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
    P {
      font-size: 2rem;
    }
  }
`;

export const GS_Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const GS_Hide = styled.div`
  overflow: hidden;
`;
