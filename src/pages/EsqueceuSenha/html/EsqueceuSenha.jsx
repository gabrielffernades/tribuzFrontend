// ========== HTML (JSX) ==========
import {
  PageContainer,
  ContentWrapper,
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
  SubmitButton,
  FooterText,
  FooterLink,
  ErrorMessage
} from '../css/EsqueceuSenha.styles'
import { useEsqueceuSenha } from '../js/EsqueceuSenha'

function EsqueceuSenha({ onNavigateToLogin }) {
  const {
    formData,
    showNovaSenha,
    showConfirmaSenha,
    loading,
    error,
    handleChange,
    handleCPFChange,
    handleSubmit,
    toggleNovaSenhaVisibility,
    toggleConfirmaSenhaVisibility,
    handleVoltarLogin
  } = useEsqueceuSenha(onNavigateToLogin)

  return (
    <PageContainer>
      <ContentWrapper>
        <HeaderContainer>
          <Title>Esqueceu a Senha?</Title>
          <Subtitle>Digite seu CPF e defina uma nova senha.</Subtitle>
        </HeaderContainer>

        <Form onSubmit={handleSubmit}>
          {error && (
            <ErrorMessage>{error}</ErrorMessage>
          )}
          
          <FormGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleCPFChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="novaSenha">Nova Senha</Label>
            <PasswordContainer>
              <PasswordInput
                id="novaSenha"
                type={showNovaSenha ? 'text' : 'password'}
                placeholder="Digite sua nova senha"
                value={formData.novaSenha}
                onChange={handleChange}
                required
              />
              <ToggleButton
                type="button"
                aria-label="Toggle password visibility"
                onClick={toggleNovaSenhaVisibility}
              >
                <Icon>{showNovaSenha ? 'visibility_off' : 'visibility'}</Icon>
              </ToggleButton>
            </PasswordContainer>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmaSenha">Confirmar Nova Senha</Label>
            <PasswordContainer>
              <PasswordInput
                id="confirmaSenha"
                type={showConfirmaSenha ? 'text' : 'password'}
                placeholder="Confirme sua nova senha"
                value={formData.confirmaSenha}
                onChange={handleChange}
                required
              />
              <ToggleButton
                type="button"
                aria-label="Toggle password visibility"
                onClick={toggleConfirmaSenhaVisibility}
              >
                <Icon>{showConfirmaSenha ? 'visibility_off' : 'visibility'}</Icon>
              </ToggleButton>
            </PasswordContainer>
          </FormGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Redefinindo...' : 'Redefinir Senha'}
          </SubmitButton>
        </Form>

        <FooterText>
          <FooterLink href="#" onClick={handleVoltarLogin}>
            Voltar para o Login
          </FooterLink>
        </FooterText>
      </ContentWrapper>
    </PageContainer>
  )
}

export default EsqueceuSenha

