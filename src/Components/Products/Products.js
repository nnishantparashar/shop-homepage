import "./Products.css";
import Product from "../Product/Product";

const products = [
  {
    id: "1",
    img: "watch.png",
    productName: "Fancy Item",
    rating:"",
    price: [
      {
        original:'',
        discounted:'$40-$80'
      }
    ],
    offer: "",
    availability: "View Options",
  },
  {
    id: "2",
    img: "mobile.png",
    productName: "Special Item",
    rating:"5",
    price: [
      {
        original:'$20',
        discounted:'$18'
      }
    ],
    offer: "Sale",
    availability: "Add to Cart",
  },
  {
    id: "3",
    img: "watch.png",
    productName: "Sale Item",
    rating:"",
    price: [
      {
        original:'$50',
        discounted:'$25'
      }
    ],
    offer: "Sale",
    availability: "Add to Cart",
  },
  {
    id: "4",
    img: "mobile.png",
    productName: "Popular Item",
    rating:"5",
    price: [
      {
        original:'',
        discounted:'$40'
      }
    ],
    offer: "",
    availability: "Add to Cart",
  },
  {
    id: "5",
    img: "mobile.png",
    productName: "Sale Item",
    rating:"",
    price: [
      {
        original:'$50',
        discounted:'$25'
      }
    ],
    offer: "Sale",
    availability: "Add to Cart",
  },
  {
    id: "6",
    img: "watch.png",
    productName: "Fancy Item",
    rating:"5",
    price: [
      {
        original:'',
        discounted:'$120-$280'
      }
    ],
    offer: "",
    availability: "View Options",
  },
  {
    id: "7",
    img: "mobile.png",
    productName: "Special Item",
    rating:"",
    price: [
      {
        original:'$20',
        discounted:'$18'
      }
    ],
    offer: "Sale",
    availability: "Add to Cart",
  },
  {
    id: "8",
    img: "mobile.png",
    productName: "Popular Item",
    rating:"5",
    price: [
      {
        original:'',
        discounted:'$40'
      }
    ],
    offer: "",
    availability: "Add to Cart",
  },
];

const Products = () => {
  return (
    <div className="container">
    
      {
      products.map((product) => {
       
        return <Product product={product} />;
      })} 
    </div>
  );
};

export default Products;
