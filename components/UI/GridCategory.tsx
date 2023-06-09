import Category from "@/models/Category";
import { useGetCategoriesQuery } from "@/redux/services/categoryApi";
import Link from "next/link";
import { useMemo } from "react";

export const GridCategory = () => {
  const { data }: any = useGetCategoriesQuery(null);
  const categories = useMemo(
    () =>
      data?.data?.map((category: any, index: number) => {
        const cat = new Category(category);
        return (
          <Link
            key={index}
            href={`category/${cat?.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="items-center break-words">
              <img
                src={`${cat?.imageUrl}?random=${index}`}
                alt={cat?.name}
                className="h-[60px] w-[100px] mx-5 rounded-md bg-cover bg-center zoomIn cursor-pointer"
              />
              <p>{cat?.name}</p>
            </div>
          </Link>
        );
      }),
    [data?.data]
  );
  return <div className="grid grid-cols-3 text-center">{categories}</div>;
};
