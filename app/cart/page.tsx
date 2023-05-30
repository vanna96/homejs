"use client";

import { ListItem } from "@/components/UI/ListItem";
import {
  DeleteFilled,
  DeleteOutlined,
  HeartFilled,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Affix, Button } from "antd";
import { useRouter } from "next/navigation";

export default function MyCart() {
  const router = useRouter();
  const favorites = [
    {
      id: 1,
      name: "Pizza pie",
      imgUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pizza-pie-546a53b.jpg?resize=768,574",
      price: "$6.25",
    },
    {
      id: 2,
      name: "Spaghetti with Meat Sauce",
      imgUrl:
        "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      price: "$8.25",
    },
    {
      id: 3,
      name: "French Fried Potatoes",
      imgUrl:
        "https://www.allrecipes.com/thmb/-Qlhx70a3HwawPd51kSIiGj-hpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4488416-0627cab55d4e44ec80f974fbc67befb7.jpg",
      price: "$4.25",
      rate: "4.2",
    },
    {
      id: 4,
      name: "Salad",
      imgUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
      price: "$3.25",
      badge: "Free delivery",
    },
    {
      id: 5,
      name: "Orange Juice",
      imgUrl:
        "https://images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg",
      price: "$3.00",
      promotion: "$2.50",
      badge: "20% OFF",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-[100vh]">
      <title>My Cart</title>
      <div className="max-h-[85vh] overflow-y-scroll">
        <Affix offsetTop={0}>
          <div className="flex items-center justify-between bg-pink-600 h-[50px] text-white px-2">
            <LeftOutlined
              className="cursor-pointer font-semibold text-white"
              onClick={() => router.back()}
            />
            <div
              className="text-white font-light text-xl"
              style={{ fontFamily: "__Roboto_Mono_65f3ca" }}
            >
              My Cart
            </div>
            <div>{""}</div>
          </div>
        </Affix>
        <div className="mx-4 mt-6">
          {favorites?.map((favorite, index: number) => (
            <Item key={index} favorite={favorite} />
          ))}
        </div>
      </div>
      <div className="bg-white h-[15vh] fixed bottom-0 w-full max-w-md rounded-tr-3xl rounded-tl-3xl">
        <div className="grid grid-cols-2 mx-[10px] space-y-2 mt-2">
          <div style={{ color: "gray", fontSize: "18px" }}>Subtotal</div>
          <div className="text-right font-semibold">$2.00</div>
        </div>
        <div className="grid grid-cols-2 mx-[10px]">
          <div style={{ color: "gray", fontSize: "18px" }}>Total</div>
          <div className="text-right font-semibold">$2.00</div>
        </div>
        <div className="w-[95%] mx-auto bg-black rounded-full h-[40px] flex items-center justify-center text-white mt-2 uppercase">
          Checkout
        </div>
      </div>
    </div>
  );
}

const Item = ({ favorite }: any) => {
  return (
    <div className="grid grid-cols-1 bg-white h-[120px] rounded-md mb-4 p-3">
      <div className="grid grid-cols-6">
        <div
          className="col-span-2"
          style={{
            backgroundImage: `url(${favorite?.imgUrl})`,
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginBottom: "30px",
            borderRadius: "10%",
          }}
        ></div>
        <div className="col-span-4 ml-3">
          <div className="truncate font-semibold">{favorite?.name}</div>
          <div className="truncate flex items-center mt-2 space-x-1">
            <StarFilled />
            <div>{favorite?.rate || "0.0"}</div>
          </div>
          <div className="truncate flex items-center mt-2 space-x-1">
            <div>{favorite?.price || "0.00"}</div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div
              className="h-[28px] w-[90px] rounded-md bottom-1 flex items-center"
              style={{
                border: "0.5px solid #8080808a",
              }}
            >
              <Button
                type="ghost"
                icon={<MinusOutlined />}
                style={{ color: "#d9363e", cursor: "pointer" }}
              />
              <div className="mx-3 text-[19px]">1</div>
              <Button
                type="ghost"
                icon={<PlusOutlined />}
                style={{ color: "#0958d9", cursor: "pointer" }}
              />
            </div>
            <Button
              type="ghost"
              icon={<DeleteFilled style={{ fontSize: "26px" }} />}
              style={{ color: "#d9363e", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
