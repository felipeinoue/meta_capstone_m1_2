// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import BookingPage from "./components/Bookingpage";

// test('Renders the BookingForm heading', () => {
//     render(<BookingPage />);
//     const headingElement = screen.getByText("Choose date");
//     expect(headingElement).toBeInTheDocument();
// })

test('initializeTimes function returns the expected times', () => {

  render(<BookingPage />)

  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]

  expectedTimes.forEach(time => {
    const option = screen.getByRole('option', {name: time})
    expect(option).toBeInTheDocument
  });
})

test('update times function returns the expeted times', () => {

  render(<BookingPage />)

  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]

  const dateInput = screen.getByLabelText(/Choose date/)
  fireEvent.change(dateInput, { target: { value: "2024/02/01" } })

  expectedTimes.forEach(time => {
    const option = screen.getByRole('option', {name: time})
    expect(option).toBeInTheDocument
  });

})