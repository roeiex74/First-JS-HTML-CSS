import ImageGallery from 'react-image-gallery';
import * as React from 'react';
import './ImageGallery.scss';

const ImagesGallery = ({}) => {
    const images = [
        {
            original: '/Webp.net-resizeimage (1).jpg',
            thumbnail: '/Webp.net-resizeimage (1).jpg',
            originalHeight: 300,
        },
        {
            original: '/Webp.net-resizeimage (2).jpg',
            thumbnail: '/Webp.net-resizeimage (2).jpg',
            originalHeight: 300,
        },
        {
            original: '/Webp.net-resizeimage.jpg',
            thumbnail: '/Webp.net-resizeimage.jpg',
            originalHeight: 300,
        },
    ];
    return (
        <div class='imageG-class'>
            <ImageGallery items={images} />
        </div>
    );
};

export default ImagesGallery;
