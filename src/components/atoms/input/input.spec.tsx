import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './input';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  test('renders without error', () => {
    render(<Input />);
  });

  test('handles onChange event', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Input onChange={handleChange} />);
    const inputElement = getByTestId('input-element');

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  test('renders value', () => {
    const value = 'test value';
    const { getByDisplayValue } = render(<Input value={value} />);
    const inputElement = getByDisplayValue(value);

    expect(inputElement).toBeInTheDocument();
  });

  test('max length', async () => {
    const maxLength = 5;
    const { getByTestId } = render(<Input maxLength={maxLength} />);
    const inputElement = getByTestId('input-element') as HTMLInputElement;
    const user = userEvent.setup();

    expect(inputElement).toHaveAttribute('maxLength', '5');

    await user.type(inputElement, '123456');

    expect(inputElement.value).toBe('12345');
  });
});