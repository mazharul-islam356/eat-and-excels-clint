
import { useEffect, useState } from "react";

const Request = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div>
        <p>Current time: {currentTime.toLocaleTimeString()}</p>
        <p>Current date: {currentTime.toLocaleDateString()}</p>
      </div>
    );
  };
  export default Request