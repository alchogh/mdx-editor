import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import EditorContext from "./EditorContext";

function Icons({ textAreaValue, setTextAreaValue }) {
  const [isChecked, setIsChecked] = useState(false);

  const { setMarkdownText } = useContext(EditorContext);

  const handleChangeTextOption = () => {
    setTextAreaValue((prev) => "# " + prev);
    setMarkdownText("# " + textAreaValue);
  };

  return (
    <IconsContainer>
      <HTag>
        {H_TAG.map((value) => {
          return (
            <button onClick={handleChangeTextOption} key={value.id}>
              <div className="hTagWrap">
                <div className="hTitle">
                  H <span className="hNumber">{value.number}</span>
                </div>
              </div>
            </button>
          );
        })}
      </HTag>

      <Border />

      <Font>
        {FONT_TAG.map((font) => {
          return (
            <button key={font.id}>
              <div className="hTagWrap">
                <div className="hTitle">{font.label}</div>
              </div>
            </button>
          );
        })}
      </Font>

      <Border />

      <ETC>
        {ETC_TAG.map((etc) => {
          return (
            <button key={etc.id}>
              <div className="hTagWrap">
                <div className="hTitle">{etc.label}</div>
              </div>
            </button>
          );
        })}
      </ETC>
    </IconsContainer>
  );
}

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const HTag = styled.div`
  button {
    border: none;
    background-color: white;
    margin-right: 20px;

    :hover {
      cursor: pointer;
      background-color: #e9e6e5;
    }
    .wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid black;
    }
    div {
      display: flex;
      font-size: 20px;
      color: #9a9a9a;
      font-weight: 600;
      align-items: flex-end;
      padding: 4px;

      .hNumber {
        font-size: 16px;
      }
    }
  }
  display: flex;
`;

const Border = styled.div`
  display: flex;
  border-right: 1px solid black;
  height: 1.25rem;
`;

const Font = styled.div`
  button {
    border: none;
    background-color: white;
    margin-right: 20px;
    :hover {
      cursor: pointer;
      background-color: #e9e6e5;
    }
    .wrap {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div {
      display: flex;
      font-size: 20px;
      color: #9a9a9a;
      font-weight: 600;
      align-items: flex-end;
      padding: 4px;
      .hNumber {
        font-size: 16px;
      }
    }
  }
  display: flex;
`;
const ETC = styled.div`
  button {
    border: none;
    background-color: white;
    margin-right: 20px;

    :hover {
      cursor: pointer;
      background-color: #e9e6e5;
    }
    .wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid black;
    }
    div {
      display: flex;
      font-size: 20px;
      color: #9a9a9a;
      font-weight: 600;
      align-items: flex-end;
      padding: 4px;

      .hNumber {
        font-size: 16px;
      }
    }
  }
  display: flex;
`;

export default Icons;

const H_TAG = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
];

const FONT_TAG = [
  { id: 1, label: "B" },
  { id: 2, label: "B" },
  { id: 3, label: "B" },
];

const ETC_TAG = [
  { id: 1, label: "A" },
  { id: 2, label: "C" },
  { id: 3, label: "D" },
  { id: 4, label: "K" },
];
