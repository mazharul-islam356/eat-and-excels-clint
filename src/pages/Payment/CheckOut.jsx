import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/Firebase/AuthProvider";


const CheckOut = () => {

  const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');
  const [transictionid,setTransictionid] = useState()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = useContext(AuthContext)

const [mappedData,setMappedData] = useState()



  useEffect(() => {
    fetch('/public/memberShip.json')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
        const mappedData = data.map(item =>setMappedData(item));
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  console.log(mappedData);
const {price} = mappedData || {}
console.log(price);
console.log(items);

const [clientSecret,setclientSecret] = useState('')
// const totalPrice = mappedData.reduce((total,item)=>total+item.price,0)

useEffect(() => {
  if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price: price })
          .then(res => {
              console.log(res.data.clientSecret);
              setclientSecret(res.data.clientSecret);
          })
  }

}, [axiosSecure,price])
  


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
    if(paymentIntent.status === 'succeeded'){
      console.log('tansction id'),paymentIntent.id;
      setTransictionid(paymentIntent.id)
    }
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
      {transictionid && <p className="text-green-600 py-2 pt-4 "><span className="text-black text-xl font-bold ">Your transiction id:</span> {transictionid}</p>}
    </form>
    </div>
  );
};

export default CheckOut;
