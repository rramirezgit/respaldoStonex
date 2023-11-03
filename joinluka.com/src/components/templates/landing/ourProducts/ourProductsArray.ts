import { CardInterface } from "./ourProducts.interface";
import image1 from "@/assets/ourProducts/image-1.svg";
import image2 from "@/assets/ourProducts/image-2.svg";
import image3 from "@/assets/ourProducts/image-3.svg";

const cardsArray: CardInterface[] = [
  {
    id: "vpos-box-id",
    idCard: "vpos-card-id",
    title: "Virtual Point of Sale",
    text: "Hardware-free point of sales that enables QR payments and contactless transactions. Scalable multi-device integration.",
    imageUrl: image3,
  },
  {
    id: "Paylink-box-id",
    idCard: "Paylink-card-id",
    title: "In&Out Payment Link",
    text: "B2B electronic pay-in and pay-out management system. Links are enabled through multiple messaging services.",
    imageUrl: image2,
  },
  {
    id: "gateway-box-id",
    idCard: "gateway-card-id",
    title: "Multi Currency Gateway",
    text: "B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.",
    imageUrl: image1,
  }
];

export default cardsArray;
