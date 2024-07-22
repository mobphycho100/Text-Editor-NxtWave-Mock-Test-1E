import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
  padding: 20px;
  font-family: Roboto;
`

export const MainContainer = styled.div`
  display: flex;
  background-color: #1b1c22;
  padding: 12px;
  width: 95%;
  max-width: 850px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`

export const LeftPanel = styled.div`
  padding: 0 20px;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;

  @media screen and (max-width: 680px) {
    width: 100%;
    margin-bottom: 30px;
  }
`

export const Heading = styled.h1`
  font-size: 25px;
`

export const Image = styled.img`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (max-width: 680px) {
    width: 80%;
  }
`

export const RightPanel = styled.div`
  background-color: #25262c;
  border: solid 1px #334155;
  border-radius: 10px;
  flex: 1;
`

export const StylesContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  list-style-type: none;
  margin: 0;
`

export const BoldButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
  margin-right: 10px;
  cursor: pointer;
`

export const ItalicButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
  margin-right: 10px;
  cursor: pointer;
`

export const UnderlineButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isUnderlined ? '#faff00' : '#f1f5f9')};
  margin-right: 10px;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 470px;
  padding: 12px;
  background-color: #25262c;
  color: #ffffff;
  border: 1px solid #334155;
  border-radius: 5px;
  font-size: 17px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
  outline: none;
  resize: none;
  font-family: Roboto;

  @media screen and (max-width: 680px) {
    height: 350px;
  }
`
