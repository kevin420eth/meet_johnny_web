import './pricing.css'

export default function Pricing({ dict }) {
    if (dict.locale == 'zh-CN' || dict.locale == 'zh-TW') {
        return (
            <section className='stripe_pricing' id="pricing">
                <h1 className='pricing_table_title'>{dict.pricing}</h1>
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table pricing-table-id="prctbl_1PT3JiBaMQOMc3iJ11zaJfUa"
                    publishable-key="pk_live_51OiLl6BaMQOMc3iJhrhaPmW7qjClRo43NUqsn3ZqCDHw57FKhh6V6lEzzEi9ru9VUEupJs9Ac3dpCoCrWM8gkOba00U6y4rem6">
                </stripe-pricing-table>
            </section>
        )
    } else {
        return (
            <section className='stripe_pricing' id="pricing">
                <h1 className='pricing_table_title'>{dict.pricing}</h1>
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table pricing-table-id="prctbl_1PT3HlBaMQOMc3iJmCvFY0l2"
                    publishable-key="pk_live_51OiLl6BaMQOMc3iJhrhaPmW7qjClRo43NUqsn3ZqCDHw57FKhh6V6lEzzEi9ru9VUEupJs9Ac3dpCoCrWM8gkOba00U6y4rem6">
                </stripe-pricing-table>
            </section>
        )
    }
}
