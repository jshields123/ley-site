import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders a button with the given text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('is not clickable when disabled', () => {
    render(<Button text="Click me" isDisabled />);
    expect(screen.getByText('Click me')).toBeDisabled();
  });

  it('is clickable when not disabled', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).not.toBeDisabled();
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has a title attribute', () => {
    render(<Button text="Click me" title="Click me" />);
    expect(screen.getByText('Click me')).toHaveAttribute('title', 'Click me');
  });

  it('can be focused on with a keyboard', () => {
    render(<Button text="Click me" />);
    const button = screen.getByText('Click me');
    button.focus();
    expect(button).toHaveFocus();
  });

  it('can be click with a mouse', () => {
    render(<Button text="Click me" />);
    const button = screen.getByText('Click me');
    button.click();
    expect(document.activeElement).toHaveFocus();
  });
});
