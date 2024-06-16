import './footer.css'
import { FaDiscord, FaInstagram, FaFacebookSquare  , FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiXiaohongshu } from "react-icons/si";

export default function Footer({dict}) {
    // Create a new Date object
    const currentDate = new Date();

    // Get the current year
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="footer_section">
            <div className='information_container'>
                <nav>
                    <ul className='social_media_list'>
                        <li><a href="https://discord.com/invite/qVVFgB9UPy" target='_blank' className="social_media_link"><i><FaDiscord /></i></a></li>
                        <li><a href="" className="social_media_link"><i><FaInstagram /></i></a></li>
                        <li><a href="" className="social_media_link"><i><FaFacebookSquare /></i></a></li>
                        <li><a href="" className="social_media_link"><i><RiTwitterXFill /></i></a></li>
                        <li><a href="" className="social_media_link"><i><FaTiktok /></i></a></li>
                        <li><a href="" className="social_media_link"><i className='sixiaohongshu_icon'><SiXiaohongshu /></i></a></li>
                    </ul>
                </nav>
                <a className='email_information' href="mailto:support@meetjohnny.com">Email: support@meetjohnny.com</a>
                <p className='copyright_declaration'>©{currentYear} {dict.copyright}</p>
            </div>
        </footer>
    )
}

