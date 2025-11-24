// ========== IMPORTS ==========
import { useState } from 'react'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import EsqueceuSenha from './pages/EsqueceuSenha'

// ========== JS (LÓGICA) ==========
function App() {
  const [currentPage, setCurrentPage] = useState('login')

  const navigateToCadastro = () => {
    setCurrentPage('cadastro')
  }

  const navigateToLogin = () => {
    setCurrentPage('login')
  }

  const navigateToEsqueceuSenha = () => {
    setCurrentPage('esqueceuSenha')
  }

  // ========== HTML (JSX) ==========
  return (
    <>
      {currentPage === 'login' && (
        <Login 
          onNavigateToCadastro={navigateToCadastro}
          onNavigateToEsqueceuSenha={navigateToEsqueceuSenha}
        />
      )}
      {currentPage === 'cadastro' && (
        <Cadastro onNavigateToLogin={navigateToLogin} />
      )}
      {currentPage === 'esqueceuSenha' && (
        <EsqueceuSenha onNavigateToLogin={navigateToLogin} />
      )}
    </>
  )
}

export default App
