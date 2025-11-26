// ========== CSS (STYLED COMPONENTS) ==========
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
`

export const Sidebar = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #1E1F22;
  padding: 0.75rem;
`

export const SidebarButton = styled.button`
  position: relative;
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.$active ? '0.75rem' : '9999px'};
  background-color: ${props => props.$active ? '#5865F2' : '#2B2D31'};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &:hover {
    border-radius: 0.75rem;
    background-color: #5865F2;
  }

  ${props => props.$active && `
    &::before {
      content: '';
      position: absolute;
      left: -0.75rem;
      height: 2.5rem;
      width: 0.25rem;
      border-radius: 0 0.25rem 0.25rem 0;
      background-color: #ffffff;
    }
  `}
`

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' ${props => props.$fill ? '1' : '0'}, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.5rem;
  color: ${props => props.$active ? '#ffffff' : '#F2F3F5'};
  transition: color 0.2s;
`

export const Divider = styled.div`
  height: 1px;
  width: 2rem;
  background-color: #3F4147;
`

export const MainContent = styled.main`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  background-color: #2B2D31;
`

export const Header = styled.header`
  display: flex;
  height: 3rem;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  border-bottom: 1px solid #3F4147;
  padding: 0 1rem;
`

export const HeaderTitle = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const ContentArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
`

export const WelcomeTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const WelcomeSubtitle = styled.p`
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
`

export const ModalContainer = styled.div.attrs(props => ({
  style: {
    zIndex: props.$zIndex || 20,
    padding: props.$padding || '0'
  }
}))`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TribosModal = styled.div`
  display: flex;
  height: 550px;
  width: 100%;
  max-width: 32rem;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #2B2D31;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

export const ModalHeader = styled.header`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const ModalSubtitle = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const SearchContainer = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  background-color: #1E1F22;
  padding: 0.625rem 1rem 0.625rem 2.5rem;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
  transition: all 0.2s;

  &::placeholder {
    color: #949BA4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5865F2;
  }
`

export const SearchIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.25rem;
  color: #949BA4;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #949BA4;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`

export const CloseIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.5rem;
`

export const TribosList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  padding: 1rem;
  padding-bottom: 1rem;
`

export const TriboItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const TriboAvatar = styled.div`
  aspect-ratio: 1;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const TriboInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const TriboName = styled.h3`
  font-weight: 600;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
  transition: color 0.2s;

  ${TriboItem}:hover & {
    color: #ffffff;
  }
`

export const TriboMembers = styled.p`
  font-size: 0.875rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const ArrowIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  color: #949BA4;
`

export const FeedModal = styled.div`
  display: flex;
  height: 100%;
  max-height: 700px;
  width: 100%;
  max-width: 48rem;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #2B2D31;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

export const FeedHeader = styled.header`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #3F4147;
  padding: 1rem;
`

export const FeedHeaderIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.25rem;
  color: #949BA4;
`

export const FeedTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const FeedContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`

export const FeedMessages = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding: 1rem;
`

export const CommentCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

export const UserAvatar = styled.div`
  aspect-ratio: 1;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`

export const CommentAuthor = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const CommentTime = styled.p`
  font-size: 0.75rem;
  font-weight: normal;
  line-height: normal;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const CommentText = styled.p`
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
`

export const FeedForm = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 1rem;
`

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
`

export const FormTextarea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 0.5rem;
  border: none;
  background-color: #1E1F22;
  padding: 0.625rem 1rem 0.625rem 1rem;
  padding-right: 6rem;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
  transition: all 0.2s;

  &::placeholder {
    color: #949BA4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5865F2;
  }
`

export const FormButton = styled.button`
  position: absolute;
  bottom: 0.375rem;
  right: 0.375rem;
  border-radius: 0.375rem;
  background-color: #5865F2;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &:hover {
    background-color: rgba(88, 101, 242, 0.8);
  }
`

// Chat Modal Styles
export const ChatModal = styled.div`
  display: flex;
  height: 100%;
  max-height: 700px;
  width: 100%;
  max-width: 48rem;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #2B2D31;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

export const ChatHeader = styled.header`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #3F4147;
  padding: 1rem;
`

export const ChatUserAvatar = styled.div`
  aspect-ratio: 1;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    background-color: ${props => props.$status === 'online' ? '#23A55A' : '#949BA4'};
    border: 2px solid #2B2D31;
  }
`

export const ChatUserInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ChatUserName = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const ChatUserStatus = styled.p`
  font-size: 0.75rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const ChatContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`

export const ChatMessages = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding: 1rem;
`

export const MessageBubble = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex-direction: ${props => props.$sender === 'me' ? 'row-reverse' : 'row'};
`

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  gap: 0.25rem;
  align-items: ${props => props.$sender === 'me' ? 'flex-end' : 'flex-start'};
`

export const MessageText = styled.div`
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$sender === 'me' ? '#5865F2' : '#1E1F22'};
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
  word-wrap: break-word;
`

export const MessageTime = styled.p`
  font-size: 0.75rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
  padding: 0 0.5rem;
`

export const ChatForm = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 1rem;
  position: relative;
`

export const ChatInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  background-color: #1E1F22;
  padding: 0.625rem 1rem;
  padding-right: 6rem;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
  transition: all 0.2s;

  &::placeholder {
    color: #949BA4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5865F2;
  }
`

export const ChatSendButton = styled.button`
  position: absolute;
  bottom: 0.375rem;
  right: 0.375rem;
  border-radius: 0.375rem;
  background-color: #5865F2;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Spline Sans', sans-serif;
  z-index: 1;

  &:hover {
    background-color: rgba(88, 101, 242, 0.8);
  }
`

