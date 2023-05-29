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
        <button onClick={handleChangeTextOption}>
          <div className="hTagWrap">
            <div className="hTitle">
              H <span className="hNumber">1</span>
            </div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">
              H <span className="hNumber">2</span>
            </div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">
              H <span className="hNumber">3</span>
            </div>
          </div>
        </button>
      </HTag>

      <Border />

      <Font>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">B</div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">B</div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">B</div>
          </div>
        </button>
      </Font>

      <Border />

      <ETC>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">C</div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">U</div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">F</div>
          </div>
        </button>
        <button>
          <div className="hTagWrap">
            <div className="hTitle">K</div>
          </div>
        </button>
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
