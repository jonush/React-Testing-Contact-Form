import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import ContactForm from './ContactForm';

test('render the ContactForm component', () => {
  render(<ContactForm />);
})

test('form can be filled in and submitted successfully', () => {
  async () => {const { getByLabelText, getByTestId, getByText } = render(<ContactForm/>);

  const firstName = getByLabelText(/first name*/i);
  const lastName = getByLabelText(/last name*/i);
  const email = getByLabelText(/email*/i);
  const message = getByLabelText(/message/i);

  expect(firstName).toBeInTheDocument;
  expect(lastName).toBeInTheDocument;
  expect(email).toBeInTheDocument;
  expect(message).toBeInTheDocument;

  fireEvent.change(firstName, {target: {value: 'Jon'}});
  fireEvent.change(lastName, {target: {value: 'Hsu'}});
  fireEvent.change(email, {target: {value: 'jon@gmail.com'}});
  fireEvent.change(message, {target: {value: 'Hey! This is Jon!'}});

  expect(firstName.value).toBe('Jon');
  expect(lastName.value).toBe('Hsu');
  expect(email.value).toBe('jon@gmail.com');
  expect(message.value).toBe('Hey! This is Jon!');

  fireEvent.click(getByTestId('submit'));
  await act(() => promise);

  expect(getByText(/Jon/i)).toBeInTheDocument();}
})