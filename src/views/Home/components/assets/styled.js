import styled from "styled-components";

export const HomeBox = styled.div`
  height: 100vh;
`;

export const CoverBox = styled.div`
  position: absolute;
  width: 100%;
  min-width: 400px;
  height: 45%;
  background-color: #002d5c;
  z-index: 2;
`;

export const Container = styled.div`
  width: 400px;
  height: 750px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 1%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  z-index: 3;

  @media (min-width: 600px) {
    width: 600px;
    height: 750px;
  }
`;

export const Logo = styled.img`
  padding: 20px;
  width: 300px;
`;

export const ContainerMessages = styled.div`
  position: relative;
  height: 500px;
  width: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  behavior: smooth;
  margin-top: 60px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }
  ::-webkit-ms-scrollbar {
    width: 8px;
  }
  ::-webkit-ms-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }
  ::-webkit-o-scrollbar {
    width: 8px;
  }
  ::-webkit-o-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }

  .loaderContent {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 120px;
    align-items: center;
  }
`;

export const ContentMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hours = styled.div`
  font-size: 10px;
  margin-top: 10px;
  text-align: right;
  margin-left: 5px;
  font-family: roboto;
`;

export const User = styled.div`
  max-width: 255px;
  padding: 8px;
  margin: 5px;
  border-radius: 8px 0px 8px 8px;
  margin-left: auto;
  color: #000;
  box-shadow: 1px;
  background: #e7e7e7;
`;

export const Bot = styled.div`
  background: #f9f9f9;
  max-width: 255px;
  border-radius: 9px;
  padding: 8px;
  margin: 5px;
  margin-right: auto;
  align-self: flex-start;
  color: #2f4f4f;
`;

export const ContentInput = styled.div`
  border: 1px solid #aaa;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 3px 3px 10px;
  width: 400px;
  margin-top: 20px;
`;

export const InputMessage = styled.input`
  height: 45px;
  flex: 1;
  margin: 0 0 0 10px;
  border: 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  resize: none;
`;

export const CButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.8s;
  width: 30px;
  height: 30px;
  border: 0;

  svg {
    transition: color 0.25s;
  }

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: 0;
  }
`;
