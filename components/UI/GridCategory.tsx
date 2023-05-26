import Link from "next/link";

export const GridCategory = () => {
    const categories: any = [
        {
            id: 1,
            name: "Drink & Dessert",
            imageUrl: "https://s3-ap-southeast-1.amazonaws.com/foodcourt-production-bucket/upload/category/1681699808.jpg"
        },
        {
            id: 2,
            name: "Coffee",
            imageUrl: "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg"
        },
        {
            id: 3,
            name: "Khmer Food",
            imageUrl: "https://www.siemreap.net/wp-content/uploads/2018/08/Best-Khmer-Restaurants-in-Siem-Reap-Malis-Siemreapnet.jpg"
        },
        {
            id: 4,
            name: "Roasteserie Chicken & Chinese Food",
            imageUrl: "https://s3-ap-southeast-1.amazonaws.com/foodcourt-production-bucket/upload/category/1679974320.jpg"
        }
    ];

    return <div className="grid grid-cols-3 text-center">
        {categories?.map((category: any, index: number) => {
            return <Link key={index} href={`category/${category?.id}`} style={{ textDecoration: 'none', color: "black" }}>
                <div className="items-center break-words" >
                    <img src={category?.imageUrl} alt={category?.name} className="h-[60px] w-[100px] mx-5 rounded-md bg-cover bg-center zoomIn cursor-pointer" />
                    <p>{category?.name}</p>
                </div>
            </Link>
        })}
    </div>;
}
