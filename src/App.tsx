import { Routes, Route, useParams } from 'react-router-dom'
import { SidebarContextProvider } from './contexts/SidebarContext'
import { GetProjectsDataContextProvider } from './contexts/GetProjectsDataContext'
// layout
import GlobalLayout from './layouts/GlobalLayout'
// pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ArtifactPage from './pages/ArtifactPage'
import NotFoundPage from './pages/NotFoundPage'
// styles
import './App.scss'

function App() {

  let { id } = useParams()

  return (
    <GetProjectsDataContextProvider>
      <SidebarContextProvider>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects">
              <Route index element={<ProjectsPage />} />
              <Route path={`:${id}`} element={<ArtifactPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </SidebarContextProvider>
    </GetProjectsDataContextProvider>
  )
}

export default App
