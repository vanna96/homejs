import { CardItem } from "./CardItem"

export const GridItem = ({ items }: any) => {
    return <>
        <div className="grid grid-cols-2">
            {items?.map((item: any, index:number) => <CardItem key={index} item={item}></CardItem>)}
        </div>
    </>
}
