import './page.css'

export default function Home() {
    return (
        <>
            <header>
                <h1>Meet Johnny</h1>
                <nav>
                    <ul className="menu">
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="https://discord.gg/2dqrWzG6" target="_blank">Community</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className='landing_page'>
                    <div>
                        this is slide show
                    </div>
                    <div>
                        slogan something
                    </div>
                </section>

                <section className='stripe_pricing'>
                    this is the price
                </section>

                <section className='introduce'>
                    this is the introduce
                </section>
            </main>
        </>
    )
}