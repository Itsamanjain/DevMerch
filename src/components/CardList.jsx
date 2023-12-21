import React from "react";
import Card from "./Card";

// Import images directly
import Image1 from "../assets/tshirts/Declare-Variables-not-War-Navy-500x600.jpg";
import Image2 from "../assets/tshirts/geek-500x600.jpg";
import Image3 from "../assets/tshirts/git-hub-500x600.jpg";
import Image4 from "../assets/tshirts/idk-google-it-500x600.jpg";
import Image5 from "../assets/tshirts/IDK-Google-it-Navy-500x600.jpg";
import Image6 from "../assets/tshirts/Python-Black-500x600.jpg";
import Image7 from "../assets/tshirts/Python-Greater-then-Java-Navy-500x600.jpg";
import Image8 from "../assets/tshirts/There-is-No-Place-Like-Navy-500x600.jpg";
import Image9 from "../assets/tshirts/Things-I-Hate-Half-Sleeve-Bottle-Green-500x600.jpg";

const CardList = () => {
  const cardsData = [
    {
      imagePath: Image1,
      title: "Declare Variables not War",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image2,
      title: "Geek",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image3,
      title: "GitHub",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image4,
      title: "IDK Google It",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image5,
      title: "IDK Google It Navy",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image6,
      title: "Python Black",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image7,
      title: "Python Greater than Java Navy",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image8,
      title: "There is No Place Like Navy",
      originalPrice: 799,
      discountedPrice: 499,
    },
    {
      imagePath: Image9,
      title: "Things I Hate Half Sleeve Bottle Green",
      originalPrice: 799,
      discountedPrice: 499,
    },
  ];

  return (
    <>
    <div id="tshirts" className="text-center mb-4 relative">
      <h2 className="text-3xl font-bold inline-block">T-shirts For Developers</h2>
      <span className="block mx-auto mt-2 bg-yellow-500 h-1 rounded-full  w-16"></span>
    </div>
    <div className="flex flex-wrap justify-center md:flex-row md:max-w-3xl mx-auto">
      {cardsData.map((card, index) => (
        <div key={index} className="flex justify-center md:w-1/3">
          <Card {...card} />
        </div>
      ))}
    </div>
  </>
  
  
  );
};

export default CardList;
