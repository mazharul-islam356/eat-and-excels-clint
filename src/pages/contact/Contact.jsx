/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";


const Contact = () => {


  return (
   

    <div className="flex justify-center my-10">


<Card className="" color="transparent" shadow={false}>
      <Typography className="text-center" variant="h3" color="blue-gray">
        Contact Form
      </Typography>
      <Typography  color="gray" className="mt-1 text-center font-normal">
      Let's get this conversation started.
      </Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
         placeholder="Input your name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="Input your email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Message
          </Typography>

          
 
          <div className="w-96">
            <Textarea label="Message" />
            </div>


        </div>
       
        <Button className="mt-6" fullWidth>
          send
        </Button>
       
      </form>
    </Card>


    </div>


  );
};

export default Contact;



// ntac
// X
// Contact Sales
// Let's get this conversation started. Tell us a bit about yourself, and we'll get in touch as soon as we can.
// First name
// Last name
// alk to an
// Sal
// e will help you
// pricing f
// Work Email
// Message
// Co
// Contact Sales
