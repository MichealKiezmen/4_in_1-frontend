import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import PDFHome from './components/PDF_to_Speech/PDFHome.jsx'
import BotHome from './components/Bot_Automation/BotHome.jsx'


function App() {
  return (
    <>

  <BrowserRouter>
    <Routes>
    {/* HOME ROUTES */}
      <Route path="/" element={<Home/>}>
      </Route>

{/* PDF TO SPEECH */}
      <Route path='/pdf-to-speech' element={<PDFHome/>}>
        {/* <Route path="/links/:userid" element={} /> */}
      </Route>

{/* AUTOMATION BY BOT */}
      <Route path='/bot-automation' element={<BotHome />}>
        {/* <Route path="/upload-video" element={} /> */}
      </Route>

    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
