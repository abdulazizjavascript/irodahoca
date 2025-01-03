import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home"
import InstagramPhoto from "./pages/instagram-photo"
import Telegram from "./pages/telegram"
import CertificatePage from "./pages/certificate"
import ByePage from "./pages/bye"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/ins' element={<InstagramPhoto />} />
        <Route path='/telegram' element={<Telegram />} />
        <Route path='/certificate' element={<CertificatePage />} />
        <Route path='/bye' element={<ByePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App