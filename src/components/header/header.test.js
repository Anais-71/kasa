import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given I am on a page', () => {
  beforeEach(() => {
    render(<Header activeLink="/" />);
  });

  test('When the header component is being displayed, Then the white should be present', () => {
    const logo = screen.getByAltText('Kasa');
    expect(logo).toBeInTheDocument();
  });  

  test('When the header component is being displayed, Then the navigation links should be present', () => {
    const home = screen.getByText(/Accueil/i);
    const about = screen.getByAltText(/A propos/i);
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });

  test('When I am on the home page, Then the home link should be active', () => {
    const homeLink = screen.getByTestId('navlink-home');
    expect(homeLink).toHaveClass('active');
  
    const aboutLink = screen.getByTestId('navlink-about');
    expect(aboutLink).not.toHaveClass('active');
  });
  
  test('When I am on the about page, Then the about link should be active', () => {
    render(<Header activeLink="/about" />);

    const homeLink = screen.getByTestId('navlink-home');
    expect(homeLink).not.toHaveClass('active');
    
    const aboutLink = screen.getByTestId('navlink-about');
    expect(aboutLink).toHaveClass('active');
  });

  test('The header page matches the snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});