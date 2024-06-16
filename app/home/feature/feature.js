import './feature.css'
import Image from 'next/image'
import EmblaCarousel from '../showcase/showcase'

import gptlogo from '@/assets/gptlogo.png'

export default function Feature() {
    return (
        <section className='feature_section' id='features'>
            <div className='meetjohnny_section'>
                <div className='meetjohnny_section_container'>
                    <h1 className='meetjohnny_section_title'>From Ideas to Reality</h1>
                    <p className='meetjohnny_section_content'>Say hello to Johnny, the text-to-image AI bot that brings your words to life! Whether you are looking to visualize your wildest dreams, create stunning artwork, or simply have fun with text prompts, Johnny is here to transform your ideas into beautiful images. With cutting-edge AI technology and a friendly interface, Johnny makes it easy and enjoyable to turn your imagination into reality. Let Johnny be your creative companion and watch as your words become vivid, captivating visuals!</p>
                </div>
                <EmblaCarousel />
            </div>

            <div className='gpt_section'>
                <div className='gpt_logo_container'>
                    <Image src={gptlogo} alt='gpt_logo' width={250} className='gpt_logo_image' />
                </div>
                <div className='gpt_introduction_container'>
                    <h1 className='gpt_introductino_title'>GPT-4o</h1>
                    <p className='gpt_introduction_content'>Today, GPT-4o is much better than any existing model at understanding and discussing the images you share. For example, you can now take a picture of a menu in a different language and talk to GPT-4o to translate it, learn about the food&apos;s history and significance, and get recommendations. In the future, improvements will allow for more natural, real-time voice conversation and the ability to converse with ChatGPT via real-time video. For example, you could show ChatGPT a live sports game and ask it to explain the rules to you. We plan to launch a new Voice Mode with these new capabilities in an alpha in the coming weeks, with early access for Plus users as we roll out more broadly.</p>
                </div>
            </div>
        </section>
    )
}
