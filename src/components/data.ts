interface Props {
    temperature: number;
    isDay: boolean;
    time: string;
    imgUrl: string;
    description: string;
    humidity: number;
    Location: string;
  }
  
   export const topCitiesData: Props[] = [
    {
      temperature: 28,
      isDay: true,
      time: '2:00 PM',
      imgUrl: 'tokyo.jpg',
      description: 'Sunny',
      humidity: 65,
      Location: 'Tokyo'
    },
    {
      temperature: 32,
      isDay: true,
      time: '1:30 PM',
      imgUrl: 'delhi.jpg',
      description: 'Hot',
      humidity: 40,
      Location: 'Delhi'
    },
    {
      temperature: 24,
      isDay: true,
      time: '10:45 AM',
      imgUrl: 'shanghai.jpg',
      description: 'Partly Cloudy',
      humidity: 55,
      Location: 'Shanghai'
    },
    {
      temperature: 23,
      isDay: false,
      time: '9:15 PM',
      imgUrl: 'saopaulo.jpg',
      description: 'Clear Night',
      humidity: 70,
      Location: 'São Paulo'
    },
    {
      temperature: 30,
      isDay: true,
      time: '3:45 PM',
      imgUrl: 'mumbai.jpg',
      description: 'Hot and Humid',
      humidity: 75,
      Location: 'Mumbai'
    },
    {
      temperature: 29,
      isDay: true,
      time: '11:00 AM',
      imgUrl: 'beijing.jpg',
      description: 'Mostly Sunny',
      humidity: 50,
      Location: 'Beijing'
    },
    {
      temperature: 34,
      isDay: true,
      time: '4:30 PM',
      imgUrl: 'cairo.jpg',
      description: 'Scorching Heat',
      humidity: 20,
      Location: 'Cairo'
    },
    {
      temperature: 28,
      isDay: true,
      time: '2:15 PM',
      imgUrl: 'dhaka.jpg',
      description: 'Cloudy with Rain',
      humidity: 80,
      Location: 'Dhaka'
    },
    {
      temperature: 25,
      isDay: true,
      time: '12:30 PM',
      imgUrl: 'mexicocity.jpg',
      description: 'Partly Sunny',
      humidity: 65,
      Location: 'Mexico City'
    },
    {
      temperature: 26,
      isDay: true,
      time: '1:45 PM',
      imgUrl: 'osaka.jpg',
      description: 'Warm and Humid',
      humidity: 70,
      Location: 'Osaka'
    },
    {
      temperature: 31,
      isDay: true,
      time: '2:30 PM',
      imgUrl: 'karachi.jpg',
      description: 'Sunny with Haze',
      humidity: 45,
      Location: 'Karachi'
    },
    {
      temperature: 28,
      isDay: true,
      time: '10:00 AM',
      imgUrl: 'chongqing.jpg',
      description: 'Partly Cloudy',
      humidity: 60,
      Location: 'Chongqing'
    },
    {
      temperature: 27,
      isDay: true,
      time: '3:15 PM',
      imgUrl: 'istanbul.jpg',
      description: 'Cloudy with Light Rain',
      humidity: 55,
      Location: 'Istanbul'
    },
    {
      temperature: 25,
      isDay: true,
      time: '2:00 PM',
      imgUrl: 'buenosaires.jpg',
      description: 'Mild and Breezy',
      humidity: 50,
      Location: 'Buenos Aires'
    },
    {
      temperature: 26,
      isDay: true,
      time: '4:30 PM',
      imgUrl: 'kinshasa.jpg',
      description: 'Warm and Humid',
      humidity: 75,
      Location: 'Kinshasa'
    },
    {
      temperature: 29,
      isDay: true,
      time: '3:45 PM',
      imgUrl: 'lagos.jpg',
      description: 'Sunny',
      humidity: 75,
      Location: 'Lagos'
    }
  ];