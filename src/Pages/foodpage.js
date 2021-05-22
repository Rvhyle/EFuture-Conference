import React from 'react';
import { foodOptions } from '../utils/foodOptions';
import FoodCard from '../Components/foodCard';
import '../Styles/foodPage_styled.scss';

export default function FoodPage() {
  return (
    <div className='food__container'>
      <h1>Food Options</h1>
      <div className='foodOption__container'>
        {foodOptions.map((food) => {
          return (
            <FoodCard
              key={food.food}
              img={food.foodImg}
              food={food.food}
              calories={food.calories}
              desc={food.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
