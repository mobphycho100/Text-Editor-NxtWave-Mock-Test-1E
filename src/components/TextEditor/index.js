import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  MainContainer,
  LeftPanel,
  Heading,
  Image,
  RightPanel,
  StylesContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    textContent: '',
  }

  toggleBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  toggleItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  toggleUnderline = () => {
    this.setState(prev => ({isUnderlined: !prev.isUnderlined}))
  }

  handleTextArea = event => {
    this.setState({textContent: event.target.value})
  }

  render() {
    const {textContent, isBold, isItalic, isUnderlined} = this.state

    return (
      <BgContainer>
        <MainContainer>
          <LeftPanel>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftPanel>
          <RightPanel>
            <StylesContainer>
              <li>
                <BoldButton
                  data-testid="bold"
                  type="button"
                  isBold={isBold}
                  onClick={this.toggleBold}
                >
                  <VscBold size={24} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  data-testid="italic"
                  type="button"
                  isItalic={isItalic}
                  onClick={this.toggleItalic}
                >
                  <GoItalic size={24} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  data-testid="underline"
                  type="button"
                  isUnderlined={isUnderlined}
                  onClick={this.toggleUnderline}
                >
                  <AiOutlineUnderline size={24} />
                </UnderlineButton>
              </li>
            </StylesContainer>
            <TextArea
              value={textContent}
              onChange={this.handleTextArea}
              isBold={isBold}
              isItalic={isItalic}
              isUnderlined={isUnderlined}
            />
          </RightPanel>
        </MainContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
