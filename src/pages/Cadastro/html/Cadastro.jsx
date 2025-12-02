// ========== HTML (JSX) ==========
import {
  PageContainer,
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
  SubmitButton,
  FooterText,
  FooterParagraph,
  FooterLink
} from '../css/Cadastro.styles'
import { useCadastro } from '../js/Cadastro'

function Cadastro({ onNavigateToLogin }) {
  const {
    formData,
    showPassword,
    loading,
    error,
    handleChange,
    handleSubmit,
    handleCPFChange,
    togglePasswordVisibility,
    handleLoginClick
  } = useCadastro(onNavigateToLogin)

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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="data_nascimento">Data de Nascimento</Label>
            <Input
              id="data_nascimento"
              type="date"
              value={formData.data_nascimento}
              onChange={handleChange}
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

          {error && (
            <div style={{ color: '#ff4444', fontSize: '14px', marginBottom: '16px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <SubmitButton type="submit" disabled={loading}>
            <span>{loading ? 'Criando conta...' : 'Criar Conta'}</span>
          </SubmitButton>
        </Form>

        <FooterText>
          <FooterParagraph>
            Já tem uma conta?{' '}
            <FooterLink href="#" onClick={handleLoginClick}>
              Entre aqui
            </FooterLink>
          </FooterParagraph>
        </FooterText>
      </CardContainer>
    </PageContainer>
  )
}

export default Cadastro

