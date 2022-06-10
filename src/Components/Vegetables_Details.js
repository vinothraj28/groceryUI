import React, {useState, useEffect} from "react";
import api from "../api/api";
import Vegetable_Card from "../Components/Vegetable_Card";

function VegetableDetails(props, grocery){
   
 
    const RenderFeeds = () => {

        const [grocery, setGrocery] = useState([]);


        const retrieveGroceriess = async () => {
            const response = await api.get('/grocery');
            console.log(response.data)
            return response.data;
        }
        
                useEffect(  () => {
                const getGroceries = async () => {
                    const allgrocery = await retrieveGroceriess();
                    if (allgrocery) setGrocery(allgrocery);
                };
                getGroceries();
                }, [grocery])
            
            const listGrocery = () => {
                return (
                    <div>
                    <table class="table table-bordered table-dark table-hover" >
                        <tbody>
                            <tr class="table-success">
                                <th>Name of the grocery</th>
                                <th>Maximum Price</th>
                                <th>Date</th>
                            </tr>
                            {grocery.map((item) => (
                                <Vegetable_Card getGroceryTrend={props.getGroceryTrend} grocery={item}></Vegetable_Card>
                            ))}
                        </tbody>
                    </table>
                    </div>
                )
            }

    return(
        <React.Fragment>
        <header className="App-header">
      List of vegetales with their maximum price
      </header>
        <div>{grocery.length>0 ? listGrocery():"No Grocery to display"}</div>
        </React.Fragment>
      
    );
}
return(

    <div>{RenderFeeds()}</div> 
)
}
export default VegetableDetails;