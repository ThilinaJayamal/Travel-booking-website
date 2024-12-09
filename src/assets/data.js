import user from './User.png'
import location from './Location.png'
import calendar from './Calendar.png'
import search from './Search.png'
import star from './Star.png'
import one from './1.jpg'
import two from './2.jpg'
import third from './3.jpg'
import fourth from './4.jpg'
import user1 from './user1.jpg'
import user2 from './user2.jpeg'
import user3 from './user3.jpg'
import filter from './Tune.png'
import place1 from './place1.jpg';
import place2 from './place2.jpg';
import place3 from './place3.jpg';
import place4 from './place4.jpg';
import place5 from './place5.jpg';
import place6 from './place6.jpg';
import newyork from './newyork.png';
import seoul from './seoul.jpg';
import paris from './paris.jpg';
import flight from './flight.png';
import email from './Email.png'
import fb from './Facebook.png';
import inta from './Instagram_1.png';
import yt from './YouTube.png';
import menu from './Menu.png';

export const Icons = {
    user: user,
    location: location,
    date: calendar,
    star: star,
    search: search,
    filter: filter,
    flight:flight,
    email:email,
    fb:fb,
    insta:inta,
    yt:yt,
    menu:menu

}

export const place_icons = [
    {
        name:"Paris",
        img:paris
    },
    {
        name:"New York",
        img:newyork
    },
    {
        name:"Seoul",
        img:seoul
    },
    {
        name:"New York",
        img:newyork
    },
]

export const placesList = [
    {
        name: "Eiffel Tower",
        rate: 4.8,
        location: "Paris, France",
        img: place1,
        price:120,
        type:"Popular destination"
    },
    {
        name: "Great Wall of China",
        rate: 4.9,
        location: "Beijing, China",
        img: place2,
        price:120,
        type:"Camp"
    },
    {
        name: "Machu Picchu",
        rate: 4.7,
        location: "Cusco Region, Peru",
        img: place3,
        price:120,
        type:"Lake"
    },
    {
        name: "Colosseum",
        rate: 4.6,
        location: "Rome, Italy",
        img: place4,
        price:120,
        type:"Camp"
    },
    {
        name: "Taj Mahal",
        rate: 4.8,
        location: "Agra, India",
        img: place6,
        price:120,
        type:"Popular destination"
    },
    {
        name: "Colosseum",
        rate: 4.6,
        location: "Rome, Italy",
        img: place5,
        price:120,
        type:"Islands"
    },
];



export const votedUsers = [
    {
        name: "David Michael",
        img: user1,
        rate: 4.9
    },
    {
        name: "Sarah Davis",
        img: user2,
        rate: 4.7
    },
    {
        name: "Robert William",
        img: user3,
        rate: 4.9
    }
]

export const places = [
    {
        title: "SC. Mindanou",
        discount: "20%",
        location: "Mindanou, Philippines",
        img: one,
    },
    {
        title: "SC. Mindanou",
        discount: "20%",
        location: "Mindanou, Philippines",
        img: two
    },
    {
        title: "SC. Mindanou",
        discount: "20%",
        location: "Mindanou, Philippines",
        img: third
    },
    {
        title: "SC. Mindanou",
        discount: "20%",
        location: "Mindanou, Philippines",
        img: fourth
    },


]


export const memories = [
    {
        title: "Find trips that fit your freedom",
        number: "01",
        description: "Traveling offers freedom and flexibilty, solitude and spontaneity, and privacy and purpose.",
        color: "#71b8db"
    },
    {
        title: "Get back to nature by travel",
        number: "02",
        description: "The woeld is a playground and you can finally explore Mother Nature's inimitable canvas",
        color: "#8694ee"
    },
    {
        title: "Reignite those travel tastebuds",
        number: "03",
        description: "There are infinite reasons to love travel, one of them being the food, glotious food.",
        color: "#53b777"
    }
]