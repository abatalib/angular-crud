import {CategoryModel} from "./category.model";

export class ProductModel{
  public id!: number;
  public name!: string;
  public type!: string;
  public price!: number;
  public category!: CategoryModel[];
  public shipping!: number;
  public description!: string;
  public manufacturer!: string;
  public image!: string;
}
