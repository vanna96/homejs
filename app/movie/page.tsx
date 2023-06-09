"use client";

import {
  FacebookOutlined,
  HomeOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  RightCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Divider, Dropdown, Input, MenuProps } from "antd";
import Link from "next/link";

const { Search } = Input;

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <RightCircleOutlined />,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Khmer
      </a>
    ),
  },
  {
    key: "2",
    icon: <RightCircleOutlined />,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Chinese
      </a>
    ),
  },
  {
    key: "3",
    icon: <RightCircleOutlined />,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Thai
      </a>
    ),
  },
  {
    key: "3",
    icon: <RightCircleOutlined />,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Korean
      </a>
    ),
  },
];

export default function Movie() {
  const movies = [
    {
      id: 1,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
    {
      id: 2,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11775.jpg",
      title: "ព្យុះភ្លៀង កងសន្តិសុខ",
      en_title: "ព្យុះភ្លៀង កងសន្តិសុខ",
    },
    {
      id: 3,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11879.jpg",
      title: "កំពូលអ្នកជិតខាង",
      en_title: "កំពូលអ្នកជិតខាង",
    },
    {
      id: 4,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
    {
      id: 5,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
    {
      id: 6,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
    {
      id: 7,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
    {
      id: 8,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
  ];

  const favorites = [
    {
      id: 1,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11873.jpg",
      title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
      en_title: "ជើងខ្លាំង ក្នុងពិភពគុណ",
    },
    {
      id: 2,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11775.jpg",
      title: "ព្យុះភ្លៀង កងសន្តិសុខ",
      en_title: "ព្យុះភ្លៀង កងសន្តិសុខ",
    },
    {
      id: 3,
      imgUrl: "https://www.video4khmer37.com/images/subcat/2673/11879.jpg",
      title: "កំពូលអ្នកជិតខាង",
      en_title: "កំពូលអ្នកជិតខាង",
    },
  ];
  return (
    <div>
      <div className={`bg-white min-h-[100vh] max-w-6xl mx-auto mt-5 movie`}>
        <div
          className="grid grid-cols-10 bg-white h-[80px] items-center mb-16"
          style={{ background: "#333" }}
        >
          <div className="col-span-4 items-center text-center ">
            <img
              src="https://www.khmer4khmer.com/wp-content/uploads/2023/01/Logo-Khmer4Khmer.png"
              alt="home logo"
              className="max-h-[54px]"
            />
          </div>
          <div className="col-span-6 flex space-x-6 uppercase items-center text-white">
            <h5 className="cursor-pointer">
              <HomeOutlined /> Home
            </h5>
            <h5 className="cursor-pointer">
              <Dropdown menu={{ items }} placement="bottomLeft">
                <div>
                  <PlayCircleOutlined /> Drama Movie
                </div>
              </Dropdown>
            </h5>
            <h5 className="cursor-pointer">
              <PlayCircleOutlined /> Continuing
            </h5>
            <h5 className="cursor-pointer">
              <PlayCircleOutlined /> Completed
            </h5>
            <h5 className="cursor-pointer">
              <PlayCircleOutlined /> Hollywood
            </h5>
          </div>
        </div>
        <div className="grid grid-cols-10 mx-10">
          <div className="col-span-7">
            <div className="grid grid-cols-3">
              {movies?.map((movie, index: number) => (
                <div
                  key={index}
                  className="h-[250px] mx-3 mb-10 overflow-hidden cursor-pointer relative rounded-md card-image"
                  style={{
                    boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, .075)",
                  }}
                >
                  <Link
                    href={`/movie/${movie?.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="absolute bg-gray-500 text-white right-0 rounded-sm p-[2px]">
                      Ep 12
                    </div>
                    <div className="absolute bg-red-500 text-white rounded-sm p-[2px]">
                      រឿងចិន
                    </div>
                    <div className="overlay">
                      <PlayCircleFilled
                        style={{
                          color: "white",
                          fontSize: "40px",
                          position: "absolute",
                          top: "40%",
                          left: "40%",
                        }}
                      />
                    </div>
                    <img
                      src={movie?.imgUrl}
                      alt={movie?.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="font-semibold text-[16px] mt-1 ml-2">
                      {movie?.title}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                // loading={loading}
                // onClick={enterLoading}
                className="top-1"
              >
                {" "}
                Load More{" "}
              </Button>
            </div>
          </div>
          <div className="col-span-3">
            <div
              className="bg-white mx-4 px-4 pb-6"
              style={{
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, .075)",
              }}
            >
              <Search
                placeholder="Search"
                className="mt-6 mb-10"
                allowClear
                enterButton="Search"
                size="middle"
              />
              <div className="font-semibold">
                <VideoCameraOutlined style={{ fontSize: "22px" }} />{" "}
                រឿងកំពុងពេញនិយម
              </div>
              <Divider
                className="bg-blue-200 mt-[10px]"
                style={{ width: "10%" }}
              ></Divider>
              <Carousel
                dots={false}
                dotPosition="bottom"
                className="relative text-center"
                slickGoTo={2}
                autoplay={true}
                infinite={true}
                swipeToSlide={true}
              >
                {favorites?.map((favorite: any, index: number) => (
                  <div
                    key={index}
                    className="h-[220px] !w-[90%] cursor-pointer"
                  >
                    <div className="absolute bg-gray-500 text-white bottom-10 rounded-sm p-[2px] movie">
                      Ep 12
                    </div>
                    <div className="absolute bg-red-500 text-white rounded-sm p-[2px] movie">
                      រឿងចិន
                    </div>
                    <img
                      src={favorite?.imgUrl}
                      alt=""
                      className="w-[100%] h-[180px] bg-cover"
                    />
                    <div className="absolute bottom-[10px] font-semibold movie">
                      {favorite?.title}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div
              className="mx-4 px-4 mt-8 overflow-hidden"
              style={{
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, .075)",
              }}
            >
              <div className="font-semibold">
                <FacebookOutlined
                  style={{ fontSize: "22px", marginTop: "24px" }}
                />{" "}
                ចូលរួមតាមតេលេក្រាម
              </div>
              <Divider
                className="bg-blue-200 mt-[10px] mb-6"
                style={{ width: "10%" }}
              ></Divider>
              <img
                className="img-fluid w-full"
                src="https://www.video4khmer37.com/templates/angkor/images/all/v4k-TG-300x300.png"
              ></img>
            </div>
            <div
              className="mx-4 px-4 mt-8 h-[100px] mb-6"
              style={{
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, .075)",
              }}
            >
              <div className="font-semibold mt-[30px]">
                <FacebookOutlined
                  style={{ fontSize: "22px", marginTop: "24px" }}
                />{" "}
                ហ្វេសប៊ុកផេក
              </div>
              <Divider
                className="bg-blue-200 mt-[10px] mb-14"
                style={{ width: "10%" }}
              ></Divider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
