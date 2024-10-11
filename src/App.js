import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import BookingPage from './components/Bookingpage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/confirmationpage" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
