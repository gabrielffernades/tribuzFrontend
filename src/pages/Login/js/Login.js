// ========== JS (LÓGICA) ==========
import { useState } from 'react'

export const useLogin = (onNavigateToCadastro, onNavigateToEsqueceuSenha, onNavigateToDashboard) => {
  const [formData, setFormData] = useState({
    nome: '',
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
    // Dados mockados - aqui você pode adicionar a lógica de login
    console.log('Dados do login:', formData)
    
    // Navegar para dashboard após login
    if (onNavigateToDashboard) {
      onNavigateToDashboard()
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
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    handleCadastroClick,
    handleForgotPasswordClick
  }
}

