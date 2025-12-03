// ========== JS (LÓGICA) ==========
import { useState, useEffect } from 'react'
import { buscarTodasTribos, criarTribo } from '../../../services/api'

// Dados mockados para comentários (até implementar endpoint)
export const mockComments = [
  {
    id: 1,
    author: 'Jane Doe',
    time: 'Hoje às 16:32',
    text: 'Acabei de ver a nova atualização do Figma, os recursos de fontes variáveis são incríveis! Alguém já testou?',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWvewK-aPim7G7WcRXYBNEcC5wwteyE-dNFbuU_oxUUPpZ-bIIVRd4lP7Tj1DqmFH-Gxh_3HL6gj3tlahv99ZMwR2F32P0x-OKmKZdB7AJjkZmNDtxrUKuz7jMlKVYNdXHQkvLRC09xlpnBBjCq-SZXbgEp7s6v7HxVp1y-zcg54WC_vJeM0IjfF4QyN3_mzPrpR1rgW5axEOhz1LWAfThviiDM9JYdWlVT62H3rMrFAvOSkTpKN4lYb5_PCsJKUEk4V9eHLddGg'
  },
  {
    id: 2,
    author: 'John Smith',
    time: 'Hoje às 16:35',
    text: 'Sim! Estive testando para um projeto de cliente. É uma mudança de jogo para tipografia responsiva. Tem uma curva de aprendizado, mas vale a pena.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7jlncpNA3q9yI1Z8TnTD7KiodkNndK-YlnRhEsp_LzIqoW7qFYOvTJv0NM37PnHGgZUHuu366H5yPUXGu8i3pOqTwiijl-Fet-9b7w5hPZVzjd_xAiijhBALXe9KhUJBlzwP-Ewh8rfEbR-XBJnnslk0Z--HCgvuafWw8wecL3hB_LEmSEY-oDA2WS1X1hxc4tqoITDbDO0Znw4mC46EUU1OgmZKH5CZhPOCbnVFrtpkpAWiAVqIPpwSZro1SCN9Q9FWaFHRMpBc'
  },
  {
    id: 3,
    author: 'Sarah Lee',
    time: 'Hoje às 16:51',
    text: 'Concordo! As ferramentas de prototipagem também receberam um bom impulso. Facilitou muito minha vida esta semana.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmk7ufWm53JQ2FxkC3kQcOYWuJhMIiaOP4q8vh36rWteUMEJvm8tblfIGgKpR7EE6gcuGhw_JMcZAn7YccpDucTEXhNS3VTiVScX8uQAcxOQgSANwqZBgZywaV5t8SBoJUvJ0ha2SlRrpFIcV46XiqnM24ckYYthgWh6-oZdlwaKkNLSFmp_4dYMz0gd2i1mJ_iqd2hgPSH0q5e5b9nnGBUvWtAb3J5I4K314ikYOonb_BCmNP-grSQDgXYDICVfpK9eGhX3dPe2E'
  }
]

// Dados mockados para chat
export const mockChatMessages = [
  {
    id: 1,
    sender: 'other',
    text: 'Oi! Como você está?',
    time: '14:30'
  },
  {
    id: 2,
    sender: 'me',
    text: 'Oi! Estou bem, obrigado! E você?',
    time: '14:32'
  },
  {
    id: 3,
    sender: 'other',
    text: 'Também estou bem! Estava pensando em conversar sobre o projeto que estamos desenvolvendo.',
    time: '14:33'
  },
  {
    id: 4,
    sender: 'me',
    text: 'Ótimo! Tenho algumas ideias que gostaria de compartilhar com você.',
    time: '14:35'
  },
  {
    id: 5,
    sender: 'other',
    text: 'Perfeito! Quando você estiver disponível, podemos marcar uma reunião.',
    time: '14:36'
  }
]

// Dados mockados para chat de tribo
export const mockTriboChatMessages = [
  {
    id: 1,
    sender: 'other',
    text: 'Bem-vindos à tribo! Fiquem à vontade para compartilhar ideias.',
    time: '10:15'
  },
  {
    id: 2,
    sender: 'other',
    text: 'Alguém tem alguma dúvida sobre o tema da tribo?',
    time: '10:20'
  },
  {
    id: 3,
    sender: 'me',
    text: 'Oi pessoal! Acabei de entrar na tribo, muito legal!',
    time: '10:25'
  },
  {
    id: 4,
    sender: 'other',
    text: 'Que bom ter você aqui! Esperamos suas contribuições.',
    time: '10:26'
  },
  {
    id: 5,
    sender: 'other',
    text: 'Vamos organizar um evento da tribo?',
    time: '10:30'
  }
]

// Dados mockados para usuário do chat (será substituído pelos dados reais quando clicar em um amigo)
export const mockChatUser = {
  id: 1,
  name: 'Maria Silva',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWvewK-aPim7G7WcRXYBNEcC5wwteyE-dNFbuU_oxUUPpZ-bIIVRd4lP7Tj1DqmFH-Gxh_3HL6gj3tlahv99ZMwR2F32P0x-OKmKZdB7AJjkZmNDtxrUKuz7jMlKVYNdXHQkvLRC09xlpnBBjCq-SZXbgEp7s6v7HxVp1y-zcg54WC_vJeM0IjfF4QyN3_mzPrpR1rgW5axEOhz1LWAfThviiDM9JYdWlVT62H3rMrFAvOSkTpKN4lYb5_PCsJKUEk4V9eHLddGg',
  status: 'online'
}

export const useDashboard = (onLogout) => {
  const [activeTab, setActiveTab] = useState('home')
  const [showTribosModal, setShowTribosModal] = useState(false)
  const [showFeedModal, setShowFeedModal] = useState(false)
  const [showChatModal, setShowChatModal] = useState(false)
  const [showCreateTriboModal, setShowCreateTriboModal] = useState(false)
  const [selectedTribo, setSelectedTribo] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [newComment, setNewComment] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [tribos, setTribos] = useState([])
  const [loadingTribos, setLoadingTribos] = useState(false)
  const [chatUser, setChatUser] = useState(mockChatUser)
  const [chatMessages, setChatMessages] = useState(mockChatMessages)
  const [newTriboNome, setNewTriboNome] = useState('')
  const [newTriboDescricao, setNewTriboDescricao] = useState('')
  const [creatingTribo, setCreatingTribo] = useState(false)
  const [createTriboError, setCreateTriboError] = useState('')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === 'tribos') {
      setShowTribosModal(true)
      setShowFeedModal(false)
      setShowChatModal(false)
      setSelectedTribo(null)
    } else if (tab === 'friends') {
      setShowChatModal(true)
      setShowTribosModal(false)
      setShowFeedModal(false)
    } else if (tab === 'home') {
      setShowTribosModal(false)
      setShowFeedModal(false)
      setShowChatModal(false)
      setSelectedTribo(null)
    } else {
      setShowTribosModal(false)
      setShowFeedModal(false)
      setShowChatModal(false)
      setSelectedTribo(null)
    }
  }


  const handleOpenTribos = () => {
    setShowTribosModal(true)
    setShowFeedModal(false)
    setShowChatModal(false)
    setShowCreateTriboModal(false)
    setSelectedTribo(null)
    // Não muda o activeTab, mantém a Home visível
  }

  const handleOpenCreateTribo = () => {
    setShowCreateTriboModal(true)
    setShowTribosModal(false)
    setShowFeedModal(false)
    setShowChatModal(false)
    setNewTriboNome('')
    setNewTriboDescricao('')
    setCreateTriboError('')
  }

  const handleCloseCreateTriboModal = () => {
    setShowCreateTriboModal(false)
    setNewTriboNome('')
    setNewTriboDescricao('')
    setCreateTriboError('')
  }

  const handleCreateTribo = async (e) => {
    e.preventDefault()
    if (!newTriboNome.trim()) {
      setCreateTriboError('O nome da tribo é obrigatório')
      return
    }

    setCreatingTribo(true)
    setCreateTriboError('')

    try {
      const triboData = {
        nome: newTriboNome.trim(),
        descricao: newTriboDescricao.trim() || null
      }

      await criarTribo(triboData)
      
      // Recarregar lista de tribos
      await loadTribos()
      
      // Fechar modal e abrir modal de tribos
      handleCloseCreateTriboModal()
      handleOpenTribos()
    } catch (error) {
      console.error('Erro ao criar tribo:', error)
      setCreateTriboError(error.message || error.error || 'Erro ao criar tribo. Tente novamente.')
    } finally {
      setCreatingTribo(false)
    }
  }

  const handleLogout = () => {
    // Limpar dados do usuário do localStorage
    localStorage.removeItem('usuarioLogado')
    // Redirecionar para login
    if (onLogout) {
      onLogout()
    }
  }

  const handleTriboClick = (tribo) => {
    setSelectedTribo(tribo)
    setShowTribosModal(false)
    setShowFeedModal(true) // Abrir modal de detalhes da tribo
    setShowChatModal(false)
    setShowCreateTriboModal(false)
  }

  const handleOpenTriboChat = (tribo) => {
    // Criar dados mockados para o chat da tribo
    const triboChatUser = {
      id: tribo.id,
      name: tribo.name,
      avatar: 'https://via.placeholder.com/150',
      status: 'online',
      isTribo: true
    }
    setChatUser(triboChatUser)
    // Usar mensagens mockadas específicas para tribo
    setChatMessages(mockTriboChatMessages)
    setShowChatModal(true)
    setShowFeedModal(false)
    setShowTribosModal(false)
  }

  const handleOpenChat = (friend = null) => {
    if (friend) {
      // Usar dados reais do amigo quando disponível
      setChatUser({
        id: friend.id,
        name: friend.name,
        avatar: friend.avatar || 'https://via.placeholder.com/150',
        status: friend.status || 'online'
      })
      // Usar mensagens mockadas normais para chat de amigo
      setChatMessages(mockChatMessages)
    }
    setShowChatModal(true)
    // Não muda o activeTab, mantém a Home visível
  }

  const handleCloseTribosModal = () => {
    setShowTribosModal(false)
  }

  const handleCloseFeedModal = () => {
    setShowFeedModal(false)
    setShowTribosModal(true)
    setSelectedTribo(null)
  }

  const handleCloseTriboDetailsModal = () => {
    setShowFeedModal(false)
    setShowTribosModal(true)
    setSelectedTribo(null)
  }

  const handleCloseChatModal = () => {
    setShowChatModal(false)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      console.log('Novo comentário:', newComment)
      setNewComment('')
    }
  }

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      console.log('Nova mensagem:', newMessage)
      setNewMessage('')
    }
  }

  // Buscar tribos do backend quando o componente montar ou quando abrir o modal
  useEffect(() => {
    if (showTribosModal) {
      loadTribos()
    }
  }, [showTribosModal])

  // Ícones mockados para as tribos
  const triboIcons = [
    'groups',
    'public',
    'sports_esports',
    'code',
    'palette',
    'music_note',
    'fitness_center',
    'book',
    'camera_alt',
    'restaurant',
    'flight',
    'school',
    'business',
    'science',
    'psychology'
  ]

  const loadTribos = async () => {
    setLoadingTribos(true)
    try {
      const tribosData = await buscarTodasTribos()
      // Mapear dados do backend para o formato esperado pelo frontend
      const tribosFormatadas = tribosData.map((tribo, index) => ({
        id: tribo.id,
        name: tribo.nome,
        members: tribo.usuarios ? tribo.usuarios.length : 0,
        description: tribo.descricao || '',
        icon: triboIcons[index % triboIcons.length] // Ícone mockado baseado no índice
      }))
      setTribos(tribosFormatadas)
    } catch (error) {
      console.error('Erro ao carregar tribos:', error)
    } finally {
      setLoadingTribos(false)
    }
  }

  const filteredTribos = tribos.filter(tribo =>
    tribo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return {
    activeTab,
    showTribosModal,
    showFeedModal,
    showChatModal,
    showCreateTriboModal,
    selectedTribo,
    searchQuery,
    newComment,
    newMessage,
    filteredTribos,
    loadingTribos,
    chatUser,
    chatMessages,
    newTriboNome,
    newTriboDescricao,
    creatingTribo,
    createTriboError,
    handleTabClick,
    handleLogout,
    handleOpenChat,
    handleOpenTribos,
    handleOpenCreateTribo,
    handleTriboClick,
    handleCloseTribosModal,
    handleCloseFeedModal,
    handleCloseChatModal,
    handleCloseTriboDetailsModal,
    handleOpenTriboChat,
    handleCloseCreateTriboModal,
    handleSearchChange,
    handleCommentChange,
    handleCommentSubmit,
    handleMessageChange,
    handleMessageSubmit,
    handleCreateTribo,
    setNewTriboNome,
    setNewTriboDescricao
  }
}

