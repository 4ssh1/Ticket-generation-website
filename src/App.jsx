import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Router/HomePage"
import TicketPage from "./Router/TicketPage"
import DownloadTicket from "./Router/DownloadTicket"
import About from "./Router/About"
import AllTickets from "./Router/AllTickets"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage />}/>
      <Route path="/ticket" element={<TicketPage />}/>
      <Route path="/lastPage" element={<DownloadTicket />}/>
      <Route path="/aboutpage" element={<About />}/>
      <Route path="/alltickets" element={<AllTickets />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
