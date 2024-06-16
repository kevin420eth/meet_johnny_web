
import './page.css'

import Header from '../header/header'
import Landing from './landing/landing'
import Feature from './feature/feature'
import Pricing from './pricing/pricing'
import Footer from '../footer/footer'


export default function Home() {
    return (
        <>
            <Header />
            <main>

                <Landing />
                <Feature />
                <Pricing />
                <Footer />
            </main>
        </>
    )
}