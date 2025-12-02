// ========== JS (LÓGICA) ==========
import { useState } from 'react'
import { criarUsuario } from '../../../services/api'

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
    email: '',
    senha: '',
    data_nascimento: ''
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

    // Validação básica
    if (!formData.nome || !formData.cpf || !formData.senha || !formData.data_nascimento) {
      setError('Por favor, preencha todos os campos obrigatórios.')
      setLoading(false)
      return
    }

    try {
      // Converter data de nascimento para o formato esperado pelo backend (YYYY-MM-DD)
      const dataNascimento = formData.data_nascimento.split('/').reverse().join('-')
      
      const usuarioData = {
        nome: formData.nome,
        cpf: formData.cpf.replace(/\D/g, ''),
        email: formData.email || '',
        senha: formData.senha,
        data_nascimento: dataNascimento
      }

      await criarUsuario(usuarioData)
      alert('Cadastro realizado com sucesso!')
      
      // Redirecionar para login após cadastro
      if (onNavigateToLogin) {
        onNavigateToLogin()
      }
    } catch (err) {
      setError(err.message || 'Erro ao criar conta. Tente novamente.')
      console.error('Erro no cadastro:', err)
    } finally {
      setLoading(false)
    }
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
    loading,
    error,
    handleChange,
    handleSubmit,
    handleCPFChange,
    togglePasswordVisibility,
    handleLoginClick
  }
}

