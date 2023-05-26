import { HeartFilled, PlusOutlined, StarFilled } from "@ant-design/icons"
import Link from "next/link"

export const CardItem = ({ item }: { item?: any }) => {
    return <Link href={`item/${item?.id}`} style={{ textDecoration: 'none', color: "black" }}>
        <div className="mx-1 h-42 rounded-md text-left mb-4 relative">
            <div className="zoomIn">
                {item?.badge ? <div className="bg-pink-600 absolute p-1 top-2 text-white rounded-tr-md rounded-br-md text-[12px] cursor-pointer">{item?.badge}</div> : ""}
                <HeartFilled className="absolute right-0 top-0 text-white cursor-pointer text-[25px]" onClick={(e) => {
                    e.preventDefault();
                    alert()
                }} />
                <div className="bg-pink-600 absolute top-[98px] right-[0px] rounded-tl-md rounded-br-md text-white h-[30px] w-[30px]  flex justify-center items-center cursor-pointer overflow-hidden">
                    <PlusOutlined onClick={(e) => {
                        e.preventDefault();
                        alert()
                    }} />
                </div>
                <img src={item?.imgUrl} className="h-32 w-full bg-cover bg-center rounded-md cursor-pointer" />
            </div>
            <div className="grid grid-cols-4 items-center relative text-sm">
                <div className="truncate mt-2 mb-1 cursor-pointer col-span-3">{item?.name}</div>
                <div className={item?.rate ? "" : "hidden"}>
                    <StarFilled className="absolute top-[10px] right-[30px]" />
                    <div className="absolute top-[8px] right-0">{item?.rate}</div>
                </div>
            </div>
            {item?.promotion ? <>
                <del className="text-red-500">
                    <span className="cursor-pointer">{item?.price}</span>
                </del> {" "}
                <span className="text-gray-500 cursor-pointer">{item?.promotion}</span>
            </> : <span className="text-gray-500 cursor-pointer">{item?.price}</span>}
        </div></Link>
}
