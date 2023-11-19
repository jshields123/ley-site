import { TextCard } from './TextCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TextCard', () => {
  it('renders a Card component', () => {
    render(<TextCard text="This is some text." />);

    expect(screen.getByRole('card')).toBeInTheDocument();
  });

  it('renders a div element with the container class', () => {
    render(<TextCard text="This is some text." />);

    expect(screen.getByRole('card')).toContainElement(document.querySelector('.container'));
  });

  it('renders a p element with the text class', () => {
    render(<TextCard text="This is some text." />);

    expect(screen.getByRole('card')).toContainElement(document.querySelector('.text'));
  });

  it('renders the given text in the p element', () => {
    render(<TextCard text="This is some text." />);

    expect(document.querySelector('.text')).toHaveTextContent('This is some text.');
  });
});
