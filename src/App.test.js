// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoSwarm title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoSwarm/i);
    expect(titleElement).toBeInTheDocument();
});
