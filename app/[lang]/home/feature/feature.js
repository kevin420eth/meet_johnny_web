import './feature.css'
import Image from 'next/image'
import EmblaCarousel from '../showcase/showcase'

import gptlogo from '@/assets/gptlogo.png'

export default function Feature({dict}) {
    return (
        <section className='feature_section' id='features'>
            <div className='meetjohnny_section'>
                <div className='meetjohnny_section_container'>
                    <h1 className='meetjohnny_section_title'>{dict.meetjohnny_introduction_title}</h1>
                    <p className='meetjohnny_section_content'>{dict.meetjohnny_introduction_content}</p>
                </div>
                <EmblaCarousel />
            </div>

            {/* <div className='gpt_section'>
                <div className='gpt_logo_container'>
                    <Image src={gptlogo} alt='gpt_logo' width={250} className='gpt_logo_image' />
                </div>
                <div className='gpt_introduction_container'>
                    <h1 className='gpt_introductino_title'>{dict.gpt_introduction_title}</h1>
                    <p className='gpt_introduction_content'>{dict.gpt_introduction_content}</p>
                </div>
            </div> */}
        </section>
    )
}
