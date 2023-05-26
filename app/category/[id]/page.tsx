"use client";

import { ArrowLeftOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function ItemDetail() {
    const router = useRouter();
    const item = {
        id: 5,
        name: "បាយឆាក្តាមយ៉ាងចូវ",
        currency: "$",
        imgUrl: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg",
        price: "3.00",
        promotion: "2.50",
        badge: "20% OFF",
        rate: "4.2",
        details: [
            {
                label: "Select An Option",
                type: "Radio",
                min: 1,
                max: 2,
                required: true,
                isOption: true,
                options: [
                    {
                        id: 1,
                        price: "1.80",
                        name: "កែវតូច"
                    },
                    {
                        id: 2,
                        price: "2.00",
                        name: "កែវកណ្តាល"
                    },
                    {
                        id: 3,
                        price: "2.20",
                        name: "កែវធំ"
                    }
                ]
            },
            {
                label: "ជម្រើសមុខម្ហូបបន្ថែម",
                type: "check",
                min: 1,
                max: 2,
                required: false,
                options: [
                    {
                        id: 4,
                        price: '0.00',
                        name: "ពងទាចៀន"
                    },
                    {
                        id: 5,
                        price: "1.72",
                        name: "ពងទាក្រឡុកសាច់ក្តាម"
                    },
                    {
                        id: 6,
                        price: "1.56",
                        name: "ស្លាបមាន់បំពង"
                    },
                    {
                        id: 7,
                        price: "1.35",
                        name: "ស៊ុបប្រហិតសាច់គោ"
                    },
                    {
                        id: 8,
                        price: "1.27",
                        name: "ទឹកផាសិនស្រស់"
                    }
                ]
            },
            {
                label: "ទឹកស៊ុបធ្វើពីសាច់ជ្រូក និងបន្លែ",
                type: "Radio",
                min: 1,
                max: 2,
                required: false,
                options: [
                    {
                        id: 4,
                        price: '0.15',
                        name: "ស៊ុបថែមឆ្នឹងបន្លែ"
                    },
                    {
                        id: 5,
                        price: "0.00",
                        name: "យកទឹកស៊ុប"
                    },
                    {
                        id: 6,
                        price: "0.00",
                        name: "អត់យកស៊ុប"
                    }
                ]
            }
        ]
    };

    return <div className="max-w-md mx-auto containerStyle min-h-[100vh]">
        <div className="ohlala">
            <div style={{
                backgroundImage: `url(${item?.imgUrl})`,
                width: '100%',
                height: '250px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} />
            <div className='flex relative justify-start px-2'>
                <div className="stickyIcon" onClick={() => router.back()}>
                    <ArrowLeftOutlined style={{ color: '#db2877' }} />
                </div>
            </div>
            <div className='flex relative justify-end px-2'>
                <div className="stickyIcon">
                    <ShareAltOutlined style={{ color: '#db2877' }} />
                </div>
            </div>
        </div>
    </div>
}
