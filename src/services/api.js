// ========== SERVIÇO DE API ==========
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ========== USUÁRIOS ==========
export const criarUsuario = async (usuario) => {
  try {
    const response = await api.post('/usuarios', usuario)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const buscarTodosUsuarios = async () => {
  try {
    const response = await api.get('/usuarios')
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const login = async (nome, senha) => {
  try {
    const response = await api.post('/usuarios/login', { nome, senha })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const redefinirSenha = async (cpf, novaSenha) => {
  try {
    const response = await api.post('/usuarios/redefinir-senha', { cpf, novaSenha })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// ========== TRIBOS ==========
export const buscarTodasTribos = async () => {
  try {
    const response = await api.get('/tribos')
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const criarTribo = async (tribo) => {
  try {
    const response = await api.post('/tribos', tribo)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// ========== GRUPOS ==========
export const buscarTodosGrupos = async () => {
  try {
    const response = await api.get('/grupos')
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

export const criarGrupo = async (grupo) => {
  try {
    const response = await api.post('/grupos', grupo)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

