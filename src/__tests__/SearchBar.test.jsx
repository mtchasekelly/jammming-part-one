import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar Component', () => {

    it("renders a search bar component", () => {

      const { container } = render(<SearchBar />);
      expect(container.firstChild).toBeTruthy();

    });

    it('renders with an initial default value', () => {
    
      render(<SearchBar />);
      const input = screen.getByPlaceholderText('Enter a song, album, or artist...');
      expect(input).toBeInTheDocument();

    });
  
    it("has a button named Search", () => {

      render(<SearchBar />);
      const inputElement = screen.getByText('Search');
      expect(inputElement).toBeInTheDocument();

    });
  
});
  