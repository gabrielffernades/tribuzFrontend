// ========== JS (LÓGICA) ==========
import { useState } from 'react'
import { login } from '../../../services/api'

export const useLogin = (onNavigateToCadastro, onNavigateToEsqueceuSenha, onNavigateToDashboard) => {
  const [formData, setFormData] = useState({
    nome: '',
    senha: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const usuario = await login(formData.nome, formData.senha)
      console.log('Login realizado com sucesso:', usuario)
      
      // Salvar usuário logado no localStorage
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
      
      // Navegar para dashboard após login
      if (onNavigateToDashboard) {
        onNavigateToDashboard()
      }
    } catch (err) {
      setError(err.message || 'Erro ao fazer login. Verifique suas credenciais.')
      console.error('Erro no login:', err)
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const handleCadastroClick = (e) => {
    e.preventDefault()
    if (onNavigateToCadastro) {
      onNavigateToCadastro()
    }
  }

  const handleForgotPasswordClick = (e) => {
    e.preventDefault()
    if (onNavigateToEsqueceuSenha) {
      onNavigateToEsqueceuSenha()
    }
  }

  return {
    formData,
    showPassword,
    loading,
    error,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    handleCadastroClick,
    handleForgotPasswordClick
  }
}

