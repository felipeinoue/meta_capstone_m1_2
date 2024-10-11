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
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "./api";
import { getTodayDate } from "./components/lib";

// test('Renders the BookingForm heading', () => {
//     render(<BookingPage />);
//     const headingElement = screen.getByText("Choose date");
//     expect(headingElement).toBeInTheDocument();
// })

test('initializeTimes function returns the expected times', () => {

  render(<BrowserRouter> <BookingPage /> </BrowserRouter>)

  const expectedTimes = fetchAPI( new Date( getTodayDate() ) )
  console.log(expectedTimes)

  expectedTimes.forEach(time => {
    const option = screen.getByRole('option', {name: time})
    expect(option).toBeInTheDocument
  });
})

test('update times function returns the expected times', () => {

  render(<BrowserRouter> <BookingPage /> </BrowserRouter>)

  const date = "2024-04-05"

  const dateInput = screen.getByLabelText(/Choose date/)
  fireEvent.change(dateInput, { target: { value: date } })

  const expectedTimes = fetchAPI( new Date( date ) )

  expectedTimes.forEach(time => {
    const option = screen.getByRole('option', {name: time})
    expect(option).toBeInTheDocument
  });

})