import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Router/HomePage"
import TicketPage from "./Router/TicketPage"
import DownloadTicket from "./Router/DownloadTicket"
import About from "./Router/About"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage />}/>
      <Route path="/ticket" element={<TicketPage />}/>
      <Route path="/lastPage" element={<DownloadTicket />}/>
      <Route path="/aboutpage" element={<About />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
