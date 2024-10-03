import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/Firebase/AuthProvider";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";


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
const {id}= useParams()
console.log(id);



const {data: member} = useQuery({
  queryKey: [user?.email,'member'],
  queryFn: async () =>{
      const res = await axiosSecure.get(`/memberShipp`)
      return res.data
  }
})
 console.log(member);

const findData = member?.find(item=> item._id === id )
console.log(findData);


  
  console.log(mappedData);


const {price} = mappedData || {}
console.log(price,'priceeeee');
console.log(items);

const [clientSecret,setclientSecret] = useState('')


useEffect(() => {
  
      axiosSecure.post('/create-payment-intent', { price: findData?.price })
          .then(res => {
              console.log(res.data.clientSecret);
              setclientSecret(res.data.clientSecret);
          })
  

}, [axiosSecure,findData?.price])


const {mutate: payHistory} = useMutation({
  mutationKey: async (memberShipPay) =>{
    return await axiosSecure.post(
      '/memberShipPay'
    )
  }
})



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
      const memberShipPay = {
        date: new Date(),
        email: user?.email,
        price: findData?.price,
        transictionid: paymentIntent.id,
        memberShipName: findData?.name,
        status: 'pending'
      };

      const res = await axiosSecure.post('/payments',memberShipPay)
      console.log('payment saved',res);
      
    }
  }
  };





  return (
    <div className="h-[80vh] font-poppins ">
      
      <form className="shadow-lg w-[600px] mx-auto p-12" onSubmit={handleSubmit}>
      <h1 className="text-center uppercase text-light-blue-500 font-bold mb-2 text-2xl">{findData?.name}</h1>
      <h1 className="text-center"><span className="text-xl font-semibold ">Amount:</span> {findData?.price}$</h1>
      <h1 className="text-center"><span className="text-xl font-semibold ">Benifit:</span> {findData?.benefits01}</h1>
      <CardElement
      className="border rounded-lg p-4 mt-4"
        options={{
          style: {
            base: {
              fontSize: "18px",
              
              padding:"20px",
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
     <div className="flex justify-center">
     <button className="btn btn-wide btn-sm  btn-outline mt-4" type="submit" disabled={!stripe }>
        Pay
      </button>
     </div>
      <p className="text-red-600">{error}</p>
      {transictionid && <p className="text-green-600 py-2 pt-4 "><span className="text-black text-xl font-bold ">Your transiction id:</span> {transictionid}</p>}
    </form>
    </div>
  );
};

export default CheckOut;
