// import './App.css';

import { useState } from "react";


function BookingForm({
  availableTimes,
  updateTimes,
  // formFields,
}) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState("Any")

  const handleDateChange = (e) => {
    const selectedDate = e.target.value
    setDate(selectedDate)
    updateTimes(new Date(selectedDate))
  }

  return (
    <form className="BookingForm">
      <div className="section">
        <label className="lead-text" htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          value={date}
          onChange={ (e) => handleDateChange(e) }
        />
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="res-time">Choose time</label>
        <select id="res-time "
          value={time}
          onChange={ (e) => setTime(e.target.value) }
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
          value={guests}
          onChange={ (e) => setGuests(e.target.value) }
        />
      </div>
      <div className="section">
        <label className="lead-text" htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          value={occasion}
          onChange={ (e) => setOccasion(e.target.value) }
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
