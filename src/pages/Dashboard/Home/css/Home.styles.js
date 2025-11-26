// ========== CSS (STYLED COMPONENTS) ==========
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  overflow-y: auto;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-column: span 2;
  }
`

export const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-column: span 1;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const StatCard = styled.div`
  border-radius: 0.5rem;
  background-color: #1E1F22;
  padding: 1rem;
`

export const StatCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const StatIcon = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: ${props => props.$bgColor || 'rgba(59, 130, 246, 0.2)'};
`

export const StatIconSymbol = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.5rem;
  color: ${props => props.$color || '#60A5FA'};
`

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatLabel = styled.p`
  font-size: 0.875rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const StatValue = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const ActivityCard = styled.div`
  border-radius: 0.5rem;
  background-color: #1E1F22;
  padding: 1rem;
`

export const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Spline Sans', sans-serif;
`

export const ActivityChart = styled.div`
  display: flex;
  height: 12rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
`

export const ChartBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-end;
  gap: 0.25rem;
`

export const ChartBarFill = styled.div`
  width: 100%;
  border-radius: 0.125rem 0.125rem 0 0;
  background-color: #5865F2;
  height: ${props => props.$height || '50%'};
`

export const ChartBarLabel = styled.p`
  font-size: 0.75rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const NotificationsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const NotificationItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const NotificationAvatar = styled.div`
  aspect-ratio: 1;
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const NotificationText = styled.p`
  flex: 1;
  font-size: 0.875rem;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
`

export const NotificationBold = styled.span`
  font-weight: 600;
`

export const NotificationPrimary = styled.span`
  font-weight: 600;
  color: #5865F2;
`

export const NotificationTime = styled.span`
  font-size: 0.75rem;
  color: #949BA4;
  font-family: 'Spline Sans', sans-serif;
`

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const FriendAvatarContainer = styled.div`
  position: relative;
`

export const FriendAvatar = styled.div`
  aspect-ratio: 1;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const FriendStatus = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  border: 2px solid #1E1F22;
  background-color: #23A55A;
`

export const FriendName = styled.p`
  flex: 1;
  font-weight: 500;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const FriendChatButton = styled.button`
  color: #949BA4;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &:hover {
    color: #ffffff;
  }
`

export const FriendChatIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.25rem;
`

export const CallsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CallItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  background-color: #2B2D31;
  padding: 0.5rem;
`

export const CallAvatar = styled.div`
  aspect-ratio: 1;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const CallInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const CallName = styled.p`
  font-weight: 500;
  color: #F2F3F5;
  font-family: 'Spline Sans', sans-serif;
`

export const CallStatus = styled.p`
  font-size: 0.75rem;
  color: #23A55A;
  font-family: 'Spline Sans', sans-serif;
`

export const CallButton = styled.button`
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: rgba(35, 165, 90, 0.2);
  color: #23A55A;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Spline Sans', sans-serif;

  &:hover {
    background-color: rgba(35, 165, 90, 0.3);
  }
`

export const CallIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.125rem;
`

