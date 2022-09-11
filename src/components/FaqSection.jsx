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
              I'm proficient with essential frontend web dev tools (HTML, CSS,
              Vanilla JS, ES6) and confident with React, Express, and using a UI
              or CSS library. VSCode is my editor of choice (Monokai theme at
              the moment!). Git and Github are my good friends. Vite is my
              boilerplate of choice.
            </p>
            <p>
              On the backend, I'm comfortable writing SQL queries, doing basic
              table joins, and I'm generally familiar with relational database
              concepts. Learning NoSQL is next on my list.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are your goals?">
          <div className="answer">
            <p>
              In tech, I want to do work that enriches lives, helps people, and
              feels important. I want to be learning all the time, and be pushed
              outside my comfort zone on a regular basis.
            </p>
            <p>
              In life, I want to be a good dad, a decent banjo player, a
              generous baker, and a supportive partner.
            </p>
          </div>
        </Toggle>
        <Toggle title="Do you have hobbies?">
          <div className="answer">
            <p>You bet!</p>
            <p>
              I like baking very much, especially sourdough bread, scones, and
              any type of cookies. I like to read fantasy, science fiction,
              graphic novels, and science-y nonfiction. Some of my favorite
              books I've read recently are "The Name of the Wind" by Patrick
              Rothfuss, "Black Buck" by Mateo Askaripour, and "Deep Work" by Cal
              Newport.
            </p>
            <p>
              I used to be a music teacher, and before the pandemic much of my
              time was dedicated to conducting and singing choral music (I went
              to school for music). The pandemic and a career change shifted my
              priorities and my available time, so these days I'm learning the
              banjo to keep up my music making.
            </p>
            <p>I also like hiking, snowboarding, and generally exploring.</p>
          </div>
        </Toggle>
        <Toggle title="Your dog is really cute!">
          <div className="answer">
            <p>I know right? She's a very good girl... most of the time.</p>
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
