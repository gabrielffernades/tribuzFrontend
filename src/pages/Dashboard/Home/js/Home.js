// ========== JS (LÓGICA) ==========
import { useState } from 'react'

// Dados mockados para estatísticas
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

// Dados mockados para amigos online
export const mockFriends = [
  {
    id: 1,
    name: 'Jane Doe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWvewK-aPim7G7WcRXYBNEcC5wwteyE-dNFbuU_oxUUPpZ-bIIVRd4lP7Tj1DqmFH-Gxh_3HL6gj3tlahv99ZMwR2F32P0x-OKmKZdB7AJjkZmNDtxrUKuz7jMlKVYNdXHQkvLRC09xlpnBBjCq-SZXbgEp7s6v7HxVp1y-zcg54WC_vJeM0IjfF4QyN3_mzPrpR1rgW5axEOhz1LWAfThviiDM9JYdWlVT62H3rMrFAvOSkTpKN4lYb5_PCsJKUEk4V9eHLddGg',
    status: 'online'
  },
  {
    id: 2,
    name: 'David Kim',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeqI_btI3ghQq1CFehcxJyBU3m8OvzjUQwQfeiPKmlOoFfvfGdmlbH1gev80rs0WJb9hc4BNHKr9P7xZakj-dCklq6My3f7sU0BVrJ5LwLGajNtcUueQbHaYYLcsLjNgXVahAp4wxQl3fvppuK5qogMFb5dNCTXdHrESqrgcdh28o_vPi1MiVG7o4NdpOtAhOJTmoR4onMQePdxbxvL4QcVlaP5rH6-W0ZUxndjsMM_TSP0dNlPvRHrOmueEX1YawhV_Ye5jPiLPA',
    status: 'online'
  },
  {
    id: 3,
    name: 'Emily Carter',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp_OpYrm2gMlYDIOPR6_CJg99erEC5a1vysCIPXwjaV32I_0b6bcfUJyTWsqwy0OjJODWR9taFN_wQL51AK5SGIPPrIc9XUgjqPZqspORobhTfvspCTuCaXGKL79LC2To7hau4DyuUNkFt2Yzmyopc8Yw4PQ9TW7OWbIJudVmmtqhoTGln3L7isv7oHVD6dusCVoyayr8z9L86mmd_VgDVlMpMN3zXZRXHyfUeDRvm6fqkNlFTZYACfN24yv5xEzk5CSnNs-sdyio',
    status: 'online'
  }
]

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
    handleFriendChat,
    handleCallClick
  }
}

