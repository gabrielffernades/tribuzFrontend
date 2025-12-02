// ========== HTML (JSX) ==========
import {
  PageContainer,
  ContentWrapper,
  CardContainer,
  HeaderContainer,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  PasswordContainer,
  PasswordInput,
  ToggleButton,
  Icon,
  ActionsContainer,
  SubmitButton,
  ForgotPasswordLink,
  FooterText,
  FooterParagraph,
  FooterLink
} from '../css/Login.styles'
import { useLogin } from '../js/Login'

function Login({ onNavigateToCadastro, onNavigateToEsqueceuSenha, onNavigateToDashboard }) {
  const {
    formData,
    showPassword,
    loading,
    error,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    handleCadastroClick,
    handleForgotPasswordClick
  } = useLogin(onNavigateToCadastro, onNavigateToEsqueceuSenha, onNavigateToDashboard)

  return (
    <PageContainer>
      <ContentWrapper>
        <CardContainer>
          <HeaderContainer>
            <Title>Login</Title>
            <Subtitle>Bem-vindo de volta! Por favor, insira seus dados.</Subtitle>
          </HeaderContainer>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Senha</Label>
              <PasswordContainer>
                <PasswordInput
                  id="senha"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
                <ToggleButton onClick={togglePasswordVisibility}>
                  <Icon>{showPassword ? 'visibility_off' : 'visibility'}</Icon>
                </ToggleButton>
              </PasswordContainer>
            </FormGroup>

            {error && (
              <div style={{ color: '#ff4444', fontSize: '14px', marginBottom: '16px', textAlign: 'center' }}>
                {error}
              </div>
            )}
            <ActionsContainer>
              <SubmitButton type="submit" disabled={loading}>
                <span>{loading ? 'Entrando...' : 'Entrar'}</span>
              </SubmitButton>
              <ForgotPasswordLink href="#" onClick={handleForgotPasswordClick}>
                Esqueceu a senha?
              </ForgotPasswordLink>
            </ActionsContainer>
          </Form>

          <FooterText>
            <FooterParagraph>
              Não tem uma conta?{' '}
              <FooterLink href="#" onClick={handleCadastroClick}>
                Cadastre-se
              </FooterLink>
            </FooterParagraph>
          </FooterText>
        </CardContainer>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Login

