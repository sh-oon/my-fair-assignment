import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './input';

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
});