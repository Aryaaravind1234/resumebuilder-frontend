import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import ResumeGenerator from './Pages/ResumeGenerator'
import UseForm from './Pages/UseForm'
import History from './Pages/History'

import Pnf from './Pages/Pnf'
import ViewResume from './Pages/ViewResume'
import Landing from './Pages/Landing'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/form' element={<UseForm />} />
        <Route path='/history' element={<History />} />
        <Route path='/resume/:id/view' element={<ViewResume />} />


        <Route path='/*' element={<Pnf />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
