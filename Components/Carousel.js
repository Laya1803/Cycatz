import {useState} from 'react';
import './styles.css'
const images=[
    "https://i.pinimg.com/originals/9d/bb/7b/9dbb7b1fee6b77fcfd20cb2b9023701f.jpg",
    "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
    "https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-162.jpg?w=2000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJ9QnCOKd1zpiH-8uOOy5VTtNTt6wcfe-F706A20uXQZJ417Fus-OBB8HrvGUim067Rk&usqp=CAU",
    "https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg"
];
export default function Carousel(){
const [current,setCurrent] = useState(0)

function nextSlide(){
    setCurrent(current===images.length-1?0:current+1)
}
function prevSlide(){
    setCurrent(current=== 0?images.length-1:current-1)
}
    return (
        <div>
        <div className='slides'>
            <div> <button className='left' onClick={prevSlide}>&#8630;</button></div>
            <div><button className='right' onClick={nextSlide}>&#8631;</button></div>
        </div>
        {images.map(
            (image,index)=>
            current === index && (
                <div key={image} className="slide">
                <img src={image} alt="images" className='image'></img>
                </div>
            )
        )}
        </div>
       
    );
}
