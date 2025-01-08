import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home"
import InstagramPhoto from "./pages/instagram-photo"
import Telegram from "./pages/telegram"
// import CertificatePage from "./pages/certificate"
import ByePage from "./pages/bye"
// import DiplomaPage from "./pages/diploma"
import TashakkurnomaPage from "./pages/tashakkurnoma"
import VebinarPage from "./pages/vebinar"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/vebinar" element={<VebinarPage />} />
        <Route path='/ins' element={<InstagramPhoto />} />
        <Route path='/telegram' element={<Telegram />} />
        {/* <Route path='/certificate' element={<CertificatePage />} /> */}
        {/* <Route path='/diploma' element={<DiplomaPage />} /> */}
        <Route path='/bye' element={<ByePage />} />
        <Route path='/tashakkurnoma' element={<TashakkurnomaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App