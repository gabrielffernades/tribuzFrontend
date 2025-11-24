// ========== JS (LÓGICA) ==========
import { useState } from 'react'

export const formatCPF = (value) => {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }
  return value
}

export const useCadastro = (onNavigateToLogin) => {
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

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setFormData(prev => ({
      ...prev,
      cpf: formatted
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const handleLoginClick = (e) => {
    e.preventDefault()
    if (onNavigateToLogin) {
      onNavigateToLogin()
    }
  }

  return {
    formData,
    showPassword,
    handleChange,
    handleSubmit,
    handleCPFChange,
    togglePasswordVisibility,
    handleLoginClick
  }
}

