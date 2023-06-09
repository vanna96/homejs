"use client";

import {
  FacebookOutlined,
  GoogleOutlined,
  HomeOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  RightCircleOutlined,
  ShareAltOutlined,
  TwitterCircleFilled,
  TwitterOutlined,
  TwitterSquareFilled,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Carousel,
  Divider,
  Dropdown,
  Input,
  MenuProps,
} from "antd";
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
            {/* Breadcrumb */}
            <Breadcrumb
              className="movie"
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="/movie">Movie</a>,
                },
                {
                  title: "រឿងចិនព្យុះភ្លៀង កងសន្តិសុខ",
                },
              ]}
            />

            {/* detail page */}
            <div className="bg-black w-[100%] mt-6 h-[400px]"></div>
            <div className="bg-gray-200 h-[140px] overflow-y-scroll">
              <div className="grid grid-cols-6 text-center pt-2">
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  01
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  02
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  03
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  04
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  05
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  06
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  07
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  08
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  09
                </div>
                <div
                  className="m-1 cursor-pointer text-white h-[40px] rounded-sm flex items-center justify-center"
                  style={{ background: "rgb(51 51 51)" }}
                >
                  10
                </div>
              </div>
            </div>
            <div className="mt-4 space-x-2 text-right">
              <Button type="primary" icon={<GoogleOutlined />}></Button>
              <Button type="primary" icon={<FacebookOutlined />}></Button>
              <Button type="primary" icon={<TwitterOutlined />}></Button>
              <Button type="primary" icon={<ShareAltOutlined />}></Button>
            </div>
            <div className="my-4">
              Mon Sne Nary Akasachor, Khmer Movie, khmer drama, video4khmer,
              movie-khmer, Kolabkhmer, Phumikhmer, Khmotions, phumikhmer1,
              khmercitylove, sweetdrama, khreplay Watch Khmer movie and video
              online for free including Thai drama, Thai lakorn, Chinese drama,
              Korean drama, Khmer Movie, Video4Khmer Thai Drama , Movie Khmer
              China Drama., Thai Lakorn and Thai Drma Speak Thai., Kolabkhmer
              Korean Drama & Korean Movie Speak Khmer ,Khmer Movie Korean Movie
              And China Movie Speak Khmer , Khmer Movie, khmer drama,
              video4khmer, movie-khmer, kolab-khmer, kolab khmer, khmer-drama,
              ksdrama, khmerstation, cookingtips.best, roscheat, khmertimeskh,
              khmerkomsan, phumi7, merlkon, film2us, movie2kh, sweetdrama,
              khmercitylove, khreplay, tvb cambodia drama, ckh7, srokthai,
              phumimedia, phumi8, khmer avenue, khmer search, Soyo, khmerfans
              are top online web Entertainment in Cambodia The Centimeter of
              Love (2020) Doctor Xu Qing Feng of Yanxi Hospital and senior
              airline pilot Guan Yu Qing are both highly skilled and highly paid
              professionals who have to deal with a difficult home life. Their
              parents have unrealistic demands and put relentless pressure on
              them. Their way of escape is to work harder and longer hours so
              that they are away from home as much as possible. This all changed
              when they meet and fall in love. They realize then that they no
              longer have to face their problems as individuals but can tackle
              them together. This does not mean an easy journey to happiness as
              both families are against their relationship. Can their love and
              determination overcome the many obstacles placed before them?
            </div>
            <div
              className="bg-white mt-8"
              style={{
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, .075)",
              }}
            >
              <div className="font-semibold">
                អ្នកក៏អាចចូលចិត្តច្រើនទៀតពីអ្នកនិពន្ធ
              </div>
              <Divider
                className="bg-blue-200 mt-[10px]"
                style={{ width: "10%" }}
              ></Divider>
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

              <div className="text-center pb-10">
                <Button
                  loading={false}
                  type="primary"
                  //   onClick={enterLoading}
                  //   className="bg-pink-600 text-white top-1"
                  //   type="ghost"
                >
                  Load More
                </Button>
              </div>
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
