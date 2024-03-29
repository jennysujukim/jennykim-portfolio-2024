import { Routes, Route } from 'react-router-dom'
import { SidebarContextProvider } from './contexts/SidebarContext'
// layout
import GlobalLayout from './layouts/GlobalLayout'
// pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'
// styles
import './App.scss'

function App() {

  return (
    <SidebarContextProvider>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </SidebarContextProvider>
  )
}

export default App
