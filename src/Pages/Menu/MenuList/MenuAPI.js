import Burger1 from "./Image/3-1-450x450.png";
import Burger2 from "./Image/7-1-450x450.png";
import Burger3 from "./Image/h-1-480x480.jpg";
import Burger4 from "./Image/bdemo1-0927393382-1-238x238.jpg";
import Burger5 from "./Image/bdemo1-1000422914-1-238x238.jpg";
import Burger6 from "./Image/bdemo1-1009876767-1-238x238.jpg";
import Burger7 from "./Image/bdemo1-1053813868-1-238x238.jpg";
import Burger8 from "./Image/bbdemo1-0932796702-1-238x238.jpg";
import Burger9 from "./Image/bbdemo1-1058276634-1-238x238.jpg";

import Juice1 from "./Image/52-1-450x450.png";
import Juice2 from "./Image/54.1-450x450.png";
import Juice3 from "./Image/demo1-1050681807-1-238x238.jpg";
import Juice4 from "./Image/demo1-1050786752-1-238x238.jpg";
import Juice5 from "./Image/demo1-1050812597-1-238x238.jpg";
import Juice6 from "./Image/demo1-1050814060-1-238x238.jpg";

import Pizza1 from "./Image/p1-480x480.jpg";
import Pizza2 from "./Image/p2-480x480.jpg";
import Pizza3 from "./Image/p10-480x480.jpg";
import Pizza4 from "./Image/p3-480x480.jpg";
import Pizza5 from "./Image/p4-480x480.jpg";

import Soups1 from "./Image/o1-480x480.jpg";
import Soups2 from "./Image/o2-480x480.jpg";
import Soups3 from "./Image/o3-480x480.jpg";

const MenuAPI = [
  {
    id: 1,
    image: Pizza1,
    name: "Fantastic Iron Shoes",
    category: "pizza",
    price: "$18.80",
    description:
      "Rerum quisquam dolore repellat nihil. Quia quas quia et optio. Dignissimos qui voluptatem et enim corporis nemo. Id laudantium autem est quo aut...",
  },
  {
    id: 2,
    image: Burger3,
    name: "Rustic Linen Chair",
    category: "burger",
    price: "$15.20",
    description:
      "Veritatis natus numquam voluptatem voluptas animi quia officia. Asperiores ipsam sequi consequuntur tempora corrupti tempora vero.",
  },
  {
    id: 3,
    image: Pizza3,
    name: "Sleek Iron Clock",
    category: "pizza",
    price: "$13.80",
    description:
      "Qui ut neque et minima qui incidunt. Velit et provident ex itaque. Perferendis quasi ducimus et at.",
  },
  {
    id: 4,
    image: Juice1,
    name: "Tropicana Juice",
    category: "drinks",
    price: "$11.90",
    description:
      "View great tasting Tropicana Orange Juice and Juice Drink Products. Featuring Tropicana Orange Juice",
  },
  {
    id: 5,
    image: Burger4,
    name: "Angus burger",
    category: "burger",
    price: "$80.50",
    description: "A hamburger made using beef from Angus cattle.",
  },
  {
    id: 6,
    image: Pizza2,
    name: "Gorgeous Slik Plate",
    category: "pizza",
    price: "$26.10",
    description:
      "Totam quam commodi explicabo omnis omnis. Necessitatibus aliquam dolore dolores et eos dolor qui. Esse consequatur reiciendis qui ad.",
  },
  {
    id: 7,
    image: Juice2,
    name: "Water Bottle",
    category: "drinks",
    price: "$3.50",
    description:
      "Investing in a reusable water bottle that you can refill throughout the day. Carrying one…",
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
      "Atque odio inventore et. Quibusdam exercitationem provident rerum aut quia. Qui quaerat numquam quis quisquam. Aut aut dignissimos consequuntur",
  },
  {
    id: 10,
    image: Soups3,
    name: "Lightweight Steel Bench",
    category: "soups",
    price: "$6.50",
    description:
      "Lorem ipsu dolor sit amet, and me to consectetur adipisicing elit. Dol, esse. and  consectetur.",
  },
  {
    id: 11,
    image: Burger6,
    name: "Bacon cheeseburger",
    category: "burger",
    price: "$5.50",
    description: "Hamburger with bacon and cheese",
  },
  {
    id: 12,
    image: Pizza4,
    name: "Fantastic Marble Bag",
    category: "pizza",
    price: "$6.50",
    description:
      "Est eius aperiam id eveniet quidem. Quas ad minus officiis magnam. Architecto et sit quo. Quos fugit asperiores aperiam consequuntur.",
  },

  {
    id: 13,
    image: Burger9,
    name: "Double slugburger",
    category: "burger",
    price: "$14.50",
    description:
      "Served on a bun with mustard, pickles, onion, and French fries",
  },
  {
    id: 14,
    image: Juice6,
    name: "Melon smoothie",
    category: "drinks",
    price: "$4.30",
    description: "Hurtleberry, almond milk, chia seeds",
  },
  {
    id: 15,
    image: Burger7,
    name: "Buffalo burger",
    category: "burger",
    price: "$12.80",
    description: "Buffalo burgers have less cholesterol and less fat",
  },
  {
    id: 16,
    image: Juice5,
    name: "Hurtleberry smoothie",
    category: "drinks",
    price: "$5.80",
    description: "Hurtleberry, almond milk, chia seeds",
  },
  {
    id: 17,
    image: Burger8,
    name: "Double Buffalo burger",
    category: "burger",
    price: "$9.50",
    description: "Buffalo burgers have less cholesterol and less fat",
  },
  {
    id: 18,
    image: Soups2,
    name: "Aerodynamic Paper Gloves",
    category: "soups",
    price: "$30.50",
    description:
      "Lorem ipsu dolor sit amet, and me to consectetur adipisicing elit. Dol, esse. and  consectetur.",
  },
  {
    id: 19,
    image: Juice4,
    name: "Blueberry smoothie",
    category: "drinks",
    price: "$7.00",
    description: "Blackberry, almond milk, chia seeds",
  },
  {
    id: 20,
    image: Pizza5,
    name: "Small Cotton Plate",
    category: "pizza",
    price: "$11.50",
    description:
      "Lorem ipsu dolor sit amet, and me to consectetur adipisicing elit. Dol, esse. and  consectetur.",
  },
  {
    id: 21,
    image: Juice3,
    name: "Blackberry smoothie",
    category: "drinks",
    price: "$5.30",
    description: "Blackberry, almond milk, chia seeds",
  },
  {
    id: 22,
    image: Burger2,
    name: "Cheese Burger",
    category: "burger",
    price: "$5.20",
    description:
      "A mighty meaty double helping of all the reasons you love our burger.",
  },
  {
    id: 23,
    image: Burger1,
    name: "Bacon Burger",
    category: "burger",
    price: "$6.00",
    description:
      "A mighty meaty double helping of all the reasons you love our burger.",
  },
];

export default MenuAPI;
