import './page.css'
import { getDictionary } from '../dictionaries'

import Header from '../header/header'
import Landing from './landing/landing'
import Feature from './feature/feature'
import Pricing from './pricing/pricing'
import Footer from '../footer/footer'

import { redirect } from 'next/navigation'

export default async function Home({ params }) {
    let locale = 'en'

    if (params.lang == 'zh-CN') {
        locale = 'zhcn'
    } else if (params.lang == 'zh-TW') {
        locale = 'zhtw'
    }

    const dict = await getDictionary(locale)

    return (
        <>
            <Header dict={dict} />
            <main>
                <Landing dict={dict} />
                <Feature dict={dict} />
                <Pricing dict={dict} />
                <Footer dict={dict} />
            </main>
        </>
    )
}