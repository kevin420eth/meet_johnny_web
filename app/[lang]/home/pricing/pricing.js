import './pricing.css'

export default function Pricing({ dict }) {
    if (dict.locale == 'zh-CN' || dict.locale == 'zh-TW') {
        return (
            <section className='stripe_pricing' id="pricing">
                <h1 className='pricing_table_title'>{dict.pricing}</h1>
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table pricing-table-id="prctbl_1PSxymBaMQOMc3iJ7zdrkcRv"
                    publishable-key="pk_test_51OiLl6BaMQOMc3iJcCqhnFcMCIFrEs2Dr7BIhemWGt1NejBPFMy7qYdjmIh6lXuw0H1S1sIzDOSMncCXjRJrVwBt00cGjkEOSd">
                </stripe-pricing-table>
            </section>
        )
    } else {
        return (
            <section className='stripe_pricing' id="pricing">
                <h1 className='pricing_table_title'>{dict.pricing}</h1>
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table pricing-table-id="prctbl_1PRVGnBaMQOMc3iJAlmHno1g"
                    publishable-key="pk_test_51OiLl6BaMQOMc3iJcCqhnFcMCIFrEs2Dr7BIhemWGt1NejBPFMy7qYdjmIh6lXuw0H1S1sIzDOSMncCXjRJrVwBt00cGjkEOSd">
                </stripe-pricing-table>
            </section>
        )
    }
}
