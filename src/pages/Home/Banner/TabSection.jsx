import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TabsCard from "./TabsCard";

const TabSection = () => {

    
    const axiosSecure = useAxiosSecure()
    const [data, setData] = useState([]);
    const [tabIndex,setTabIndex] = useState(0)
// console.log(data);


    const breakfast = data?.filter(item=>item.type === 'breakfast')
    const lunch = data?.filter(item=>item.type === 'lunch')
    const dinner = data?.filter(item=>item.type === 'dinner')


    useEffect(() => {
      axiosSecure.get('/allData')
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }, [axiosSecure]);
    console.log(data);  


  return (
    <div className="p-4 text-center mt-4">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>All Meal</Tab>
          <Tab>Break Fast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
        </TabList>
        <TabPanel className='my-4'>
            <div className="grid md:grid-cols-3">
            {
                data.map(item=><TabsCard item={item} key={item._id}></TabsCard>)
            }
            </div>
        </TabPanel>
        <TabPanel >
            <div className="grid md:grid-cols-3">
            {
                breakfast.map(item=><TabsCard item={item} key={item._id}></TabsCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
             <div className="grid md:grid-cols-3">
             {
                lunch.map(item=><TabsCard item={item} key={item._id}></TabsCard>)
            }
             </div>
        </TabPanel>
        <TabPanel>
       <div className="grid md:grid-cols-3">
       {
                dinner.map(item=><TabsCard item={item} key={item._id}></TabsCard>)
        }
       </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
