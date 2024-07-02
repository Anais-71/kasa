import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Given I am on a page', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('When the footer component is being displayed, Then the white logo should be present', () => {
    const logo = screen.getByAltText('Kasa');
    expect(logo).toBeInTheDocument();
  });  

  test('When the footer component is being displayed, Then the copyrights should be present', () => {
    const copyrights = screen.getByText(/All rights reserved/i);
    expect(copyrights).toBeInTheDocument();
  });

  test('The footer page matches the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});