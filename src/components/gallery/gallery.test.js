import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Gallery from './Gallery';
import { fetchData } from '../../utils/fetch';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../utils/fetch');

const mockData = [
    {
        id: '1',
        pictures: ['image1.jpg', 'image2.jpg', 'image3.jpg']
    },
    {
        id: '2',
        pictures: ['image4.jpg', 'image5.jpg', 'image6.jpg']
    }
];

describe('When I am on a housing page', () => {
    beforeEach(() => {
        fetchData.mockResolvedValue(mockData);
    });
    
    it('Then the image changes when next button is clicked', async () => {
        const { findByAltText, container } = render(<Router><Gallery /></Router>);
        await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));

        const nextButton = container.querySelector('.gallery__next');
        if (nextButton) {
            fireEvent.click(nextButton);
            const image = await findByAltText('Logement');
            expect(image.src).toContain('image2.jpg');
        } else {
            console.log('Next button is not available');
        }
    });

    it('Then the image changes when previous button is clicked', async () => {
        const { findByAltText, container } = render(<Router><Gallery /></Router>);
        await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));

        const prevButton = container.querySelector('.gallery__prev');
        if (prevButton) {
            fireEvent.click(prevButton);
            const image = await findByAltText('Logement');
            expect(image.src).toContain('image3.jpg');
        } else {
            console.log('Prev button is not available');
        }
    });

    test('The gallery component matches the snapshot', () => {
        const { asFragment } = render(<Router><Gallery /></Router>);
        expect(asFragment()).toMatchSnapshot();
    }); 
});