import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home"
import InstagramPhoto from "./pages/instagram-photo"
import Telegram from "./pages/telegram"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/instagram-photo' element={<InstagramPhoto />} />
        <Route path='/telegram' element={<Telegram />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App