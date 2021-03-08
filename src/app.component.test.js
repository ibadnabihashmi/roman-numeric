import { render, screen, fireEvent } from '@testing-library/react';
import App from './app.component';

describe('App', () => {
  it('renders the title', () => {
    render(<App />);
    const element = screen.getByTestId('title');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Numeric to Roman and Roman to Numeric converter");
  });

  it('renders input elements', () => {
    render(<App />);
    const numeric = screen.getByTestId('numeric-text');
    const roman = screen.getByTestId('roman-text');

    expect(numeric).toBeInTheDocument();
    expect(roman).toBeInTheDocument();
  });

  it('converts numeric to roman', () => {
    render(<App />);
    const numeric = screen.getByTestId('numeric-text');

    fireEvent.change(numeric, {
      target: {
        value: '123'
      }
    })

    const roman = screen.getByTestId('roman-text');

    expect(roman.value).toBe('CXXIII')
  });

  it('converts roman to numeric', () => {
    render(<App />);
    const numeric = screen.getByTestId('roman-text');

    fireEvent.change(numeric, {
      target: {
        value: 'CXXIII'
      }
    })

    const roman = screen.getByTestId('numeric-text');

    expect(roman.value).toBe('123')
  });
});
