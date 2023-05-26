import { CloseOutlined, HistoryOutlined, InfoCircleOutlined, LogoutOutlined, MessageOutlined, ShareAltOutlined, ShopOutlined, TranslationOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

export const DrawerMenu = ({
    open,
    onClose
}: {
    open: boolean;
    onClose: () => void;
}) => {
    return (
        <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            getContainer={false}
            bodyStyle={{ padding: 0 }}
            width={320}
        >
            <div className="text-left">
                <div className="bg-pink-600 h-[200px] relative text-center">
                    <CloseOutlined className="text-white text-xl cursor-pointer absolute right-1 top-2" onClick={onClose} />
                    <div className="absolute left-[30%] top-7">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height={85} width={85} alt="profile" className="mx-auto rounded-full"/>
                        <p className="text-white mb-1 font-semibold text-[16px]">POUNG Sovanna</p>
                        <p className="text-white mt-1">070 726 716</p>
                    </div>
                </div>
                <div className="mt-14 px-4 text-gray-500 text-[16px]">
                    <div className="space-x-4 my-6">
                        <TranslationOutlined className="text-2xl" /><span>English</span>
                    </div>
                    <div className="space-x-4 my-6">
                        <MessageOutlined className="text-2xl" /><span>Message</span>
                    </div>
                    <div className="space-x-4 my-6">
                        <ShopOutlined className="text-2xl" /><span>Stores</span>
                    </div>
                    <div className="space-x-4 my-6">
                        <HistoryOutlined className="text-2xl" /><span>Order History</span>
                    </div>
                    <div className="space-x-4 my-6 bottom-0">
                        <ShareAltOutlined className="text-2xl" /><span>Share</span>
                    </div>
                    <div className="space-x-4 my-6">
                        <InfoCircleOutlined className="text-2xl" /><span>About Us</span>
                    </div>
                    <div className="space-x-4 my-6">
                        <LogoutOutlined className="text-2xl" /><span>Logout</span>
                    </div>
                </div>
            </div>
        </Drawer>)
}
