// ========== JS (LÓGICA) ==========
import { useState } from 'react'
import { redefinirSenha } from '../../../services/api'

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

export const useEsqueceuSenha = (onNavigateToLogin) => {
  const [formData, setFormData] = useState({
    cpf: '',
    novaSenha: '',
    confirmaSenha: ''
  })
  const [showNovaSenha, setShowNovaSenha] = useState(false)
  const [showConfirmaSenha, setShowConfirmaSenha] = useState(false)
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

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setFormData(prev => ({
      ...prev,
      cpf: formatted
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Validação básica
    if (!formData.cpf || !formData.novaSenha || !formData.confirmaSenha) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    if (formData.novaSenha !== formData.confirmaSenha) {
      setError('As senhas não coincidem!')
      return
    }

    if (formData.novaSenha.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres!')
      return
    }

    setLoading(true)

    try {
      // Remover formatação do CPF antes de enviar
      const cpfLimpo = formData.cpf.replace(/\D/g, '')
      
      await redefinirSenha(cpfLimpo, formData.novaSenha)
      alert('Senha redefinida com sucesso!')
      
      // Voltar para login após sucesso
      if (onNavigateToLogin) {
        onNavigateToLogin()
      }
    } catch (err) {
      console.error('Erro ao redefinir senha:', err)
      const errorMessage = err.response?.data?.message || err.message || err.error || 'Erro ao redefinir senha. Tente novamente.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const toggleNovaSenhaVisibility = () => {
    setShowNovaSenha(prev => !prev)
  }

  const toggleConfirmaSenhaVisibility = () => {
    setShowConfirmaSenha(prev => !prev)
  }

  const handleVoltarLogin = (e) => {
    e.preventDefault()
    if (onNavigateToLogin) {
      onNavigateToLogin()
    }
  }

  return {
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
  }
}

