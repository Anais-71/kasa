import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Given I am on a page', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  test('When the header component is being displayed, Then the logo should be present', () => {
    const logo = screen.getByAltText('Kasa');
    expect(logo).toBeInTheDocument();
  });  

  test('When the header component is being displayed, Then the home link should be present', () => {
    const copyrights = screen.getByText(/Accueil/i);
    expect(copyrights).toBeInTheDocument();
  });

  test('When the header component is being displayed, Then the about link should be present', () => {
    const copyrights = screen.getByText(/A propos/i);
    expect(copyrights).toBeInTheDocument();
  });

  test('The header component matches the snapshot', () => {
    const { asFragment } = render(<Router>
      <Header />
    </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});