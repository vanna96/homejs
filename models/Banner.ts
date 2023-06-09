import { Banner as BannerInterface } from "@/interfaces/Banner";

export default class Banner implements BannerInterface {
  id: number;
  imageUrl: string;
  title: string;

  constructor(json: any) {
    this.id = json["id"];
    this.imageUrl = json["image_url"];
    this.title = json["title"];
  }
}
