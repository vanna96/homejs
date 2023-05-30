"use client";

import { GridItem } from "@/components/UI/GridItem";
import { ListItem } from "@/components/UI/ListItem";
import {
  AppstoreOutlined,
  BarsOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Affix, Segmented } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function newComming() {
  const router = useRouter();
  const [listType, setListType] = useState("Grid");

  const items = [
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
    <div className="max-w-md mx-auto containerStyle min-h-[100vh]">
      <title>New Coming</title>
      <div className="flex items-center justify-between bg-pink-600 h-[50px] text-white px-2">
        <LeftOutlined
          className="cursor-pointer font-semibold text-white"
          onClick={() => router.back()}
        />
        <div
          className="text-white font-light text-xl"
          style={{ fontFamily: "__Roboto_Mono_65f3ca" }}
        >
          New Coming
        </div>
        <div>{""}</div>
      </div>
      <div className="mx-4">
        <Affix offsetTop={0}>
          <div className="flex items-center justify-between mb-7 bg-white">
            <h3
              className="font-bold"
              style={{ fontFamily: "__Roboto_Mono_65f3ca" }}
            >
              Lists
            </h3>
            <Segmented
              size="large"
              value={listType}
              onChange={(value: any) => setListType(value)}
              options={[
                {
                  value: "List",
                  icon: <BarsOutlined />,
                },
                {
                  value: "Grid",
                  icon: <AppstoreOutlined />,
                },
              ]}
            />
          </div>
        </Affix>
        {listType === "Grid" ? (
          <GridItem items={items} />
        ) : (
          <ListItem items={items} />
        )}
      </div>
    </div>
  );
}
