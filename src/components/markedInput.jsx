import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import EditorContext from "../EditorContext";
import Icons from "../Icons";
import ClickButton from "../ClickButton";

function MarkedInput(props) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const { setMarkdownText } = useContext(EditorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setTextAreaValue(newValue);
    setMarkdownText(newValue);
  };
  console.log(textAreaValue);

  return (
    <Container>
      <Title>Markdown Text</Title>
      <Icons
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
      <TextArea value={textAreaValue} onChange={onInputChange} />
      <ClickButton />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100vh;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export default MarkedInput;
