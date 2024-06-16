import './header.css'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Header() {
    return (
        <header>
            <div className='logo_container'>
                <Image
                    className='logo_image'
                    src={logo}
                    alt='logo'
                    height={50}
                />
                <h1 className='logo_text'>Meet Johnny</h1>
            </div>
            <nav>
                <ul className="menu">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="https://discord.gg/qVVFgB9UPy" target="_blank">Support</a></li>
                </ul>
            </nav>
        </header>
    )
}
