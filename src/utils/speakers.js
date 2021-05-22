import faker from 'Faker';
import avatar from '../assets/avatar.png';

export const speakers = [
  {
    image:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102',
    speaker: 'Elon Musk',
    time: 'Sep, 15 ~ 1:00pm - 2:00pm',
    speech: 'The Future is Electric',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 15 ~ 2:30pm - 3:00pm',
    speech: 'Say No to Fossil Fuels',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 15 ~ 3:30pm - 4:00pm',
    speech: 'How Reliable Are Electric Cars?',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 15 ~ 4:30pm - 5:00pm',
    speech: 'Advancements in Technology',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 16 ~ 1:30pm - 2:00pm',
    speech: 'A Rechargable Society',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 16 ~ 2:30pm - 3:00pm',
    speech: 'Benefits of Going Electric',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 16 ~ 3:30pm - 4:00pm',
    speech: 'A Healthier Earth',
  },
  {
    image: avatar,
    speaker: faker.Name.findName(),
    time: 'Sep, 16 ~ 4:30pm - 5:00pm',
    speech: 'Eliminate our Carbon Foot Print',
  },
];
