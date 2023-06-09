import Category from "@/models/Category";
import { IRepository } from "./interface";

export default class CategoryRepository implements IRepository<Category> {
  async get(query?: any): Promise<Category[] | null> {
    try {
      return null;
    } catch (e) {
      throw Error(`Error in CategoryRepository calling get: ${e}`);
    }
  }
}
