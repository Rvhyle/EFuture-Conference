import '../Styles/HomePage_styles.scss';
import Tesla from '../assets/svgs/teslaLogo.svg';
import FB from '../assets/svgs/FbLogo.svg';
import Twitter from '../assets/svgs/twitterLogo.svg';
import SpeakerCard from '../Components/speakerCard';
import { speakers } from '../utils/speakers';

export default function HomePage() {
  return (
    <div className='home__container'>
      <div className='header__container'>
        <h1 className='header__content-padding' id='header__title'>
          E-Future<span>2021</span>
        </h1>
        <h2 className='header__content-padding' id='header__subtitle'>
          First Annual E-Future Conference{' '}
        </h2>
        <h3 className='header__info header__content-padding'>
          📍Javits Center, New York, NY
        </h3>
        <h3 className='header__info header__content-padding'>
          Sep 15-16, 2021
        </h3>
        <button id='header__button'>Buy Tickets</button>
      </div>
      <div className='sponsor__container'>
        <h1>Sponsored By</h1>
        <div className='sponsor__companies_container'>
          <div className='sponsor__logo'>
            <img src={Tesla} alt='Tesla' />
          </div>
          <div className='sponsor__logo'>
            <img src={FB} alt='Facebook' />
          </div>
          <div className='sponsor__logo'>
            <img src={Twitter} alt='Twitter' />
          </div>
        </div>
      </div>
      <div className='conf__container'>
        <h1>Conference Schedule</h1>
        <div className='conf__speakers'>
          {speakers.map((speaker) => {
            return (
              <SpeakerCard
                key={speaker.speaker}
                image={speaker.image}
                speaker={speaker.speaker}
                speech={speaker.speech}
                time={speaker.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
