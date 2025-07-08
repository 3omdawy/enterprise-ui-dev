import PackingList from '.';
import userEvent from '@testing-library/user-event';
import { createStore } from './store';
import { Provider } from 'react-redux';
import React from 'react';
import { render as _render, screen } from 'test/utilities';

const render = (ui: React.ReactElement) => {
  return _render(<Provider store={createStore()}>{ui}</Provider>);
}

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText(/new item name/i);
});

it(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {
    render(<PackingList />);
    const addItemButton = screen.getByRole('button', { name: /add new item/i })
    const input = screen.getByLabelText(/new item name/i);

    expect(input).toHaveValue('');
    expect(addItemButton).toBeDisabled();
  },
);

it(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {
    render(<PackingList />);
    const addItemButton = screen.getByRole('button', { name: /add new item/i })
    const input = screen.getByLabelText(/new item name/i);

    await userEvent.type(input, 'Master frontend testing')

    expect(input).toHaveValue('Master frontend testing');
    expect(addItemButton).toBeEnabled();
  },
);

it(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    render(<PackingList />);
    const addItemButton = screen.getByRole('button', { name: /add new item/i })
    const input = screen.getByLabelText(/new item name/i);

    await userEvent.type(input, 'Master frontend testing');
    await userEvent.click(addItemButton);

    expect(screen.getByLabelText('Master frontend testing')).not.toBeChecked();
    expect(input).toHaveValue('');
  },
);

it(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    render(<PackingList />);
    const addItemButton = screen.getByRole('button', { name: /add new item/i })
    const input = screen.getByLabelText(/new item name/i);

    await userEvent.type(input, 'Master frontend testing');
    await userEvent.click(addItemButton);

    expect(screen.getByLabelText('Master frontend testing')).not.toBeChecked();
    expect(input).toHaveValue('');
  },
);
