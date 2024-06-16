import './pricing.css'

export default function Pricing() {
    return (
        <section className='stripe_pricing' id="pricing">
            <h1 className='pricing_table_title'>Pricing</h1>
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1PRVGnBaMQOMc3iJAlmHno1g" className="stripe_pricing_table"
                publishable-key="pk_test_51OiLl6BaMQOMc3iJcCqhnFcMCIFrEs2Dr7BIhemWGt1NejBPFMy7qYdjmIh6lXuw0H1S1sIzDOSMncCXjRJrVwBt00cGjkEOSd">
            </stripe-pricing-table>
        </section>
    )
}
