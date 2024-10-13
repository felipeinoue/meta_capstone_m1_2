// import './App.css';

import { useState } from "react"

// import { useState } from "react";

const dateIsInThePast = (date) => {
  // check that date is older than current date

  // get given date
  const g = date.split("-")
  const gY = parseInt(g[0])
  const gM = parseInt(g[1])
  const gD = parseInt(g[2])

  // get current date
  const c = new Date()
  const cY = c.getFullYear()
  const cM = c.getMonth() + 1
  const cD = c.getDate()

  return (gY < cY) | (gY === cY && gM < cM) || (gY === cY && gM === cM && gD < cD)
}

function BookingForm({
  availableTimes,
  updateTimes,
  submitForm,
}) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  })

  const handleChanges = (e) => {
    setFormData( (prevData) => ({...prevData, [e.target.name]: e.target.value}) )
  }

  const handleDateChanges = (e) => {

    // do nothing if date is in the past
    if (dateIsInThePast(e.target.value)) {
      alert("Date can't be in the past")      
      return
    }

    updateTimes(e.target.value)    
    handleChanges(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(formData)
  }

  const disableSubmit = () => {
    // disable submit if any test is true
    const dateInPast = dateIsInThePast(formData.date)
    const dateIsEmpty = formData.date === ""
    const timeIsEmpty = formData.time === ""
    const guestsOutOfRange = formData.guests < 1 && formData.guests > 10
    const occasionIsEmpty = formData.occasion === ""
    return dateInPast || dateIsEmpty || timeIsEmpty || guestsOutOfRange || occasionIsEmpty
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
          required={true}
        />
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="res-time">Choose time</label>
        <select id="res-time "
          value={formData.time}
          name="time"
          onChange={ (e) => handleChanges(e) }
          required={true}
        >
          <option>{""}</option>
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
          required={true}
        />
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          value={formData.occasion}
          name="occasion"
          onChange={ (e) => handleChanges(e) }
          required={true}
        >
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      </div>
      <input 
        className="lead-text" 
        type="submit" 
        value="Make Your reservation" 
        disabled={disableSubmit()}
        style={{ cursor: disableSubmit() ? "auto" : "pointer" }}
      />
    </form>
  );
}

export default BookingForm;
