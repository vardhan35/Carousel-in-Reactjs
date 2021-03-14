import React, {useState} from 'react'
import {Data} from './Data'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = Data.length;

    const nextSlide =() =>{
        setCurrent(current === length - 1 ? 0 : current+1);
    }
    const prevSlide = () => {
        setCurrent(current ===0 ? length-1 : current -1)
    }
    if(!Array.isArray(Data) || Data.length <= 0){
        return null;
    }
    console.log(current);
    return (
            <section className="slider">
                <FaArrowAltCircleLeft onClick={nextSlide} className='left'/>
                <FaArrowAltCircleRight onClick={prevSlide} className='right'/>
            {
                Data.map((slide, id) =>{
                    return(
                        <div className={id === current ? 'slide active' : 'slide'}
                        key={ id }
                        >
                        {id === current && (<img src={slide.image} key ={ id } alt='n'/>)}
                        </div>
                    )
                })
            }
            </section>
    )
}

export default Carousel
