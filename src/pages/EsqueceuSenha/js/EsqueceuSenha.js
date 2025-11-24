// ========== JS (LÓGICA) ==========
import { useState } from 'react'

export const useEsqueceuSenha = (onNavigateToLogin) => {
  const [formData, setFormData] = useState({
    novaSenha: '',
    confirmaSenha: ''
  })
  const [showNovaSenha, setShowNovaSenha] = useState(false)
  const [showConfirmaSenha, setShowConfirmaSenha] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação básica
    if (formData.novaSenha !== formData.confirmaSenha) {
      alert('As senhas não coincidem!')
      return
    }

    if (formData.novaSenha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres!')
      return
    }

    // Dados mockados - aqui você pode adicionar a lógica de redefinição de senha
    console.log('Redefinir senha:', formData)
    alert('Senha redefinida com sucesso! (dados mockados)')
    
    // Voltar para login após sucesso
    if (onNavigateToLogin) {
      onNavigateToLogin()
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
    handleChange,
    handleSubmit,
    toggleNovaSenhaVisibility,
    toggleConfirmaSenhaVisibility,
    handleVoltarLogin
  }
}

