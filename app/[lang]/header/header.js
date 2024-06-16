import './header.css'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Header({dict}) {
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
        </header>
    )
}
