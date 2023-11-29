import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_payment_key)
const Payment = () => {

    return (
        <div className="my-10">
            <h1 className="font-semibold text-2xl my-4 text-center underline">Payment Section</h1>
            
            <Elements stripe={stripePromise}>
            <CheckOut></CheckOut>
            </Elements>
        </div>
    )
};

export default Payment;