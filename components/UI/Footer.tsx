import { FacebookFilled } from "@ant-design/icons"
import Image from 'next/image'

export const Footer = () => {
    return <div className="max-w-md z-50 w-full">
        <div className="bg-black text-center h-14 space-x-2">
            {/* <FacebookFilled className="text-white text-[30px] mt-[12px] cursor-pointer" /> */}

            <Image src="/icons8-facebook-500.svg" alt="me" width="35" height="35" className="mt-[13px]" />
            <Image src="/icons8-telegram-app (1).svg" alt="me" width="35" height="35" className="mt-[13px]" />
        </div>
        <div className="text-white p-1 text-center bg-pink-600">
            <p className="text-[16px]">© Copyright 2023.</p>
            <p className="text-[16px]">All rights reserved.</p>
        </div>
    </div>
}
