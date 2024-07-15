import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Given I am on a page', () => {
  const title = 'Test title';
  const items = ['Item 1', 'Item 2', 'Item 3'];

  test('When the dropdown component is being displayed, Then the title should be present', () => {
    const { getByText } = render(<Dropdown title={title} items={items} />);
    expect(getByText(title)).toBeInTheDocument();
  });  

  test('When the dropdown component is being displayed, Then the dropdown toggles on click', () => {
    const { getByText, queryByText, container } = render(<Dropdown title={title} items={items} />);

    items.forEach(item => {
      expect(queryByText(item)).not.toBeInTheDocument();
    });

    fireEvent.click(container.querySelector('.dropdown__title--click'));

    items.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });

    fireEvent.click(container.querySelector('.dropdown__title--click'));

    items.forEach(item => {
      expect(queryByText(item)).not.toBeInTheDocument();
    });
  });

  test('The dropdown page matches the snapshot', () => {
    const { asFragment } = render(<Dropdown />);
    expect(asFragment()).toMatchSnapshot();
  });
});