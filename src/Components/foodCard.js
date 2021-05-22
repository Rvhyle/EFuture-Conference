import React from 'react';
import '../Styles/foodCard_styled.scss';

export default function FoodCard({ img, food, calories, desc }) {
  return (
    <div className='foodCard__container'>
      <div className='foodCard_img'>
        <img src={img} alt={food} />
      </div>
      <div className='foodCard_info'>
        <h2>{food}</h2>
        <span>{calories} calories</span>
        <p>{desc}</p>
      </div>
    </div>
  );
}
