"use client";

import {
  AlignLeftOutlined,
  BellOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Affix, Input } from "antd";
import { DrawerMenu } from "./DrawerMenu";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <div className="h-[100px] text-center">
      <Affix>
        <div>
          <DrawerMenu open={open} onClose={onClose} />
          <div className="bg-pink-600 h-[80px] relative z-50">
            <div className="flex items-center px-4 text-white text-[18px] justify-between">
              <div className="flex items-center space-x-4">
                <AlignLeftOutlined
                  className="cursor-pointer"
                  onClick={onOpen}
                />
                <p>Shop</p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/favorite"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <HeartOutlined className="cursor-pointer text-[18px]" />
                </Link>
                {/* <UserOutlined className="cursor-pointer text-[20px]" /> */}
                <BellOutlined className="cursor-pointer text-[20px]" />
              </div>
            </div>
            <Link href="/search">
              <Input
                placeholder="🔍 Search here"
                className="w-[90%] h-10 z-50"
                readOnly={true}
              />
            </Link>
          </div>
        </div>
      </Affix>
    </div>
  );
};
