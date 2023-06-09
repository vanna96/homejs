"use client";

import { Header } from "@/components/UI/Header";
import { CarouselSlider } from "@/components/UI/CarouselSlider";
import { GridCategory } from "@/components/UI/GridCategory";
import { MenuBar } from "@/components/UI/Menu";
import { CarouselItems } from "@/components/UI/CarouselItems";
import { GridItem } from "@/components/UI/GridItem";
import { Footer } from "@/components/UI/Footer";
import { Button } from "antd";
import { useMemo, useState } from "react";
import { CartButton } from "@/components/UI/FloatButton";
import ClientOnly from "@/components/ClientOnly";
import Link from "next/link";
import { useGetIncomingsQuery } from "@/redux/services/incomingApi";
import { useGetBestSellsQuery } from "@/redux/services/bestSellingApi";
import { useGetItemsQuery } from "@/redux/services/itemApi";

const containerStyle: React.CSSProperties = {
  background: "white",
  position: "relative",
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
};

export default function Home() {
  const { data: newComming }: any = useGetIncomingsQuery(null);
  const { data: bestSelling }: any = useGetBestSellsQuery(null);
  const { data: items }: any = useGetItemsQuery(null);

  const [loading, setLoading] = useState(false);
  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 6000);
  };

  const dataIncomming = useMemo(
    () => <CarouselItems items={newComming?.data} />,
    [newComming?.data]
  );
  const dataBestSelling = useMemo(
    () => <CarouselItems items={bestSelling?.data} />,
    [bestSelling?.data]
  );
  const dataItem = useMemo(
    () => <GridItem items={items?.data} />,
    [items?.data]
  );

  return (
    <ClientOnly>
      <div className="max-w-md mx-auto" style={containerStyle}>
        <title>Home</title>
        <Header />
        <div className="mx-4 pb-10">
          <CarouselSlider />
          <MenuBar label="Category" />
          <GridCategory />
          <MenuBar label="New Coming" url="item/new-coming" />
          {dataIncomming}
          <MenuBar label="Best Selling" url="item/best-selling" />
          {dataBestSelling}
          <MenuBar label="Items" />
          {dataItem}
          <Link href="/item">
            <div className="text-center">
              <Button
                loading={loading}
                onClick={enterLoading}
                className="bg-pink-600 text-white top-1"
                type="ghost"
              >
                {" "}
                Load More{" "}
              </Button>
            </div>
          </Link>
          <CartButton />
        </div>
        <Footer />
      </div>
    </ClientOnly>
  );
}
