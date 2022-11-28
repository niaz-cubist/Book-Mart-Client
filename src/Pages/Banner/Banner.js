import React from 'react';
import img1 from '../Banner/img1.jpeg'
import img2 from '../Banner/img2.jpg'
import img3 from '../Banner/img3.jpeg'
import img4 from '../Banner/img4.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel-item carousel  h-80 mx-auto w-9/12 mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt="" src={img1} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-orange-400'>
                        A reader lives a thousand lives <br /> Before he dies
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-white'>
                        So many books.. <br />
                        So little time...
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt="" src={img3} className="w-full" />
                <div className="absolute  flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-medium text-orange-600'>
                        A room without books is like <br />
                        A body without a soul.
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt="" src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-28">
                    <h1 className='text-4xl text-left font-bold text-orange-400'>
                        There is no friend <br /> as loyal as a book.
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 mx-2 left-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;