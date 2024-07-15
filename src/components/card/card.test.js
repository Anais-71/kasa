import { render } from '@testing-library/react';
import Card from './Card';

jest.mock('../../utils/fetch', () => ({
  fetchData: () => Promise.resolve([
    {
      id: '1',
      title: 'Test title',
      cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'
    }
  ])
}));

describe('Given I am on the home page', () => {
  test('When the card component is being displayed, Then the title should be present', async () => {
    const { findByText } = render(<Card />);
    expect(await findByText('Test title')).toBeInTheDocument();
  });  

  test('When the card component is being displayed, Then the cover image should be present', async () => {
    const { findByRole } = render(<Card />);
    expect(await findByRole('img', { name: /logement/i })).toBeInTheDocument();
  });

  test('The dropdown page matches the snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});
