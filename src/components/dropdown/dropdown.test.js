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
    const { container } = render(<Dropdown title={title} items={items} />);
  
    expect(container.querySelector('.dropdown__content')).not.toHaveClass('open');
  
    fireEvent.click(container.querySelector('.dropdown__title--click'));
  
    expect(container.querySelector('.dropdown__content')).toHaveClass('open');
  
    fireEvent.click(container.querySelector('.dropdown__title--click'));
  
    expect(container.querySelector('.dropdown__content')).not.toHaveClass('open');
  });
  
  test('The dropdown page matches the snapshot', () => {
    const { asFragment } = render(<Dropdown title={title} items={items} />);
    expect(asFragment()).toMatchSnapshot();
  });  
});
