const WORKS = [
    {
        id:1,
        title:'MyWeather',
        description:'Pick a photo from gallery and create your own funny meme',
        tags:['React.js','Redux','Firebase'],
        link:'http://ishaymaya.github.io/my-weather/',
        // imgUrl:'http://www.wallpapermania.eu/images/lthumbs/2016-01/8610_Cold-mountain-lake-HD-winter-wallpaper.jpg'
        imgUrl:'./images/weather.jpg'
    },
    {
        id:2,
        title:'MakeAppoint',
        description:'Appoints system for SMB',
        tags:['Vue.js','Node.js','MongoDB'],
        link:'https://makeappoint.herokuapp.com/',
        // imgUrl:'https://previews.123rf.com/images/farhad73/farhad731908/farhad73190800059/128902376-barber-shop-poster-banner-template-with-hipster-face-vector-illustration.jpg'
        imgUrl:'./images/appoint.jpg'
    },
    {
        id:3,
        title:'MyMusic',
        description:'Search & Play soundcloud music',
        tags:['React.js','Redux'],
        link:'https://ishaymaya.github.io/my-music/',
        // imgUrl:'https://f4.bcbits.com/img/a3869114877_16.jpg'
        imgUrl:'./images/music.jpg'
    },
    {
        id:4,
        title:'SportWiz',
        description:'Using crowd wisdom for sport predictions',
        tags:['Vue.js','Node.js','MongoDB'],
        link:'http://sportwiz.co',
        // imgUrl:'https://i.kinja-img.com/gawker-media/image/upload/s--VLubrAqw--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/ipuaitblqhz1bbjxebld.jpg'
        imgUrl:'./images/sport.jpg'
    },
    // {
    //     id:5,
    //     title:'Meme Generator',
    //     description:'Pick a photo from gallery and create your own funny meme',
    //     tags:['Javascript','HTML Canvas'],
    //     link:'https://ishaymaya.github.io/meme-generator/',
    //     imgUrl:'https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg'
    // },
]

const getWorks = () => WORKS

export default {
    getWorks
}