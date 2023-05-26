import React from 'react';
import { Carousel } from 'antd';

export const CarouselSlider = () => {
    const image = [
        'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
        'https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download',
        'https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg',
        'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg'
    ];
    return (
        <div className='mt-6 relative z-0' >
            <Carousel dots={true} dotPosition="bottom" slickGoTo={2}>
                {image?.map((i: any, index: number) => <div key={index}>
                    <h3 style={{
                        height: '160px',
                        lineHeight: '160px',
                        // textAlign: 'center',
                        backgroundImage: `url('${i}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}>
                        {/* <div className='text-white relative top-[-50px] left-[-100px]'>
                            ada
                        </div> */}
                    </h3>
                </div>)}
            </Carousel>
        </div>
    )
};
