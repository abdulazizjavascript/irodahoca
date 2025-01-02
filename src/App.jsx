import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home"
import InstagramPhoto from "./pages/instagram-photo"
import Telegram from "./pages/telegram"
import CertificatePage from "./pages/certificate"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/ins' element={<InstagramPhoto />} />
        <Route path='/telegram' element={<Telegram />} />
        <Route path='/certificate' element={<CertificatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App