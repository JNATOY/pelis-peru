import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
