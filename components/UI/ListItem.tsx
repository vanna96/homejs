import { HeartFilled, PlusOutlined, StarFilled } from "@ant-design/icons";
import Link from "next/link";

export const ListItem = ({ items }: any) => {
  return (
    <>
      <div className="grid grid-cols-1">
        {items?.map((item: any, index: number) => (
          <CardItem key={index} item={item}></CardItem>
        ))}
      </div>
    </>
  );
};

const CardItem = ({ item }: { item?: any }) => {
  return (
    <Link
      href={`item/${item?.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="mx-1 h-42 rounded-md text-left mb-10 relative">
        <div className="zoomIsn">
          {item?.badge ? (
            <div className="bg-pink-600 absolute p-1 top-2 text-white rounded-tr-md rounded-br-md text-[12px] cursor-pointer">
              {item?.badge}
            </div>
          ) : (
            ""
          )}
          <HeartFilled
            className="absolute right-0 top-0 text-white cursor-pointer text-[25px]"
            onClick={(e) => {
              e.preventDefault();
              alert();
            }}
          />
          <div className="bg-pink-600 absolute bottom-[85.5px] right-[0px] rounded-tl-md rounded-br-md text-white h-[30px] w-[30px]  flex justify-center items-center cursor-pointer overflow-hidden">
            <PlusOutlined
              onClick={(e) => {
                e.preventDefault();
                alert();
              }}
            />
          </div>
          <img
            src={item?.imgUrl}
            className="h-40 w-full bg-cover bg-center rounded-md cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-4 items-center truncate mt-2 mb-[5px] cursor-pointer col-span-3">
          {item?.name}
          {/* <div className="truncate mt-2 mb-1 cursor-pointer col-span-3">
            {item?.name}
          </div> */}
        </div>
        <div className="flex items-center space-x-1 mb-[5px]">
          <StarFilled/>
          <div>{item?.rate || "0.0"}</div>
        </div>
        {item?.promotion ? (
          <>
            <del className="text-red-500">
              <span className="cursor-pointer">{item?.price}</span>
            </del>{" "}
            <span className="text-gray-500 cursor-pointer">
              {item?.promotion}
            </span>
          </>
        ) : (
          <span className="text-gray-500 cursor-pointer">{item?.price}</span>
        )}
      </div>
    </Link>
  );
};
