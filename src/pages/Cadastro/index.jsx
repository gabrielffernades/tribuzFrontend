// ========== IMPORTS ==========
import { useState } from 'react'
import styled from 'styled-components'

// ========== CSS (STYLED COMPONENTS) ==========
const PageContainer = styled.div`
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

const CardContainer = styled.div`
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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`

const Title = styled.h1`
  color: #ffffff;
  letter-spacing: -0.025em;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25;
  font-family: 'Spline Sans', sans-serif;
`

const Subtitle = styled.p`
  color: #92a4c9;
  font-size: 1rem;
  font-family: 'Spline Sans', sans-serif;
`

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.5rem;
  font-family: 'Spline Sans', sans-serif;
`

const Input = styled.input`
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

const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: stretch;
`

const PasswordInput = styled(Input)`
  padding-right: 3rem;
`

const ToggleButton = styled.button`
  position: absolute;
  inset: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  color: #92a4c9;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`

const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
`

const SubmitButton = styled.button`
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

const FooterText = styled.div`
  text-align: center;
`

const FooterParagraph = styled.p`
  color: #92a4c9;
  font-size: 0.875rem;
  font-family: 'Spline Sans', sans-serif;
`

const FooterLink = styled.a`
  font-weight: 600;
  color: #2b6cee;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

// ========== JS (LÓGICA) ==========
function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    senha: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Dados mockados - aqui você pode adicionar a lógica de cadastro
    console.log('Dados do cadastro:', formData)
    alert('Cadastro realizado com sucesso! (dados mockados)')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    }
    return value
  }

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setFormData(prev => ({
      ...prev,
      cpf: formatted
    }))
  }

  // ========== HTML (JSX) ==========
  return (
    <PageContainer>
      <CardContainer>
        <HeaderContainer>
          <Title>Registro</Title>
          <Subtitle>Crie sua conta para começar.</Subtitle>
        </HeaderContainer>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleCPFChange}
              maxLength="14"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="senha">Senha</Label>
            <PasswordContainer>
              <PasswordInput
                id="senha"
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleChange}
              />
              <ToggleButton
                type="button"
                aria-label="Toggle password visibility"
                onClick={togglePasswordVisibility}
              >
                <Icon>{showPassword ? 'visibility_off' : 'visibility'}</Icon>
              </ToggleButton>
            </PasswordContainer>
          </FormGroup>

          <SubmitButton type="submit">
            <span>Criar Conta</span>
          </SubmitButton>
        </Form>

        <FooterText>
          <FooterParagraph>
            Já tem uma conta?{' '}
            <FooterLink href="#" onClick={(e) => {
              e.preventDefault()
              // Aqui você pode adicionar navegação para login
              console.log('Navegar para login')
            }}>
              Entre aqui
            </FooterLink>
          </FooterParagraph>
        </FooterText>
      </CardContainer>
    </PageContainer>
  )
}

export default Cadastro

