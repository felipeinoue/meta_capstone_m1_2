import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Bookingpage from './components/Bookingpage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<Bookingpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
