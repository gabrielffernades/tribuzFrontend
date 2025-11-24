// ========== CSS (STYLED COMPONENTS) ==========
import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f8;
  
  @media (prefers-color-scheme: dark) {
    background-color: #101622;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.75rem;
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  @media (prefers-color-scheme: dark) {
    background-color: #192233;
  }
`

export const HeaderContainer = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  font-family: 'Spline Sans', sans-serif;
  
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  font-family: 'Spline Sans', sans-serif;
  
  @media (prefers-color-scheme: dark) {
    color: #92a4c9;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  font-family: 'Spline Sans', sans-serif;
  
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`

export const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  min-width: 0;
  flex: 1;
  resize: none;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  padding: 1rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  color: #111827;
  transition: all 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: 0;
    border-color: #2b6cee;
    box-shadow: 0 0 0 2px rgba(43, 108, 238, 0.2);
  }
  
  @media (prefers-color-scheme: dark) {
    border-color: #324467;
    background-color: #111722;
    color: #ffffff;
    
    &::placeholder {
      color: #92a4c9;
    }
    
    &:focus {
      border-color: #2b6cee;
    }
  }
`

export const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: stretch;
`

export const PasswordInput = styled(Input)`
  border-radius: 0.5rem 0 0 0.5rem;
  border-right: 0;
  padding-right: 0.5rem;
`

export const ToggleButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.5rem 0.5rem 0;
  border: 1px solid #d1d5db;
  border-left: 0;
  background-color: #f9fafb;
  padding-right: 1rem;
  color: #6b7280;
  transition: color 0.2s;
  
  @media (prefers-color-scheme: dark) {
    border-color: #324467;
    border-left: 0;
    background-color: #111722;
    color: #92a4c9;
  }
`

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SubmitButton = styled.button`
  display: flex;
  height: 3.5rem;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 0 1.25rem;
  background-color: #2b6cee;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.015em;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(43, 108, 238, 0.3), 0 2px 4px -1px rgba(43, 108, 238, 0.2);
  transition: all 0.2s ease-in-out;
  font-family: 'Spline Sans', sans-serif;

  &:hover {
    background-color: #2563eb;
    box-shadow: 0 6px 8px -1px rgba(43, 108, 238, 0.4), 0 4px 6px -1px rgba(43, 108, 238, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px -1px rgba(43, 108, 238, 0.3), 0 1px 2px -1px rgba(43, 108, 238, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(43, 108, 238, 0.3);
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ForgotPasswordLink = styled.a`
  text-align: center;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: normal;
  color: #2b6cee;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(43, 108, 238, 0.9);
  }
`

export const FooterText = styled.div`
  text-align: center;
`

export const FooterParagraph = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  font-family: 'Spline Sans', sans-serif;
  
  @media (prefers-color-scheme: dark) {
    color: #92a4c9;
  }
`

export const FooterLink = styled.a`
  font-weight: 500;
  color: #2b6cee;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(43, 108, 238, 0.9);
  }
`

