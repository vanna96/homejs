'use client';

import { Header } from '@/components/UI/Header'
import { CarouselSlider } from '@/components/UI/CarouselSlider';
import { GridCategory } from '@/components/UI/GridCategory';
import { MenuBar } from '@/components/UI/Menu';
import { CarouselItems } from '@/components/UI/CarouselItems';
import { GridItem } from '@/components/UI/GridItem';
import { Footer } from '@/components/UI/Footer';
import { Button } from 'antd';
import { useState } from 'react';
import { CartButton } from '@/components/UI/FloatButton';

const containerStyle: React.CSSProperties = {
    background: 'white',
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    textAlign: 'center'
};

export default function Home() {
    const [loading, setLoading] = useState(false);

    const enterLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 6000);
    }

    const newComming =
        [
            {
                id: 6,
                name: "Classic",
                imgUrl: "https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg",
                price: "$10.00"
            },
            {
                id: 7,
                name: 'Ultimate Veggie Burgers',
                imgUrl: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
                price: "$5.00"
            },
            {
                id: 8,
                name: "Easy Korean Fried Chicken",
                imgUrl: "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg",
                price: "$5.60"
            },
            {
                id: 9,
                name: "Caramelized Shallot and Bacon Goat Cheese Pizza",
                imgurl: "https://www.halfbakedharvest.com/wp-content/uploads/2022/08/Caramelized-Shallot-and-Bacon-Goat-Cheese-Pizza-1.jpg",
                price: "$13.60"
            }
        ];

    const bestSelling = [
        {
            id: 10,
            name: "Delicious Egg Fried Rice Recipe",
            imgUrl: "https://images.deliveryhero.io/image/foodpanda/recipes/egg-fried-rice-recipe-1.jpg",
            price: "$6.00"
        },
        {
            id: 11,
            name: "Chinese Fried Noodles",
            imgUrl: "https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg",
            price: "$4.00"
        },
        {
            id: 12,
            name: "Pizza royale",
            imgUrl: "https://img.cuisineaz.com/1024x768/2013/12/20/i95731-pizza-royale.jpg",
            price: "$12.00"
        },
    ]

    const items = [
        {
            id: 1,
            name: "Pizza pie",
            imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pizza-pie-546a53b.jpg?resize=768,574",
            price: "$6.25"
        },
        {
            id: 2,
            name: "Spaghetti with Meat Sauce",
            imgUrl: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
            price: "$8.25"
        },
        {
            id: 3,
            name: "French Fried Potatoes",
            imgUrl: "https://www.allrecipes.com/thmb/-Qlhx70a3HwawPd51kSIiGj-hpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4488416-0627cab55d4e44ec80f974fbc67befb7.jpg",
            price: "$4.25",
            rate: "4.2"
        },
        {
            id: 4,
            name: "Salad",
            imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
            price: "$3.25",
            badge: "Free delivery"
        },
        {
            id: 5,
            name: "Orange Juice",
            imgUrl: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg",
            price: "$3.00",
            promotion: "$2.50",
            badge: "20% OFF"
        }
    ]
    return (
        <div className="max-w-md mx-auto" style={containerStyle}>
            <Header />
            <div className='mx-4 pb-10'>
                <CarouselSlider />
                <MenuBar label="Category" />
                <GridCategory />
                <MenuBar label="New Coming" url="item/new-coming" />
                <CarouselItems items={newComming} />
                <MenuBar label="Best Selling" url="item/best-selling" />
                <CarouselItems items={bestSelling} />
                <MenuBar label="Items" />
                <GridItem items={items} />
                <div className='text-center'>
                    <Button loading={loading} onClick={enterLoading} className='bg-pink-600 text-white top-1' type="ghost"> Load More </Button>
                </div>
                <CartButton />
            </div>
            <Footer />
        </div>
    )
}
