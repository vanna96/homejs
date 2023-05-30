import {
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import Link from "next/link";

export const CartButton = () => {
  return (
    <Link href="/cart">
      <div className="flex justify-end relative">
        <div className="float-button">
          <span className="absolute w-[20px] h-[16px] bg-pink-600 rounded-full text-[10px] text-white flex justify-center items-center top-[-4px] right-[1.5px]">
            99
          </span>
          <ShoppingOutlined className="text-pink-600 text-[23px]" />
        </div>
      </div>
    </Link>
  );
  return (
    <div className="flex relative justify-end">
      <div className="float-button">
        <FloatButton.Group
          trigger="hover"
          style={{ right: 0 }}
          icon={<QuestionCircleOutlined />}
        >
          <FloatButton icon={<ShoppingOutlined />} />
          <FloatButton icon={<ShoppingCartOutlined />} />
        </FloatButton.Group>
      </div>
    </div>
  );
};
