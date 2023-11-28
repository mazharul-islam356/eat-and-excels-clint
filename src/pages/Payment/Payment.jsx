import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe()
const Payment = () => {

    return (
        <div>
            tk o poisa tmi oira oira aso
            
            <Elements stripe={stripePromise}>

            </Elements>
        </div>
    )
};

export default Payment;