import { render, screen, queryByClassName } from '@testing-library/react';
import { ListCard } from './ListCard';
import '@testing-library/jest-dom';

describe('ListCard', () => {
  const items = [
    { point: 'Item 1', explanation: 'This is the explanation for item 1.' },
    { point: 'Item 2', explanation: 'This is the explanation for item 2.' },
  ];

  it('renders a Card component', () => {
    render(<ListCard items={items} />);

    expect(screen.getByRole('card')).toBeInTheDocument();
  });

  it('renders a list of items', () => {
    render(<ListCard items={items} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders a list of explanations', () => {
    render(<ListCard items={items} />);

    expect(screen.getByText('This is the explanation for item 1.')).toBeInTheDocument();
    expect(screen.getByText('This is the explanation for item 2.')).toBeInTheDocument();
  });
});
