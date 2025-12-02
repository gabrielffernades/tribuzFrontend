// ========== JS (LÓGICA) ==========
import { useState, useEffect } from 'react'
import { buscarTodosUsuarios } from '../../../../services/api'

// Dados mockados para estatísticas (até implementar endpoint)
export const mockStats = {
  activeMembers: 1402,
  engagement: '+12%',
  newMentions: 28
}

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

// Dados mockados para notificações
export const mockNotifications = [
  {
    id: 1,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7jlncpNA3q9yI1Z8TnTD7KiodkNndK-YlnRhEsp_LzIqoW7qFYOvTJv0NM37PnHGgZUHuu366H5yPUXGu8i3pOqTwiijl-Fet-9b7w5hPZVzjd_xAiijhBALXe9KhUJBlzwP-Ewh8rfEbR-XBJnnslk0Z--HCgvuafWw8wecL3hB_LEmSEY-oDA2WS1X1hxc4tqoITDbDO0Znw4mC46EUU1OgmZKH5CZhPOCbnVFrtpkpAWiAVqIPpwSZro1SCN9Q9FWaFHRMpBc',
    text: 'John Smith mencionou você em',
    channel: '#design-geral',
    time: '5m atrás'
  },
  {
    id: 2,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY1_dDXMAtJZb7Zo-Y3B20AL3Jr107M6Dww9xKCABkKt_CxMm3wbCe07_-6PvTWp9D8Ts2Y-NVWpUbN-vv_iwW2FTnb4zbANJ2SYEX9ZGeOT8KWFjL3tifpgjq_a5lDNEoNBGcLOF8eIAzmx-e4zk72LxvTbYFMMOOGxieK87-Wy4VER7yAUJ8pvADjXhIVjg5zKO45Rfw0-xl_Aiy0jw6jJ05KYDvNKFh-TbqgFCvUPvjM8hd96D6XoPJ58ap-W7lMBF1ufUmAew',
    text: 'Novo evento:',
    event: 'Sessão de Brainstorm foi agendado.',
    time: '2h atrás'
  },
  {
    id: 3,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmk7ufWm53JQ2FxkC3kQcOYWuJhMIiaOP4q8vh36rWteUMEJvm8tblfIGgKpR7EE6gcuGhw_JMcZAn7YccpDucTEXhNS3VTiVScX8uQAcxOQgSANwqZBgZywaV5t8SBoJUvJ0ha2SlRrpFIcV46XiqnM24ckYYthgWh6-oZdlwaKkNLSFmp_4dYMz0gd2i1mJ_iqd2hgPSH0q5e5b9nnGBUvWtAb3J5I4K314ikYOonb_BCmNP-grSQDgXYDICVfpK9eGhX3dPe2E',
    text: 'Sarah Lee enviou uma nova mensagem em',
    channel: '#inspiração',
    time: 'Ontem'
  }
]

// Dados mockados para amigos online (será substituído pelos dados do backend)

// Dados mockados para ligações
export const mockCalls = [
  {
    id: 1,
    name: 'John Smith',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7jlncpNA3q9yI1Z8TnTD7KiodkNndK-YlnRhEsp_LzIqoW7qFYOvTJv0NM37PnHGgZUHuu366H5yPUXGu8i3pOqTwiijl-Fet-9b7w5hPZVzjd_xAiijhBALXe9KhUJBlzwP-Ewh8rfEbR-XBJnnslk0Z--HCgvuafWw8wecL3hB_LEmSEY-oDA2WS1X1hxc4tqoITDbDO0Znw4mC46EUU1OgmZKH5CZhPOCbnVFrtpkpAWiAVqIPpwSZro1SCN9Q9FWaFHRMpBc',
    callName: 'Design Sync'
  },
  {
    id: 2,
    name: 'Sarah Lee',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmk7ufWm53JQ2FxkC3kQcOYWuJhMIiaOP4q8vh36rWteUMEJvm8tblfIGgKpR7EE6gcuGhw_JMcZAn7YccpDucTEXhNS3VTiVScX8uQAcxOQgSANwqZBgZywaV5t8SBoJUvJ0ha2SlRrpFIcV46XiqnM24ckYYthgWh6-oZdlwaKkNLSFmp_4dYMz0gd2i1mJ_iqd2hgPSH0q5e5b9nnGBUvWtAb3J5I4K314ikYOonb_BCmNP-grSQDgXYDICVfpK9eGhX3dPe2E',
    callName: 'Gaming Zone'
  }
]

export const useHome = (onFriendChatClick) => {
  const [friends, setFriends] = useState([])
  const [loadingFriends, setLoadingFriends] = useState(false)

  useEffect(() => {
    loadFriends()
  }, [])

  const loadFriends = async () => {
    setLoadingFriends(true)
    try {
      const usuarios = await buscarTodosUsuarios()
      // Pegar usuário logado do localStorage
      const usuarioLogadoStr = localStorage.getItem('usuarioLogado')
      const usuarioLogado = usuarioLogadoStr ? JSON.parse(usuarioLogadoStr) : null
      
      // Filtrar o usuário logado e formatar os dados
      const amigosFormatados = usuarios
        .filter(usuario => usuarioLogado && usuario.id !== usuarioLogado.id)
        .map(usuario => ({
          id: usuario.id,
          name: usuario.nome,
          avatar: 'https://via.placeholder.com/150', // Placeholder até ter avatar no backend
          status: 'online' // Mockado até implementar status no backend
        }))
      
      setFriends(amigosFormatados)
    } catch (error) {
      console.error('Erro ao carregar amigos:', error)
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
    loadingFriends,
    handleFriendChat,
    handleCallClick
  }
}

