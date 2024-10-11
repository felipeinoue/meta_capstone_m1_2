// import './App.css';

import { useState } from "react";


function Reserve() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("17:00")
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState("Any")


  return (
    <section className="reserve">
      <div className="cont">
        <h2 className="sub-title">Reserve a table</h2>
        <form>
          <div className="section">
            <label className="lead-text" htmlFor="res-date">Choose date</label>
            <input 
              type="date" 
              id="res-date" 
              value={date}
              onChange={ (e) => setDate(e.target.value) }
            />
          </div>
          <div className="section">
            <label className="lead-text" htmlFor="res-time">Choose time</label>
            <select id="res-time "
              value={time}
              onChange={ (e) => setTime(e.target.value) }
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
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
      </div>
    </section>
  );
}

export default Reserve;
