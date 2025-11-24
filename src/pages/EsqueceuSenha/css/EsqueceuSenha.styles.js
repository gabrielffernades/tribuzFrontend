// ========== CSS (STYLED COMPONENTS) ==========
import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #101622;
  padding: 1rem;
  color: #F2F3F5;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 28rem;
  border-radius: 0.5rem;
  background-color: #313338;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  background-color: #1E1F22;
  padding: 0.625rem 1rem;
  color: #F2F3F5;
  font-size: 1rem;
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
  color: #949BA4;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 3;

  &:hover {
    color: #F2F3F5;
  }
`

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
`

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 0.375rem;
  background-color: #5865F2;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Spline Sans', sans-serif;
  box-shadow: 0 4px 6px -1px rgba(88, 101, 242, 0.3), 0 2px 4px -1px rgba(88, 101, 242, 0.2);

  &:hover {
    background-color: rgba(88, 101, 242, 0.85);
    box-shadow: 0 6px 8px -1px rgba(88, 101, 242, 0.4), 0 4px 6px -1px rgba(88, 101, 242, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px -1px rgba(88, 101, 242, 0.3), 0 1px 2px -1px rgba(88, 101, 242, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5865F2, 0 0 0 4px rgba(88, 101, 242, 0.3);
  }
`

export const FooterText = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`

export const FooterLink = styled.a`
  font-size: 0.875rem;
  color: #5865F2;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
  }
`

