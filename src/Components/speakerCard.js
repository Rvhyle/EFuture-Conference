import React from 'react';
import '../Styles/speakerCard_styled.scss';
export default function SpeakerCard({ image, speaker, speech, time }) {
  return (
    <div className='speakerCard__container'>
      <div className='speakerCard__image'>
        <img src={image} alt={speaker} />
      </div>
      <div className='speakerCard__info'>
        <h1>{speaker}</h1>
        <h2>{speech}</h2>
        <h4>{time}</h4>
      </div>
    </div>
  );
}
