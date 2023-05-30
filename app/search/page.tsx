"use client";
import { GridItem } from "@/components/UI/GridItem";
import { Header } from "@/components/UI/search/Header";
import { DownOutlined, FilterFilled, LeftOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Tag } from "antd";
import type { MenuProps } from "antd";

export default function Search() {
  const categories: any = [
    {
      id: 1,
      name: "Drink & Dessert",
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/foodcourt-production-bucket/upload/category/1681699808.jpg",
    },
    {
      id: 2,
      name: "Coffee",
      imageUrl:
        "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg",
    },
    {
      id: 3,
      name: "Khmer Food",
      imageUrl:
        "https://www.siemreap.net/wp-content/uploads/2018/08/Best-Khmer-Restaurants-in-Siem-Reap-Malis-Siemreapnet.jpg",
    },
    {
      id: 4,
      name: "Roasteserie Chicken & Chinese Food",
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/foodcourt-production-bucket/upload/category/1679974320.jpg",
    },
  ];

  const itemss = [
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

  const tagCategories = categories?.map(({ name }: any, index: number) => (
    <Tag key={index} className="text-[16px] h-[30px] pt-[3px]">
      {name}
    </Tag>
  ));

  const items: MenuProps["items"] = [
    {
      label: "Best Selling",
      key: "1",
    },
    {
      label: "Name A-Z",
      key: "2",
    },
    {
      label: "Name Z-A",
      key: "3",
    },
    {
      label: "Rating",
      key: "4",
    },
    {
      label: "Newest",
      key: "5",
    },
  ];

  return (
    <div>
      <title>Search</title>
      <Header />
      <div className="max-w-md mx-auto">
        <div className="mx-4 mt-8">
          <Space size={[4, 10]} wrap>
            {tagCategories}
          </Space>
          <h3>Results(12)</h3>
          <div className="mb-4">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Button
                  type="ghost"
                  className="bg-white"
                  icon={<FilterFilled />}
                >
                  Sort
                </Button>
              </a>
            </Dropdown>
          </div>
          <GridItem items={itemss} />
        </div>
      </div>
    </div>
  );
}
