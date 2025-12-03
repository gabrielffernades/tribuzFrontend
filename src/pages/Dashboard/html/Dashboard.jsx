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
  TriboIconContainer,
  TriboIcon,
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
  ChatSendButton,
  CreateTriboModal,
  CreateTriboForm,
  FormInput,
  FormTextareaInput,
  FormError,
  FormActions,
  FormCancelButton,
  FormSubmitButton
} from '../css/Dashboard.styles'
import { useDashboard, mockComments } from '../js/Dashboard'
import Home from '../Home'

function Dashboard({ onNavigateToLogin }) {
  const {
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
    handleCloseCreateTriboModal,
    handleCloseTriboDetailsModal,
    handleOpenTriboChat,
    handleSearchChange,
    handleCommentChange,
    handleCommentSubmit,
    handleMessageChange,
    handleMessageSubmit,
    handleCreateTribo,
    setNewTriboNome,
    setNewTriboDescricao
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
          onClick={handleOpenCreateTribo}
          title="Criar nova tribo"
        >
          <Icon>add</Icon>
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
      {(showTribosModal || showFeedModal || showChatModal || showCreateTriboModal) && <Overlay />}

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
                  <TriboIconContainer>
                    <TriboIcon>{tribo.icon}</TriboIcon>
                  </TriboIconContainer>
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

      {/* Tribo Details Modal */}
      {showFeedModal && selectedTribo && (
        <ModalContainer $zIndex={30} $padding="1rem">
          <FeedModal>
            <FeedHeader>
              <TriboIconContainer $large>
                <TriboIcon $large>{selectedTribo.icon}</TriboIcon>
              </TriboIconContainer>
              <div style={{ flex: 1 }}>
                <FeedTitle>{selectedTribo.name}</FeedTitle>
                <TriboMembers style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>
                  {selectedTribo.members.toLocaleString()} {selectedTribo.members === 1 ? 'membro' : 'membros'}
                </TriboMembers>
              </div>
              <CloseButton
                onClick={handleCloseTriboDetailsModal}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
              >
                <CloseIcon>close</CloseIcon>
              </CloseButton>
            </FeedHeader>
            <FeedContent>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {selectedTribo.description && (
                  <div>
                    <h3 style={{ color: '#F2F3F5', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'Spline Sans, sans-serif' }}>
                      Sobre
                    </h3>
                    <p style={{ color: '#949BA4', fontSize: '0.875rem', lineHeight: '1.5', fontFamily: 'Spline Sans, sans-serif' }}>
                      {selectedTribo.description}
                    </p>
                  </div>
                )}
                {!selectedTribo.description && (
                  <div>
                    <p style={{ color: '#949BA4', fontSize: '0.875rem', fontStyle: 'italic', fontFamily: 'Spline Sans, sans-serif' }}>
                      Esta tribo ainda não tem descrição.
                    </p>
                  </div>
                )}
                <FormSubmitButton
                  type="button"
                  onClick={() => handleOpenTriboChat(selectedTribo)}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}
                >
                  <Icon style={{ marginRight: '0.5rem', fontSize: '1.25rem' }}>chat</Icon>
                  Abrir Chat da Tribo
                </FormSubmitButton>
              </div>
            </FeedContent>
          </FeedModal>
        </ModalContainer>
      )}

      {/* Create Tribo Modal */}
      {showCreateTriboModal && (
        <ModalContainer $zIndex={25}>
          <CreateTriboModal>
            <ModalHeader>
              <ModalTitle>Criar Nova Tribo</ModalTitle>
              <ModalSubtitle>Comece uma nova comunidade e conecte pessoas com interesses similares.</ModalSubtitle>
              <CloseButton onClick={handleCloseCreateTriboModal}>
                <CloseIcon>close</CloseIcon>
              </CloseButton>
            </ModalHeader>
            <CreateTriboForm onSubmit={handleCreateTribo}>
              <div>
                <FormInput
                  type="text"
                  placeholder="Nome da Tribo *"
                  value={newTriboNome}
                  onChange={(e) => setNewTriboNome(e.target.value)}
                  required
                />
              </div>
              <div>
                <FormTextareaInput
                  placeholder="Descrição (opcional)"
                  value={newTriboDescricao}
                  onChange={(e) => setNewTriboDescricao(e.target.value)}
                  rows="4"
                />
              </div>
              {createTriboError && (
                <FormError>{createTriboError}</FormError>
              )}
              <FormActions>
                <FormCancelButton
                  type="button"
                  onClick={handleCloseCreateTriboModal}
                  disabled={creatingTribo}
                >
                  Cancelar
                </FormCancelButton>
                <FormSubmitButton
                  type="submit"
                  $disabled={creatingTribo || !newTriboNome.trim()}
                >
                  {creatingTribo ? 'Criando...' : 'Criar Tribo'}
                </FormSubmitButton>
              </FormActions>
            </CreateTriboForm>
          </CreateTriboModal>
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
                {chatMessages.map((message) => (
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

