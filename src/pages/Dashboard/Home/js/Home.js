// ========== JS (LÓGICA) ==========
import { useState, useEffect } from 'react'
import { buscarTodosUsuarios } from '../../../../services/api'


// Dados mockados para gráfico de atividade
export const mockActivityData = [
  { day: 'Seg', height: '60%' },
  { day: 'Ter', height: '80%' },
  { day: 'Qua', height: '50%' },
  { day: 'Qui', height: '90%' },
  { day: 'Sex', height: '75%' },
  { day: 'Sáb', height: '65%' },
  { day: 'Dom', height: '40%' }
]

// Notificações mockadas com usuários reais
const generateMockNotifications = (usuarios) => {
  if (!usuarios || usuarios.length === 0) return []
  
  const notifications = [
    {
      id: 1,
      usuarioId: usuarios[0]?.id,
      nome: usuarios[0]?.nome || 'Usuário',
      icone: usuarios[0]?.icone || 'person',
      text: `${usuarios[0]?.nome || 'Usuário'} mencionou você em`,
      channel: '#design-geral',
      time: '5m atrás'
    }
  ]

  if (usuarios.length > 1) {
    notifications.push({
      id: 2,
      usuarioId: usuarios[1]?.id,
      nome: usuarios[1]?.nome || 'Usuário',
      icone: usuarios[1]?.icone || 'person',
      text: 'Novo evento:',
      event: 'Sessão de Brainstorm foi agendado.',
      time: '2h atrás'
    })
  }

  if (usuarios.length > 2) {
    notifications.push({
      id: 3,
      usuarioId: usuarios[2]?.id,
      nome: usuarios[2]?.nome || 'Usuário',
      icone: usuarios[2]?.icone || 'person',
      text: `${usuarios[2]?.nome || 'Usuário'} enviou uma nova mensagem em`,
      channel: '#inspiração',
      time: 'Ontem'
    })
  }

  return notifications
}

export const useHome = (onFriendChatClick) => {
  const [friends, setFriends] = useState([])
  const [calls, setCalls] = useState([])
  const [notifications, setNotifications] = useState([])
  const [activeMembers, setActiveMembers] = useState(0)
  const [loadingFriends, setLoadingFriends] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoadingFriends(true)
    try {
      const usuarios = await buscarTodosUsuarios()
      
      // Pegar usuário logado do localStorage
      const usuarioLogadoStr = localStorage.getItem('usuarioLogado')
      const usuarioLogado = usuarioLogadoStr ? JSON.parse(usuarioLogadoStr) : null
      
      // Atualizar membros ativos
      setActiveMembers(usuarios.length)
      
      // Filtrar o usuário logado e formatar os dados dos amigos
      const amigosFormatados = usuarios
        .filter(usuario => usuarioLogado && usuario.id !== usuarioLogado.id)
        .map(usuario => ({
          id: usuario.id,
          name: usuario.nome,
          icone: usuario.icone || 'person',
          status: 'online' // Todos online por padrão
        }))
      
      setFriends(amigosFormatados)
      
      // Gerar ligações com usuários que estão online (primeiros 2-3)
      const usuariosEmLigacao = amigosFormatados
        .filter(friend => friend.status === 'online')
        .slice(0, 3)
        .map((friend, index) => ({
          id: friend.id,
          name: friend.name,
          icone: friend.icone,
          callName: ['Design Sync', 'Gaming Zone', 'Code Review'][index] || 'Chamada'
        }))
      
      setCalls(usuariosEmLigacao)
      
      // Gerar notificações mockadas com usuários reais
      const notificacoesMockadas = generateMockNotifications(usuarios.filter(u => usuarioLogado && u.id !== usuarioLogado.id))
      setNotifications(notificacoesMockadas)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoadingFriends(false)
    }
  }

  const handleFriendChat = (friend) => {
    if (onFriendChatClick) {
      onFriendChatClick(friend)
    }
  }

  const handleCallClick = (call) => {
    console.log('Entrar na chamada:', call)
    // Aqui você pode adicionar lógica para entrar na chamada
  }

  return {
    friends,
    calls,
    notifications,
    activeMembers,
    loadingFriends,
    handleFriendChat,
    handleCallClick
  }
}

