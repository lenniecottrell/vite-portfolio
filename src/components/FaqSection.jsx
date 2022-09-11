import React from "react";
import styled from "styled-components";
import { GS_Section } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any <span>Questions?</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What are your tech skills?">
          <div className="answer">
            <p>
              I'm strongest on the front end, but I'm comfortable with back end
              tools as well.
            </p>
            <p>
              I'm fluent in HTML, CSS/SCSS, and JavaScript, and know enough
              Python to make things happen. I love building with React, and I'm
              very comfortable with CSS frameworks like Bootstrap and Bulma.
            </p>
            <p>
              I enjoy working in relational databases with SQL and have used
              PostgreSQL and SQLite to build small projects.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are your goals?">
          <div className="answer">
            <p>
              I want to do work that enriches lives. There is great power
              inherent in tech, and I want to wield that power for good.
            </p>
          </div>
        </Toggle>
        <Toggle title="Do you have hobbies?">
          <div className="answer">
            <p>You bet!</p>
            <p>
              I like baking very much, especially cookies and scones. I like to
              read fantasy, science fiction, graphic novels, and science-y
              nonfiction. Some of my favorite books I've read recently are "The
              Name of the Wind" by Patrick Rothfuss, "Norse Mythology" by Niel
              Gaiman, and "Other Minds: The Octopus, the Sea, and the Deep
              Origins of Conciousness" by Peter Godfrey-Smith.
            </p>
            <p>
              Before the pandemic, much of my time was dedicated to conducting
              and singing choral music (I have two music degrees). Singing is,
              unfortunately, a super-spreading activity, so these days I try to
              improve my piano and ukulele skills when I make music.
            </p>
            <p>
              I also like hiking, snowboarding, and generally exploring the
              world with my partner and our two dogs.
            </p>
          </div>
        </Toggle>
        <Toggle title="Your dog is really cute!">
          <div className="answer">
            <p>I know right? She's a very good girl.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(GS_Section)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 2rem 0rem 0rem;
    }
  }
  @media (max-width: 1300px) {
    p {
      font-size: 2rem;
    }
  }
`;

export default FaqSection;
