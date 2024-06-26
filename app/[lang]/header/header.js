"use client"

import './header.css'
import Image from 'next/image'

import { useState } from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";

import logo from '@/assets/logo.png'
import en from '@/assets/flag_en.svg'
import cn from '@/assets/flag_cn.svg'
import tw from '@/assets/flag_tw.svg'

export default function Header({ dict }) {
    const [active, setActive] = useState(false)

    const locale = dict.locale
    let flag = ''

    if (locale == 'zh-TW') {
        flag = tw
    } else if (locale == 'zh-CN') {
        flag = cn
    } else {
        flag = en
    }

    return (
        <header>
            <a className='logo_container' href='/'>
                <Image
                    className='logo_image'
                    src={logo}
                    alt='logo'
                    height={50}
                />
                <h1 className='logo_text'>Meet Johnny</h1>
            </a>
            <nav>
                <ul className="menu">
                    <li><a href="#features">{dict.buttons.features}</a></li>
                    <li><a href="#pricing">{dict.buttons.pricing}</a></li>
                    <li><a href="https://discord.gg/qVVFgB9UPy" target="_blank">{dict.buttons.support}</a></li>
                </ul>
            </nav>
            <div className="language_menu">
                <div className="selected_language">
                    <Image src={flag} alt='flag_image' width={30} />
                    {dict.buttons.language} <FaLongArrowAltDown />
                </div>
                <ul className='options_menu'>
                    <li className='language_option'><a href="/en/home" className='language_option_link'><Image src={en} alt='' width={30} />English</a></li>
                    <li className='language_option'><a href="/zh-TW/home" className='language_option_link'><Image src={tw} alt='' width={30} />繁體中文</a></li>
                    <li className='language_option'><a href="/zh-CN/home" className='language_option_link'><Image src={cn} alt='' width={30} />简体中文</a></li>
                </ul>
            </div>

            <div className="hamburger_button" onClick={() => setActive(!active)}>
                <div className={active ? "bar bar_active" : "bar"}></div>
                <div className={active ? "" : "bar"}></div>
                <div className={active ? "bar bar_active" : "bar"}></div>
            </div>

            <nav className={active ? "mobile_menu_container mobile_menu_container_active" : "mobile_menu_container"}>
                <ul className="mobile_menu">
                    <li><a href="#features" onClick={() => setActive(false)}>{dict.buttons.features}</a></li>
                    <li><a href="#pricing" onClick={() => setActive(false)}>{dict.buttons.pricing}</a></li>
                    <li><a href="https://discord.gg/qVVFgB9UPy" target="_blank" onClick={() => setActive(false)}>{dict.buttons.support}</a></li>
                </ul>
            </nav>



        </header>
    )
}
