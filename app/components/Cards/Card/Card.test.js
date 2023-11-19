import { render } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders a div with class: card', () => {
    render(<Card />);
    expect(document.querySelector('.card')).toBeInTheDocument();
  });

  it('renders a card with children', () => {
    render(<Card>Test</Card>);
    expect(document.querySelector('.card')).toHaveTextContent('Test');
  });
});
