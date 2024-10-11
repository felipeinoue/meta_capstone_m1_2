// import './App.css';

import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../api";

function BookingPage() {
  // const [formFields, setFormFields] = useState({
  //   date: "",
  //   time: "",
  //   guests: 1,
  //   occasion: "Any",
  // })

  const updateTimes = (state, selectedDate) => {
    return fetchAPI( selectedDate )
  }

  const initializeTimes = () => {
    // returns available times for today's date
    return fetchAPI( new Date() )
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  useEffect(() => {
    const a = new Date()
    console.log(a)
    return () => {
      // second
    }
  }, [])
  

  return (
    <main className="BookingPage">
      <div className="cont">
        <h2 className="sub-title">Reserve a table</h2>
        <BookingForm 
          availableTimes = {availableTimes}
          updateTimes = {dispatch}
          // fields = {formFields}
          // setFields = {setFormFields}
        />
      </div>
    </main>
  );
}

export default BookingPage;
