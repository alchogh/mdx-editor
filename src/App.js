import React, { useState } from "react";
import "./App.css";
import MarkedInput from "./components/markedInput";
import Result from "./components/result";
import styled from "styled-components";
import EditorContext from "./EditorContext";
function App() {
  const [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-top: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default App;
