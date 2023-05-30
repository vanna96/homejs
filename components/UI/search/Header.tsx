import { LeftOutlined } from "@ant-design/icons";
import { Affix, Button, Input } from "antd";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <Affix>
      <div className="flex bg-pink-600 items-center py-2 w-full max-w-md mx-auto">
        <div className="w-[15%] items-center">
          <Button
            type="ghost"
            onClick={() => router.back()}
            className="w-[30px] h-[39px] ml-2 rounded-lg"
            icon={<LeftOutlined style={{ color: "white", fontSize: "26px" }} />}
          />
        </div>
        <div className="w-[90%]">
          <Input placeholder="🔍 Search here" className="w-[95%] h-10 z-50" />
        </div>
        {/* <div className="w-[15%] text-center">
          <FilterOutlined style={{ color: "white", fontSize: "30px" }} />
        </div> */}
      </div>
    </Affix>
  );
};
