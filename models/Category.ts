import { Category as CategoryInterface } from "@/interfaces/Category";

export default class Category implements CategoryInterface {
  id: number;
  imageUrl: string;
  name: string;
  khName: string;
  chName: string;

  constructor(json: any) {
    this.id = json["id"];
    this.imageUrl = json["image_url"];
    this.name = json["name"];
    this.khName = json["kh_name"];
    this.chName = json["ch_name"];
  }
}
