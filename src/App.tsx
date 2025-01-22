import { Routes, Route } from 'react-router-dom';
import Home from './components/molecule/Home.tsx'
import LinkedListVisualization from './components/molecule/LinkedListVisualization.tsx'
import DoublyLinkedListVisualization from './components/molecule/DoublyLinkedListVisualization.tsx'

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-structures/linked-list" element={<LinkedListVisualization />} />
          <Route path="/data-structures/doubly-linked-list" element={<DoublyLinkedListVisualization />} />
          <Route path="*" element={<Home />} />
       </Routes>
    </>
  )
}

export default App
