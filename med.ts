import { Category } from "./category";

export class Medicine{
    medicineId:string;
    medicineName:string;
    medicineCost:number;
    mfd:Date;
    expiryDate:Date;
    companyName:string;
    category:Category;
}