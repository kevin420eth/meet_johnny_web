import Image from "next/image";
import './page.css'
import Video from 'next-video';
import myvideo from '@/videos/myvideo.mp4'

export default function Home() {
  return (
    <>
      <main>
        <section className="landing_page">
          <h1>Unloack Your Creativity with New Era Generative AI</h1>
          <a href="/home" className="enter_button">Enter</a>
        </section>
      </main>
    </>

  );
}
