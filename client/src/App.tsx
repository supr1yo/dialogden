import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat';


export default function App() {

  return (
    <Routes>
      <Route path='/' />
      <Route path='/chat' element={<Chat />} />
      <Route path='/' />
      
    </Routes>
  )
}


