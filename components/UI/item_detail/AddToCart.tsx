import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Affix, Button } from "antd"

export const AddToCart = () => {
    return <Affix style={{ position: 'fixed', bottom: 0, width: "100%" }}>
        <div className="flex max-w-md text-center h-[65px] items-center" style={{ background: "#f1f1f1" }}>
            <div className="w-[30%]">
                <div className="flex justify-around items-center">
                    <Button className="bg-white" type="ghost" shape="circle" icon={<MinusOutlined className="text-red-500" />} />
                    1
                    <Button className="bg-white" type="ghost" shape="circle" icon={<PlusOutlined className="text-blue-500" />} />
                </div>
            </div>
            <div className="w-[70%] mx-3 cursor-pointer">
                <div className="bg-pink-600 rounded-md py-3 text-white">
                    <b>Add To Cart</b>
                </div>
            </div>
        </div>
    </Affix>
}
