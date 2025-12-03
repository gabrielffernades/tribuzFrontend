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
      // Formato de entrada: DD/MM/YYYY -> Formato de saída: YYYY-MM-DD
      let dataNascimento = formData.data_nascimento
      if (dataNascimento.includes('/')) {
        const partes = dataNascimento.split('/')
        if (partes.length === 3) {
          dataNascimento = `${partes[2]}-${partes[1]}-${partes[0]}`
        } else {
          setError('Formato de data inválido. Use DD/MM/YYYY')
          setLoading(false)
          return
        }
      }
      
      const usuarioData = {
        nome: formData.nome.trim(),
        cpf: formData.cpf.replace(/\D/g, ''),
        email: formData.email.trim() || null,
        senha: formData.senha,
        data_nascimento: dataNascimento
      }

      console.log('Dados sendo enviados:', usuarioData)

      await criarUsuario(usuarioData)
      alert('Cadastro realizado com sucesso!')
      
      // Redirecionar para login após cadastro
      if (onNavigateToLogin) {
        onNavigateToLogin()
      }
    } catch (err) {
      console.error('Erro completo no cadastro:', err)
      const errorMessage = err.response?.data?.message || err.message || err.error || 'Erro ao criar conta. Tente novamente.'
      setError(errorMessage)
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

