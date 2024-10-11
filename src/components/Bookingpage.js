// import './App.css';

import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";
import { getTodayDate } from "./lib";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate()

  const updateTimes = (state, date) => {
    return fetchAPI( new Date ( date ) )
  }

  const initializeTimes = () => {
    return fetchAPI( new Date( getTodayDate() ) )
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  const submitForm = (formData) => {
    const subtmitOk = submitAPI(formData)
    if (subtmitOk) {
      navigate("/confirmationpage")
    }
  }

  return (
    <main className="BookingPage">
      <div className="cont">
        <h2 className="sub-title">Reserve a table</h2>
        <BookingForm 
          availableTimes = {availableTimes}
          updateTimes = {dispatch}
          submitForm={submitForm}
        />
      </div>
    </main>
  );
}

export default BookingPage;
