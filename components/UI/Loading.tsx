"use client";

import { Spin } from "antd";

export const LoadingSkeleton = () => {
  return (
    <>
      <Spin
        className="mt-[40vh] mx-auto w-[100%]"
        tip="Loading..."
        size="large"
        style={{
          background: "red",
          color: "gray",
          
        }}
      >
        <div className="content" />
      </Spin>
    </>
  );
};
