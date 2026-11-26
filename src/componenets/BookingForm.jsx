import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {



  const [ time, setTime ] = useState(availableTimes[0]);
  const [ numOfGuests, setNumOfGuests ] = useState("1")
  const [ occasion, setOccasion ] = useState("");
  const [ date, setDate ] = useState("")
  const [ reservation, setReservation ] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setReservation({
      time,
      numOfGuests,
      occasion,
      date
    });
    if (time === availableTimes[0]) {
      setTime(availableTimes[1])
    }else {
      setTime(availableTimes[0])
    }

    dispatch(time)

    setNumOfGuests("1");
    setOccasion("");
    setDate("")
  }

  return (
    <>
      <div className="content-wrapper-booking">
        <div className="page">
          <form className="booking-form" aria-label="Booking form">
            <label htmlFor="res-date" >Choose date</label>
              <input type="date" id="res-date" value={date} onChange={(e) => {
                setDate(e.target.value)}}
              />
              <label htmlFor="res-time" a>Choose time</label>
              <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                  {availableTimes.map((a) => <option key={a} value={a}>{a}</option>)}

              </select>
              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests" value={numOfGuests} onChange={(e) => {
                setNumOfGuests(e.target.value);
              }} />
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" placeholder="Select occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                  <option>No special occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
              <input type="submit" value="Make Your reservation"  aria-label="Make Your reservation submit " disabled={!date} onClick={handleSubmit}></input>
              {reservation && <p>{reservation.date} {reservation.time}</p> }
          </form>
        </div>
      </div>
    </>
  )
}