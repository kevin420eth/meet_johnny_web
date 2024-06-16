import './footer.css'

export default function Footer() {
    // Create a new Date object
    const currentDate = new Date();

    // Get the current year
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="footer_section">
            <nav></nav>
            <p className='copyright_declaration'>©{currentYear} Meet Johnny. All rights reserved.</p>
        </footer>
    )
}

