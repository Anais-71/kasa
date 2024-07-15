import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Given I am on the home page', () => {
  const title = 'Test title';
  const cover = ['https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'];

  test('When the card component is being displayed, Then the title should be present', () => {
    const { getByText } = render(<Card title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });  

  test('When the card component is being displayed, Then the cover image should be present', () => {
    const { getByText } = render(<Card cover={cover} />);
    expect(getByText(cover)).toBeInTheDocument();
  });

  test('The dropdown page matches the snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});