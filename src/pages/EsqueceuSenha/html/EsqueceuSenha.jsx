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
  PasswordContainer,
  PasswordInput,
  ToggleButton,
  Icon,
  SubmitButton,
  FooterText,
  FooterLink
} from '../css/EsqueceuSenha.styles'
import { useEsqueceuSenha } from '../js/EsqueceuSenha'

function EsqueceuSenha({ onNavigateToLogin }) {
  const {
    formData,
    showNovaSenha,
    showConfirmaSenha,
    handleChange,
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
          <Subtitle>Sem problemas. Insira sua nova senha abaixo.</Subtitle>
        </HeaderContainer>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="novaSenha">Senha Nova</Label>
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
            <Label htmlFor="confirmaSenha">Confirma Senha Nova</Label>
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

          <SubmitButton type="submit">
            Redefinir Senha
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

