import BookingForm from "../componenets/BookingForm.jsx"

export default function BookingPage({ availableTimes, dispatch }) {

  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </>
  )
}