import React, { useMemo } from "react";
import { Carousel } from "antd";
import { useGetBannersQuery } from "@/redux/services/bannerApi";
import Banner from "@/models/Banner";

export const CarouselSlider = () => {
  const { data }: any = useGetBannersQuery(null);
  const banners = useMemo(
    () =>
      data?.data?.map((banner: any, index: number) => {
        const bn = new Banner(banner);
        return (
          <div key={index}>
            <h3
              style={{
                height: "160px",
                lineHeight: "160px",
                // textAlign: 'center',
                backgroundImage: `url('${bn?.imageUrl}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "5px",
              }}
            >
              {/* <div className='text-white relative top-[-50px] left-[-100px]'>
                    ada
                </div> */}
            </h3>
          </div>
        );
      }),
    [data?.data]
  );

  return (
    <div className="mt-6 relative z-0">
      <Carousel dots={true} dotPosition="bottom" slickGoTo={2}>
        {banners}
      </Carousel>
    </div>
  );
};
