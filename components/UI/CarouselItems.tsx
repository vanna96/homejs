import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardItem } from "./CardItem";

export const CarouselItems = ({ items }: any) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        variableWidth: true
    };
    return (
        <div className="text-center">
            <Slider {...settings}>
                {items?.map((item: any, index: number) => {
                    return (<div style={{ width: 280 }} key={index}>
                        <CardItem item={item} />
                    </div>)
                })}
            </Slider >
        </div >
    );
}
