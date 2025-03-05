import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import PDFHome from './components/PDF_to_Speech/PDFHome.jsx'
import BotHome from './components/Bot_Automation/BotHome.jsx'
import EncryptHome from './components/File_Encryptor/EncryptHome.jsx'
import EncryptCollection from './components/File_Encryptor/EncryptCollection.jsx'
import EncryptHeader from './components/File_Encryptor/EncryptHeader.jsx'


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

      <Route path='/file-encryptor' element={<EncryptHeader />}>
        <Route path="/file-encryptor" index element={<EncryptHome />} />
        <Route path="/file-encryptor/collections"  element={<EncryptCollection />} />
      </Route>

    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
