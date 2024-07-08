import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import Card from './Card';

describe('Given I am on the home page', () => {
  beforeEach(() => {
    render(<Card />);
  });

  test('When the card component is being displayed, Then the cover image should be present', () => {
    const cover = screen.getByAltText('image de la carte');
    expect(cover).toBeInTheDocument();
  });  

  test('When the card component is being displayed, Then the title should be present', () => {
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });

  test('The card matches the snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});