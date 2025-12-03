// ========== HTML (JSX) ==========
import {
  HomeContainer,
  MainColumn,
  SideColumn,
  StatsGrid,
  StatCard,
  StatCardContent,
  StatIcon,
  StatIconSymbol,
  StatInfo,
  StatLabel,
  StatValue,
  ActivityCard,
  CardTitle,
  ActivityChart,
  ChartBar,
  ChartBarFill,
  ChartBarLabel,
  NotificationsList,
  NotificationItem,
  NotificationAvatar,
  NotificationIconContainer,
  NotificationIcon,
  NotificationText,
  NotificationBold,
  NotificationPrimary,
  NotificationTime,
  FriendsList,
  FriendItem,
  FriendAvatarContainer,
  FriendAvatar,
  FriendIconContainer,
  FriendIcon,
  FriendStatus,
  FriendName,
  FriendChatButton,
  FriendChatIcon,
  CallsList,
  CallItem,
  CallAvatar,
  CallIconContainer,
  CallUserIcon,
  CallInfo,
  CallName,
  CallStatus,
  CallButton,
  CallButtonIcon
} from '../css/Home.styles'
import {
  useHome,
  mockActivityData
} from '../js/Home'

function Home({ onFriendChatClick }) {
  const { friends, calls, notifications, activeMembers, loadingFriends, handleFriendChat, handleCallClick } = useHome(onFriendChatClick)

  return (
    <HomeContainer>
      <MainColumn>
        {/* Cards de Estatísticas */}
        <StatsGrid>
          <StatCard>
            <StatCardContent>
              <StatIcon $bgColor="rgba(59, 130, 246, 0.2)">
                <StatIconSymbol $color="#60A5FA">group</StatIconSymbol>
              </StatIcon>
              <StatInfo>
                <StatLabel>Membros Ativos</StatLabel>
                <StatValue>{activeMembers.toLocaleString()}</StatValue>
              </StatInfo>
            </StatCardContent>
          </StatCard>

          <StatCard>
            <StatCardContent>
              <StatIcon $bgColor="rgba(34, 197, 94, 0.2)">
                <StatIconSymbol $color="#4ADE80">trending_up</StatIconSymbol>
              </StatIcon>
              <StatInfo>
                <StatLabel>Engajamento</StatLabel>
                <StatValue>+12%</StatValue>
              </StatInfo>
            </StatCardContent>
          </StatCard>

          <StatCard>
            <StatCardContent>
              <StatIcon $bgColor="rgba(168, 85, 247, 0.2)">
                <StatIconSymbol $color="#A78BFA">notifications</StatIconSymbol>
              </StatIcon>
              <StatInfo>
                <StatLabel>Novas Menções</StatLabel>
                <StatValue>{notifications.length}</StatValue>
              </StatInfo>
            </StatCardContent>
          </StatCard>
        </StatsGrid>

        {/* Gráfico de Atividade */}
        <ActivityCard>
          <CardTitle>Atividade da Tribo (Últimos 7 dias)</CardTitle>
          <ActivityChart>
            {mockActivityData.map((data, index) => (
              <ChartBar key={index}>
                <ChartBarFill $height={data.height} />
                <ChartBarLabel>{data.day}</ChartBarLabel>
              </ChartBar>
            ))}
          </ActivityChart>
        </ActivityCard>

        {/* Notificações */}
        <ActivityCard>
          <CardTitle>Últimas Notificações da Tribo</CardTitle>
          <NotificationsList>
            {notifications.length === 0 ? (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#9CA3AF' }}>
                Nenhuma notificação
              </div>
            ) : (
              notifications.map((notification) => (
                <NotificationItem key={notification.id}>
                  <NotificationIconContainer>
                    <NotificationIcon>{notification.icone}</NotificationIcon>
                  </NotificationIconContainer>
                  <NotificationText>
                    {notification.channel ? (
                      <>
                        <NotificationBold>{notification.text.split(' ')[0]} {notification.text.split(' ')[1]}</NotificationBold>{' '}
                        {notification.text.split(' ').slice(2).join(' ')}{' '}
                        <NotificationPrimary>{notification.channel}</NotificationPrimary>
                      </>
                    ) : (
                      <>
                        {notification.text}{' '}
                        <NotificationBold>{notification.event}</NotificationBold>
                      </>
                    )}
                  </NotificationText>
                  <NotificationTime>{notification.time}</NotificationTime>
                </NotificationItem>
              ))
            )}
          </NotificationsList>
        </ActivityCard>
      </MainColumn>

      <SideColumn>
        {/* Amigos Online */}
        <ActivityCard>
          <CardTitle>Amigos Online ({loadingFriends ? '...' : friends.length})</CardTitle>
          <FriendsList>
            {loadingFriends ? (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#9CA3AF' }}>
                Carregando...
              </div>
            ) : friends.length === 0 ? (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#9CA3AF' }}>
                Nenhum amigo online
              </div>
            ) : (
              friends.map((friend) => (
                <FriendItem key={friend.id}>
                  <FriendAvatarContainer>
                    <FriendIconContainer>
                      <FriendIcon>{friend.icone}</FriendIcon>
                    </FriendIconContainer>
                    <FriendStatus />
                  </FriendAvatarContainer>
                  <FriendName>{friend.name}</FriendName>
                  <FriendChatButton onClick={() => handleFriendChat(friend)}>
                    <FriendChatIcon>chat_bubble</FriendChatIcon>
                  </FriendChatButton>
                </FriendItem>
              ))
            )}
          </FriendsList>
        </ActivityCard>

        {/* Quem está em Ligações */}
        <ActivityCard>
          <CardTitle>Quem está em Ligações</CardTitle>
          <CallsList>
            {calls.length === 0 ? (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#9CA3AF' }}>
                Ninguém em ligação
              </div>
            ) : (
              calls.map((call) => (
                <CallItem key={call.id}>
                  <CallIconContainer>
                    <CallUserIcon>{call.icone}</CallUserIcon>
                  </CallIconContainer>
                  <CallInfo>
                    <CallName>{call.name}</CallName>
                    <CallStatus>Em chamada - {call.callName}</CallStatus>
                  </CallInfo>
                  <CallButton onClick={() => handleCallClick(call)}>
                    <CallButtonIcon>call</CallButtonIcon>
                  </CallButton>
                </CallItem>
              ))
            )}
          </CallsList>
        </ActivityCard>
      </SideColumn>
    </HomeContainer>
  )
}

export default Home

