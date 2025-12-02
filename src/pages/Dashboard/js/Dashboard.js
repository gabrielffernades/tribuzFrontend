// ========== JS (LÓGICA) ==========
import { useState, useEffect } from 'react'
import { buscarTodasTribos } from '../../../services/api'

// Dados mockados para comentários (até implementar endpoint)
export const mockComments = [
  {
    id: 1,
    name: 'Design Enthusiasts',
    members: 1204,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY1_dDXMAtJZb7Zo-Y3B20AL3Jr107M6Dww9xKCABkKt_CxMm3wbCe07_-6PvTWp9D8Ts2Y-NVWpUbN-vv_iwW2FTnb4zbANJ2SYEX9ZGeOT8KWFjL3tifpgjq_a5lDNEoNBGcLOF8eIAzmx-e4zk72LxvTbYFMMOOGxieK87-Wy4VER7yAUJ8pvADjXhIVjg5zKO45Rfw0-xl_Aiy0jw6jJ05KYDvNKFh-TbqgFCvUPvjM8hd96D6XoPJ58ap-W7lMBF1ufUmAew'
  },
  {
    id: 2,
    name: 'Gaming Zone',
    members: 5832,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7FCCSAqD6hTdH4RuFmWV2HaT5m2aFWFLpaNcaon8aOYzbmkjswNZNNKExJbaY7JA0E81NtjFOjmDiG7HJfIywrQzCcMTW2Kv00kP37FBQzWOi6-fqQ_IXX1qYX8Nlj9zMkMpb3KmHfh_u1rw3PNMHj2uDP9JspzrKqVLv8gUKKrmMCSFO1fgCXmnHA9OrjghszIh2gkupC1neo0oJjCPOMkjEbqN0qhXdzpdUCWe0GG1aOa-E8aIvJzke0286bbEk7dIf_3CqoFg'
  },
  {
    id: 3,
    name: 'Dev Connect',
    members: 3410,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXPJzRlXjKMtKkM5UCgWsbHfIPnlhPq4GdjyCPsdVNr8_JH7zfrZQ1zK9ybQ303h6HX0calWMhTotjHkPHlFKVjrAJl95CkjDxm4IlmPz9kZWcpmxSaZgXLpSQBq4Z8rjekBKra2q2JYfEVceda7INt2aLjhdVJGB-EpYGzb7A1bFOIHNUO7WW-jie02J6A3ymuU6o0jeWALeAoHHv609n_Qh39myiKdDsZ6c8s5M-HNm28G0WEpcddXdBVKwSXOWk7_qgEj-En0k'
  },
  {
    id: 4,
    name: 'Book Worms',
    members: 876,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALmdK9vIlYyKdOoo8OenO__NVZCpxqtLEZtGVu4LqIkevCKzDVKE5N8CtSEEBnKuhU7oCg-_yChtpK2qDyzVKuyeNlEWPXz3XJAuaG3Jio8A1SrUzOeaPESlDliHdR3y294eontfgBP3ajlswkd8eK1rKp-aO0GkQ6iYYG_QrvFPlZ-E0AcHjmnT6wNF_BRTs1yU6KNGDr9A9X6WxGu6IHqT69Om8b_BFYyu4N9lXJ6JRkEJ4ZplNcALKv3WZlmiTdCs6_FPw6DOs'
  },
  {
    id: 5,
    name: 'Outdoor Adventurers',
    members: 2155,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZi-InNRi81Akq8RtylwVjGwgvAQpfAYXGD5rICZovNYgVijnu0kYMHsgClae0gQKSwfmM3qRL8nSIdf4fucsGfDa671csjIBIA2ti-fKPVRJ9jwIpbQn_I3KxLmNUV71mlCchMOcWRNmpjBdlVZqD4RR1-TL4hNI8A06gd3Tc_7bi45j1newlThCFKsg3bmXSbikOdL_bamtsgSVLZX6fra50Q7hnvDFYjVGIJuP7WWYr8DvGVxWBTKsIEkS1IgxRRp86j4dujK8'
  }
]

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
  const [selectedTribo, setSelectedTribo] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [newComment, setNewComment] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [tribos, setTribos] = useState([])
  const [loadingTribos, setLoadingTribos] = useState(false)
  const [chatUser, setChatUser] = useState(mockChatUser)

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

  const handleOpenChat = (friend = null) => {
    if (friend) {
      // Usar dados reais do amigo quando disponível
      setChatUser({
        id: friend.id,
        name: friend.name,
        avatar: friend.avatar || 'https://via.placeholder.com/150',
        status: friend.status || 'online'
      })
    }
    setShowChatModal(true)
    // Não muda o activeTab, mantém a Home visível
  }

  const handleOpenTribos = () => {
    setShowTribosModal(true)
    setShowFeedModal(false)
    setShowChatModal(false)
    setSelectedTribo(null)
    // Não muda o activeTab, mantém a Home visível
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    }
  }

  const handleTriboClick = (tribo) => {
    setSelectedTribo(tribo)
    setShowTribosModal(false)
    setShowFeedModal(true)
    setShowChatModal(false)
  }

  const handleCloseTribosModal = () => {
    setShowTribosModal(false)
  }

  const handleCloseFeedModal = () => {
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
    if (showTribosModal && tribos.length === 0) {
      loadTribos()
    }
  }, [showTribosModal])

  const loadTribos = async () => {
    setLoadingTribos(true)
    try {
      const tribosData = await buscarTodasTribos()
      // Mapear dados do backend para o formato esperado pelo frontend
      const tribosFormatadas = tribosData.map(tribo => ({
        id: tribo.id,
        name: tribo.nome,
        members: tribo.usuarios ? tribo.usuarios.length : 0,
        description: tribo.descricao || '',
        image: 'https://via.placeholder.com/150' // Placeholder até ter imagem no backend
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
    selectedTribo,
    searchQuery,
    newComment,
    newMessage,
    filteredTribos,
    loadingTribos,
    chatUser,
    handleTabClick,
    handleLogout,
    handleOpenChat,
    handleOpenTribos,
    handleTriboClick,
    handleCloseTribosModal,
    handleCloseFeedModal,
    handleCloseChatModal,
    handleSearchChange,
    handleCommentChange,
    handleCommentSubmit,
    handleMessageChange,
    handleMessageSubmit
  }
}

