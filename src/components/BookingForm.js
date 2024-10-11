// import './App.css';

import { useState } from "react"
import { getTodayDate } from "./lib"

// import { useState } from "react";


function BookingForm({
  availableTimes,
  updateTimes,
  submitForm,
}) {
  const [formData, setFormData] = useState({
    date: getTodayDate(),
    time: "",
    guests: 1,
    occasion: "Any",
  })

  const handleChanges = (e) => {
    setFormData( (prevData) => ({...prevData, [e.target.name]: e.target.value}) )
  }

  const handleDateChanges = (e) => {
    updateTimes(e.target.value)    
    handleChanges(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(formData)
  }

  return (
    <form
      className="BookingForm"
      onSubmit={handleSubmit}
    >
      <div className="section">
        <label className="lead-text" htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          value={formData.date}
          name="date"
          onChange={ (e) => handleDateChanges(e) }
        />
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="res-time">Choose time</label>
        <select id="res-time "
          value={formData.time}
          name="time"
          onChange={ (e) => handleChanges(e) }
        >
          {
            availableTimes.map( availableTime =>
              <option key={availableTime} >{availableTime}</option>
             )
          }
        </select>
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="guests">Number of guests</label>
        <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests" 
          value={formData.guests}
          name="guests"
          onChange={ (e) => handleChanges(e) }
        />
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          value={formData.occasion}
          name="occasion"
          onChange={ (e) => handleChanges(e) }
        >
            <option>Any</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
      </div>
      <input className="lead-text" type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
