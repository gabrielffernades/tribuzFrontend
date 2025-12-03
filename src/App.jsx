// ========== IMPORTS ==========
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import EsqueceuSenha from './pages/EsqueceuSenha'
import Dashboard from './pages/Dashboard'

// ========== JS (LÓGICA) ==========
function App() {
  const [currentPage, setCurrentPage] = useState('login')

  // Verificar se há usuário logado ao iniciar a aplicação
  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuarioLogado')
    if (usuarioLogado) {
      // Se houver usuário logado, redirecionar para dashboard
      setCurrentPage('dashboard')
    }
  }, [])

  const navigateToCadastro = () => {
    setCurrentPage('cadastro')
  }

  const navigateToLogin = () => {
    setCurrentPage('login')
  }

  const navigateToEsqueceuSenha = () => {
    setCurrentPage('esqueceuSenha')
  }

  const navigateToDashboard = () => {
    setCurrentPage('dashboard')
  }

  // ========== HTML (JSX) ==========
  return (
    <>
      {currentPage === 'login' && (
        <Login 
          onNavigateToCadastro={navigateToCadastro}
          onNavigateToEsqueceuSenha={navigateToEsqueceuSenha}
          onNavigateToDashboard={navigateToDashboard}
        />
      )}
      {currentPage === 'cadastro' && (
        <Cadastro onNavigateToLogin={navigateToLogin} />
      )}
      {currentPage === 'esqueceuSenha' && (
        <EsqueceuSenha onNavigateToLogin={navigateToLogin} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onNavigateToLogin={navigateToLogin} />
      )}
    </>
  )
}

export default App
