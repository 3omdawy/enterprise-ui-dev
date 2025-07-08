//@vitest-environment happy-dom

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    render(<Counter />);
    const currentCount = Number(screen.getByTestId('current-count').innerText);
    const incrementButton = screen.getByRole('button', { name: /increment/i })

    await userEvent.click(incrementButton);

    const nextCount = Number(screen.getByTestId('current-count').innerText);
    expect(nextCount).toBe(currentCount + 1);
    //screen.debug();
  },
);
