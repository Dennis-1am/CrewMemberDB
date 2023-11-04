import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route , BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Layout from './pages/Layout.jsx'
import CreateCrewPage from './pages/CreateCrew.jsx'
import ViewCrewPage from './pages/ViewCrew.jsx'
import CrewDetail from './pages/CrewDetail.jsx'
import EditCrew from './pages/EditCrew.jsx'
import './index.css'
import { DataProvider } from './database/DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<App/>} />
          <Route path="/createCrew" element={<CreateCrewPage/>} />
          <Route path="/viewCrew" element={<ViewCrewPage/>} />
          <Route path="/crewDetail/:id" element={<CrewDetail/>} />
          <Route path="/editCrew/:id" element={<EditCrew/>} />
        </Route>
      </Routes>
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
