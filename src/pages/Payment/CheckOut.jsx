import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAllData from "../../hooks/useAllData";
import { useContext, useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Authentication/Firebase/AuthProvider";

const CheckOut = () => {
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = useContext(AuthContext)
const [cart] = useCart()
console.log(cart);
const [clientSecret,setclientSecret] = useState('')
const totalPrice = cart.reduce((total,item)=>total+item.price,0)

useEffect(() => {
  if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
          .then(res => {
              console.log(res.data.clientSecret);
              setclientSecret(res.data.clientSecret);
          })
  }

}, [axiosSecure, totalPrice])
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card
    })
    if(error){
      console.log('payment error2', error);
      setError(error)
    }else{
      console.log('payment method',paymentMethod);
      setError('')
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
          card: card,
          billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
          }
      }
  })
    
  if (confirmError) {
    console.log('error confirmed', confirmError);
  } else {
    if (!paymentIntent) {
      console.error('paymentIntent is not available');
      return;
    }
  
    // Process the paymentIntent object here
    console.log('payment intent', paymentIntent);
  }
  

  };


  return (
    <div>
      <form className="shadow-lg p-4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm btn-outline mt-2" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
    </div>
  );
};

export default CheckOut;
