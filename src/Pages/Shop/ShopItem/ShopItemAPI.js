import Burger1 from "./Image/3-1-450x450.png";
import Burger2 from "./Image/7-1-450x450.png";
import Burger3 from "./Image/h-1-480x480.jpg";
import Burger4 from "./Image/1-0927393382-1-238x238.jpg";
import Burger5 from "./Image/1-1000422914-1-238x238.jpg";
import Burger6 from "./Image/1-1009876767-1-238x238.jpg";
import Burger7 from "./Image/1-1053813868-1-238x238.jpg";
import Burger8 from "./Image/1-0932796702-1-238x238.jpg";
import Burger9 from "./Image/1-1058276634-1-238x238.jpg";

import Juice1 from "./Image/52-1-450x450.png";
import Juice2 from "./Image/54.1-450x450.png";
import Juice3 from "./Image/1-1050681807-1-238x238.jpg";
import Juice4 from "./Image/1-1050786752-1-238x238.jpg";
import Juice5 from "./Image/1-1050812597-1-238x238.jpg";
import Juice6 from "./Image/1-1050814060-1-238x238.jpg";

import Pizza1 from "./Image/p1-480x480.jpg";
import Pizza2 from "./Image/p2-480x480.jpg";
import Pizza3 from "./Image/p10-480x480.jpg";
import Pizza4 from "./Image/p3-480x480.jpg";
import Pizza5 from "./Image/p4-480x480.jpg";

import Soups1 from "./Image/o1-480x480.jpg";
import Soups2 from "./Image/o2-480x480.jpg";
import Soups3 from "./Image/o3-480x480.jpg";

const ShopItemAPI = [
  {
    id: 1,
    image: Pizza1,
    name: "Fantastic Iron Shoes",
    category: "pizza",
    price: "$18.80",
    description:
      "It has survived not only five centuries, and more recently with desktop publishing software PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    image: Burger3,
    name: "Rustic Linen Chair",
    category: "burger",
    price: "$15.20",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 3,
    image: Pizza3,
    name: "Sleek Iron Clock",
    category: "pizza",
    price: "$13.80",
    description:
      "Centuries not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 4,
    image: Juice1,
    name: "Tropicana Juice",
    category: "drinks",
    price: "$11.90",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 5,
    image: Burger4,
    name: "Angus burger",
    category: "burger",
    price: "$80.50",
    description:
      "ASurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 6,
    image: Pizza2,
    name: "Gorgeous Slick Plate",
    category: "pizza",
    price: "$26.10",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 7,
    image: Juice2,
    name: "Water Bottle",
    category: "drinks",
    price: "$3.50",
    description:
      "Investing Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 8,
    image: Burger5,
    name: "Aussie Burger",
    category: "burger",
    price: "$15.00",
    description: "Popular regional hamburger ingredients in Australia",
  },
  {
    id: 9,
    image: Soups1,
    name: "Ergonomic Linen Gloves",
    category: "soups",
    price: "$50.50",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 10,
    image: Soups3,
    name: "Lightweight Steel Bench",
    category: "soups",
    price: "$6.50",
    description:
      "Lorem Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 11,
    image: Burger6,
    name: "Bacon cheeseburger",
    category: "burger",
    price: "$5.50",
    description:
      "HamburgerSurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 12,
    image: Pizza4,
    name: "Fantastic Marble Bag",
    category: "pizza",
    price: "$6.50",
    description:
      "EstSurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },

  {
    id: 13,
    image: Burger9,
    name: "Double slug Burger",
    category: "burger",
    price: "$14.50",
    description:
      "Served Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 14,
    image: Juice6,
    name: "Melon smoothie",
    category: "drinks",
    price: "$4.30",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 15,
    image: Burger7,
    name: "Buffalo burger",
    category: "burger",
    price: "$12.80",
    description:
      "Buffalo Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 16,
    image: Juice5,
    name: "Hurt smoothie",
    category: "drinks",
    price: "$5.80",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 17,
    image: Burger8,
    name: "Double Buffalo burger",
    category: "burger",
    price: "$9.50",
    description:
      "Buffalo Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 18,
    image: Soups2,
    name: "Aerodynamic Paper Gloves",
    category: "soups",
    price: "$30.50",
    description:
      "Lorem Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 19,
    image: Juice4,
    name: "Blueberry smoothie",
    category: "drinks",
    price: "$7.00",
    description:
      "Blackberry Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 20,
    image: Pizza5,
    name: "Small Cotton Plate",
    category: "pizza",
    price: "$11.50",
    description:
      "Lorem Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 21,
    image: Juice3,
    name: "Blackberry smoothie",
    category: "drinks",
    price: "$5.30",
    description:
      "Blackberry Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 22,
    image: Burger2,
    name: "Cheese Burger",
    category: "burger",
    price: "$5.20",
    description:
      "A Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
  {
    id: 23,
    image: Burger1,
    name: "Bacon Burger",
    category: "burger",
    price: "$6.00",
    description:
      "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Containing Lorem Ipsum passages.",
  },
];

export default ShopItemAPI;
