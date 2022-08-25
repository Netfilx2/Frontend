import { useState } from "react";
import styled, { css } from "styled-components";

const Qna = ({ title, content }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Wrap>
      <Question onClick={() => setClicked(!clicked)}>
        {title}
        <DownBtn click={clicked}>+</DownBtn>
      </Question>
      <Answer click={clicked}>
        <AnswerText>{content}</AnswerText>
      </Answer>
    </Wrap>
  );
};

export default Qna;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;
const Question = styled.button`
  display: inline;

  border: 0;
  font-weight: 400;
  padding: 0.8em 2.2em 0.8em 1.2em;
  position: relative;
  width: 100%;
  margin-bottom: 1px;

  background: #303030;
  display: block;
  text-align: left;

  color: #fff;

  font-size: 1.6em;

  cursor: pointer;
`;
const Answer = styled.div`
  ${(props) =>
    props.click
      ? css`
          max-height: 1200px;
        `
      : css`
          max-height: 0;
          overflow: hidden;
        `}

  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  white-space: pre-wrap;
  background-color: #303030;
`;
const AnswerText = styled.div`
  padding: 1.2em;
  font-size: 1.6em;
`;
const DownBtn = styled.div`
  position: absolute;
  bottom: 3px;

  font-size: 50px;
  font-weight: 100;
  margin-left: 88%;

  transform: ${(props) => (props.click ? "rotate(-45deg)" : "rotate(0)")};
`;
