import { RightCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

export const MenuBar = ({ label, url }: {
    label?: string;
    url?: string;
}) => {
    const goTo = () => {
        alert();
    }
    return <>
        <div className="flex justify-between items-center">
            <h3>{label?.toLocaleUpperCase()}</h3>
            {url ? <Link href={url} style={{ textDecoration: 'none', color: "black" }}>
                <p className="cursor-pointer text-blue-600">SEE ALL <RightCircleOutlined /></p>
                </Link> : ""}
        </div>
    </>
}
