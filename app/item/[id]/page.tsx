"use client";

import { AddToCart } from "@/components/UI/item_detail/AddToCart";
import { ArrowLeftOutlined, FieldTimeOutlined, FireOutlined, HeartFilled, ShareAltOutlined, ShoppingOutlined, StarOutlined } from "@ant-design/icons";
import { Badge, Button, Checkbox, Col, Radio, Row, Space } from "antd";
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
            <div className="">
                <div className="mt-[-5vh] w-[90%] mx-auto h-[80px] rounded-2xl shadow-sm" style={{ background: "#ffffff" }}>
                    <div className="grid grid-cols-7 p-2">
                        <div className="col-span-5 ml-2">
                            <span>{item?.name}</span>
                            <br />
                            <span className="text-2xl text-black">{`${item?.currency}${item?.promotion || item?.price}`}</span>
                            {" "}
                            <del className="text-red-700"><span className="text-base">{`${item?.currency}${item?.price}`}</span></del>
                        </div>
                        <div className="col-span-2 flex items-center justify-end mr-2">
                            <Button className="bg-pink-600 shadow-lg text-white h-[50px]" type="ghost">
                                <HeartFilled className="text-[20px]" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative p-4 mt-[1vh] bg-white">
                    <div className="flex justify-between items-center">
                        <div className="cursor-pointer"><StarOutlined className="text-xl text-yellow-500 tex" />{"  "} 4.5</div>
                        <div className="cursor-pointer"><FireOutlined className="text-xl text-red-500" />{" "} 150 Kcal</div>
                        <div className="cursor-pointer"><FieldTimeOutlined className="text-xl text-gray-500" /> {" "} 5-15 Minutes</div>
                    </div>
                    <div className="mt-6">
                        {/* {item?.details.map((i, index: number) => {
                            return <div key={index}>
                                <h3 className="uppercase mb-4">{i?.label} {i?.required ? <span className="text-red-800">*</span> : ""}</h3>
                                {i?.type === 'Radio' ? (i.isOption ? <Radio.Group>
                                    {i?.options?.map(({ name, id }, index: number) => <Radio key={index} value={id}>
                                        <span className="text-[18px]">
                                            {name}
                                        </span>
                                    </Radio>)}
                                </Radio.Group> :
                                    <>
                                        {i?.options?.map(({ name, id, price }, index: number) => <div key={index} className="flex justify-between mb-4 items-center">
                                            <Radio key={index} value={id}><span className="text-[18px]">{name}</span></Radio><span>{parseFloat(price) > 0 ? `${item?.currency}${price}` : "Free"}</span>
                                        </div>)}
                                    </>
                                ) :
                                    <>
                                        {i?.options?.map(({ name, id, price }, index: number) => <div key={index} className="flex justify-between mb-4 items-center">
                                            <Checkbox key={index} value={id} checked={false}><span className="text-[18px]">{name}</span></Checkbox> <span> {parseFloat(price) > 0 ? `${item?.currency}${price}` : "Free"} </span>
                                        </div>)}
                                    </>}
                            </div>
                        })} */}
                    </div>
                </div>
            </div>
        </div>
        <AddToCart />
    </div>

    return <div className="max-w-md mx-auto containerStyle min-h-[100vh]">
        <div style={{
            backgroundImage: `url(${item?.imgUrl})`,
            width: '100%',
            height: '150px',
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
        <div className='mx-4 mt-2'>
            <div className="flex justify-between">
                <div className="font-semibold text-xl">{item?.name}</div>
            </div>
            <div className="flex items-center space-x-2 mt-1">
                <StarOutlined className="right-[30px] text-gray-500" />
                <div className="text-gray-500">{item?.rate}</div>
            </div>
        </div>
        <AddToCart />
    </div>
}
 // <Radio.Group>
                                //     {i?.options?.map(({ name, id, price }, index: number) => <Radio key={index} value={id}>
                                //         <span className="text-[18px]">
                                //             {name} {!i?.isOption && parseFloat(price) > 0 ? `(${item?.currency}${item?.price})` : ""}
                                //         </span>
                                //     </Radio>)}
                                // </Radio.Group> :
