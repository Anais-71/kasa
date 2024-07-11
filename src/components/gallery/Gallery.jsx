import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from "../../utils/fetch";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//CSS
import './gallery.css'

function Gallery() {
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const dataJson = await fetchData();
            const dataItem = dataJson.find(item => item.id === id);
            setImages(dataItem ? dataItem.pictures : []);
        };
        getData();
    }, [id]);

    const goNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="gallery">
            {images.length > 1 && (
                <FaChevronLeft className="gallery__prev" onClick={goPrev} size={79}/>
            )}
            <img className='gallery__img' src={images[currentIndex]} alt="" />
            {images.length > 1 && (
                <FaChevronRight className="gallery__next" onClick={goNext} size={79}/>
            )}
            <div className="gallery__counter">{currentIndex + 1}/{images.length}</div>
        </div>
    );
}

export default Gallery;