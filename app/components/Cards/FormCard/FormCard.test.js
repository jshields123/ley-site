import { render, screen } from '@testing-library/react';
import { FormCard } from './FormCard';
import '@testing-library/jest-dom';

describe('FormCard', () => {
  it('renders a Card component', () => {
    render(<FormCard />);
    expect(screen.getByRole('card')).toBeInTheDocument();
  });

  it('renders a SubTitle component with the text "Contact Us"', () => {
    render(<FormCard />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders a Form component', () => {
    render(<FormCard />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
