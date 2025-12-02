// ========== HTML (JSX) ==========
import {
  Container,
  Sidebar,
  SidebarButton,
  Icon,
  Divider,
  MainContent,
  Header,
  HeaderTitle,
  ContentArea,
  WelcomeTitle,
  WelcomeSubtitle,
  Overlay,
  ModalContainer,
  TribosModal,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  SearchContainer,
  SearchInput,
  SearchIcon,
  CloseButton,
  CloseIcon,
  TribosList,
  TriboItem,
  TriboAvatar,
  TriboInfo,
  TriboName,
  TriboMembers,
  ArrowIcon,
  FeedModal,
  FeedHeader,
  FeedHeaderIcon,
  FeedTitle,
  FeedContent,
  FeedMessages,
  CommentCard,
  UserAvatar,
  CommentContent,
  CommentHeader,
  CommentAuthor,
  CommentTime,
  CommentText,
  FeedForm,
  FormContainer,
  FormTextarea,
  FormButton,
  ChatModal,
  ChatHeader,
  ChatUserAvatar,
  ChatUserInfo,
  ChatUserName,
  ChatUserStatus,
  ChatContent,
  ChatMessages,
  MessageBubble,
  MessageContent,
  MessageText,
  MessageTime,
  ChatForm,
  ChatInput,
  ChatSendButton
} from '../css/Dashboard.styles'
import { useDashboard, mockComments, mockChatMessages } from '../js/Dashboard'
import Home from '../Home'

function Dashboard({ onNavigateToLogin }) {
  const {
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
  } = useDashboard(() => {
    if (onNavigateToLogin) {
      onNavigateToLogin()
    }
  })

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <SidebarButton
          $active={activeTab === 'home'}
          onClick={() => handleTabClick('home')}
        >
          <Icon>home</Icon>
        </SidebarButton>
        <Divider />
        <SidebarButton
          $active={activeTab === 'tribos'}
          onClick={() => {
            if (activeTab === 'home') {
              handleOpenTribos()
            } else {
              handleTabClick('tribos')
            }
          }}
        >
          <Icon $fill $active={activeTab === 'tribos'}>groups</Icon>
        </SidebarButton>
        <SidebarButton
          $active={activeTab === 'friends'}
          onClick={() => {
            if (activeTab === 'home') {
              handleOpenChat()
            } else {
              handleTabClick('friends')
            }
          }}
        >
          <Icon>person</Icon>
        </SidebarButton>
        <SidebarButton
          $active={activeTab === 'logout'}
          onClick={handleLogout}
          style={{ marginTop: 'auto' }}
        >
          <Icon>logout</Icon>
        </SidebarButton>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <Header>
          <HeaderTitle>Início</HeaderTitle>
        </Header>
        {activeTab === 'home' ? (
          <Home onFriendChatClick={(friend) => handleOpenChat(friend)} />
        ) : (
          <ContentArea>
            <WelcomeTitle>Bem-vindo de volta!</WelcomeTitle>
            <WelcomeSubtitle>Este é o seu painel principal. Explore as tribos, converse com amigos e muito mais.</WelcomeSubtitle>
          </ContentArea>
        )}
      </MainContent>

      {/* Overlay */}
      {(showTribosModal || showFeedModal || showChatModal) && <Overlay />}

      {/* Tribos Modal */}
      {showTribosModal && (
        <ModalContainer $zIndex={20}>
          <TribosModal>
            <ModalHeader>
              <ModalTitle>Explorar Tribos</ModalTitle>
              <ModalSubtitle>Encontre comunidades que você vai adorar.</ModalSubtitle>
              <SearchContainer>
                <SearchIcon>search</SearchIcon>
                <SearchInput
                  type="text"
                  placeholder="Buscar uma Tribo..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </SearchContainer>
              <CloseButton onClick={handleCloseTribosModal}>
                <CloseIcon>close</CloseIcon>
              </CloseButton>
            </ModalHeader>
            <TribosList>
              {loadingTribos ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#9CA3AF' }}>
                  Carregando tribos...
                </div>
              ) : filteredTribos.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#9CA3AF' }}>
                  Nenhuma tribo encontrada
                </div>
              ) : (
                filteredTribos.map((tribo) => (
                <TriboItem key={tribo.id} onClick={() => handleTriboClick(tribo)}>
                  <TriboAvatar $image={tribo.image} />
                  <TriboInfo>
                    <TriboName>{tribo.name}</TriboName>
                    <TriboMembers>{tribo.members.toLocaleString()} membros</TriboMembers>
                  </TriboInfo>
                  <ArrowIcon>arrow_forward_ios</ArrowIcon>
                </TriboItem>
                ))
              )}
            </TribosList>
          </TribosModal>
        </ModalContainer>
      )}

      {/* Feed Modal */}
      {showFeedModal && selectedTribo && (
        <ModalContainer $zIndex={30} $padding="1rem">
          <FeedModal>
            <FeedHeader>
              <FeedHeaderIcon>tag</FeedHeaderIcon>
              <FeedTitle>{selectedTribo.name}</FeedTitle>
              <CloseButton
                onClick={handleCloseFeedModal}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
              >
                <CloseIcon>close</CloseIcon>
              </CloseButton>
            </FeedHeader>
            <FeedContent>
              <FeedMessages>
                {mockComments.map((comment) => (
                  <CommentCard key={comment.id}>
                    <UserAvatar $image={comment.avatar} />
                    <CommentContent>
                      <CommentHeader>
                        <CommentAuthor>{comment.author}</CommentAuthor>
                        <CommentTime>{comment.time}</CommentTime>
                      </CommentHeader>
                      <CommentText>{comment.text}</CommentText>
                    </CommentContent>
                  </CommentCard>
                ))}
              </FeedMessages>
              <FeedForm>
                <FormContainer onSubmit={handleCommentSubmit}>
                  <FormTextarea
                    rows="1"
                    placeholder={`Compartilhe seus pensamentos em #${selectedTribo.name}`}
                    value={newComment}
                    onChange={handleCommentChange}
                  />
                  <FormButton type="submit">Publicar</FormButton>
                </FormContainer>
              </FeedForm>
            </FeedContent>
          </FeedModal>
        </ModalContainer>
      )}

      {/* Chat Modal */}
      {showChatModal && (
        <ModalContainer $zIndex={30} $padding="1rem">
          <ChatModal>
            <ChatHeader>
              <ChatUserAvatar $image={chatUser.avatar} $status={chatUser.status} />
              <ChatUserInfo>
                <ChatUserName>{chatUser.name}</ChatUserName>
                <ChatUserStatus>{chatUser.status === 'online' ? 'Online' : 'Offline'}</ChatUserStatus>
              </ChatUserInfo>
              <CloseButton
                onClick={handleCloseChatModal}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
              >
                <CloseIcon>close</CloseIcon>
              </CloseButton>
            </ChatHeader>
            <ChatContent>
              <ChatMessages>
                {mockChatMessages.map((message) => (
                  <MessageBubble key={message.id} $sender={message.sender}>
                    <MessageContent $sender={message.sender}>
                      <MessageText $sender={message.sender}>{message.text}</MessageText>
                      <MessageTime>{message.time}</MessageTime>
                    </MessageContent>
                  </MessageBubble>
                ))}
              </ChatMessages>
              <ChatForm>
                <form onSubmit={handleMessageSubmit} style={{ position: 'relative', width: '100%' }}>
                  <ChatInput
                    type="text"
                    placeholder="Digite uma mensagem..."
                    value={newMessage}
                    onChange={handleMessageChange}
                  />
                  <ChatSendButton type="submit">Enviar</ChatSendButton>
                </form>
              </ChatForm>
            </ChatContent>
          </ChatModal>
        </ModalContainer>
      )}
    </Container>
  )
}

export default Dashboard

