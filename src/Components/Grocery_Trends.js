import React from "react";
import { useLocation } from 'react-router-dom'
import  {useState, useEffect} from "react";
import api from "../api/api";
import Chart from 'react-google-charts';

const Grocery_Trend5 = (props) => {
    const [trends, setTrends] = useState([]);
    let TrendData=[];
    console.log(props);
    const [grocery, setGrocery] = useState([]);
    const retrieveGroceriess = async () => {
        const response = await api.get(`/grocery/${props.grocery.name}`);
        console.log(response.data)
        return response.data;
    }
    
        useEffect(  () => {
           const getGroceries = async () => {
               const allgrocery = await retrieveGroceriess();
               TrendData=[];
               var len = allgrocery.length;
               console.log(len);
               if (allgrocery) {setGrocery(allgrocery);}
               
               const ar = [];
               ar.push("date");
               ar.push("price");
               
               TrendData.push(ar);
               if(allgrocery) {
                console.log(allgrocery);
                for(var j=0;j<len;j++){
                      const ar2 = [];
                    console.log(" grocery  "+j+" value "+allgrocery[j].price+" "+allgrocery[j].date);
                    ar2.push(allgrocery[j].date)
                    ar2.push(allgrocery[j].price)
                    
                TrendData.push(ar2)
            }
        
            console.log(TrendData);
           
            setTrends(TrendData);
            
            }
        

           };
           getGroceries();
           console.log(trends);
        }, [])

        
        
        const TrendOptions = {
          title: `Price of grocery  " ${props.grocery.name} " with respect to date`,
          hAxis: { title: 'Date' },
          vAxis: { title: 'Price' },
          legend: 'none',
          trendlines: { 0: {} },
        }


const renderGraph = () => {
if(trends){
    console.log(trends)
    return(
      <React.Fragment>
      <h2 className="App-header">React Trend Line Chart Example</h2>
      <div className="ChartBox">
      <Chart
        width={'800px'}
        height={'600px'}
       
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={trends}
        options={TrendOptions}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
    </React.Fragment>
    )
}else{
    return "No data"
}
}


return (
    <div>{renderGraph()}</div>
  )


}

export default Grocery_Trend5;