"use client"

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './showcase.css'
import Image from 'next/image'

import image1 from '../../../../assets/1.png'
import image2 from '../../../../assets/2.png'
import image3 from '../../../../assets/3.png'
import image4 from '../../../../assets/4.png'
import image5 from '../../../../assets/5.png'
import image6 from '../../../../assets/6.png'
import image7 from '../../../../assets/7.png'
import image8 from '../../../../assets/8.png'
import image9 from '../../../../assets/9.png'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla_container">
        <div className="embla_slide"><Image src={image1} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image2} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image3} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image4} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image5} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image6} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image7} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image8} alt='' height={500}/></div>
        <div className="embla_slide"><Image src={image9} alt='' height={500}/></div>
      </div>
    </div>
  )
}
