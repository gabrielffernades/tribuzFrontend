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
  background-color: #101622;
  overflow-x: hidden;
  padding: 1rem;
`

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.75rem;
  background-color: #192233;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`

export const Title = styled.h1`
  color: #ffffff;
  letter-spacing: -0.025em;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25;
  font-family: 'Spline Sans', sans-serif;
`

export const Subtitle = styled.p`
  color: #92a4c9;
  font-size: 1rem;
  font-family: 'Spline Sans', sans-serif;
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.5rem;
  font-family: 'Spline Sans', sans-serif;
`

export const Input = styled.input`
  display: flex;
  width: 100%;
  min-width: 0;
  flex: 1;
  resize: none;
  overflow: hidden;
  border-radius: 0.5rem;
  color: #ffffff;
  outline: 0;
  border: 1px solid #324467;
  background-color: #111722;
  height: 3.5rem;
  padding: 0.9375rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  transition: all 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &::placeholder {
    color: #92a4c9;
  }

  &:focus {
    border-color: #2b6cee;
    box-shadow: 0 0 0 2px rgba(43, 108, 238, 0.5);
  }
`

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: stretch;
  
  input {
    pointer-events: auto;
  }
  
  button {
    pointer-events: auto;
  }
`

export const PasswordInput = styled(Input)`
  padding-right: 3rem;
  position: relative;
  z-index: 2;
`

export const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 3rem;
  color: #92a4c9;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 3;

  &:hover {
    color: #ffffff;
  }
`

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
`

export const SubmitButton = styled.button`
  display: flex;
  margin-top: 0.5rem;
  min-width: 84px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 3.5rem;
  padding: 0 1.25rem;
  width: 100%;
  background-color: #2b6cee;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.015em;
  border: none;
  transition: background-color 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &:hover {
    background-color: rgba(43, 108, 238, 0.9);
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const FooterText = styled.div`
  text-align: center;
`

export const FooterParagraph = styled.p`
  color: #92a4c9;
  font-size: 0.875rem;
  font-family: 'Spline Sans', sans-serif;
`

export const FooterLink = styled.a`
  font-weight: 600;
  color: #2b6cee;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

