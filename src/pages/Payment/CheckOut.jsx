import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {

const stripe = useStripe();
  const elements = useElements();


    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }
    }







    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

        </form>
    );
};

export default CheckOut;