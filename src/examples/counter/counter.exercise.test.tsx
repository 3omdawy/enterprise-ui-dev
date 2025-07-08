//@vitest-environment happy-dom

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.innerText).toBe('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await userEvent.click(incrementButton);

  expect(currentCount.innerText).toBe('1');
});

test('it should render the component with an initial count', () => {
  const initialCount = 2;
  render(<Counter initialCount={initialCount} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.innerText).toBe(initialCount.toString());
});

test(
  'it should reset the count when the "Reset" button is pressed',
  async () => {
    const initialCount = 2;
    render(<Counter initialCount={initialCount} />);

    const resetButton = screen.getByRole('button', { name: /reset/i });
    await userEvent.click(resetButton);

    const currentCount = screen.getByTestId('current-count');
    expect(currentCount.innerText).toBe('0');
  },
);
