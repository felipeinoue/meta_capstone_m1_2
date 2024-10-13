import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./components/Bookingpage";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "./api";
import BookingForm from "./components/BookingForm";

test('initializeTimes function returns the expected times', () => {

  render(<BrowserRouter> <BookingPage /> </BrowserRouter>)

  const expectedTimes = []

  expectedTimes.forEach(time => {
    const option = screen.getByRole('option', {name: time})
    expect(option).toBeInTheDocument
  });
})

test('update times function returns the expected times', () => {

  render(<BrowserRouter> <BookingPage /> </BrowserRouter>)

  const futureDate = "3030-01-01"

  const dateInput = screen.getByLabelText(/Choose date/)
  fireEvent.change(dateInput, { target: { value: futureDate } })

  const expectedTimes = fetchAPI( new Date( futureDate ) )

  expectedTimes.forEach(time => {
    const option = screen.getByRole('option', {name: time})
    expect(option).toBeInTheDocument
  });

})

test('submit button is disabled if date in past', () => {

  const handleSubmit = jest.fn()

  render(
    <BrowserRouter>
      <BookingPage>
        <BookingForm onSubmit={handleSubmit} />
      </BookingPage> 
    </BrowserRouter>
  )

  const date = "2010-01-01"

  const dateInput = screen.getByLabelText(/Choose date/)
  fireEvent.change(dateInput, { target: { value: date } })

  const submitButton = screen.getByText(/Make Your reservation/)
  fireEvent.click(submitButton)

  expect(handleSubmit).not.toHaveBeenCalled()
  expect(submitButton).toHaveAttribute("disabled")
})