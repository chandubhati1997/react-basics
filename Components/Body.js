import { useEffect,useState } from "react";
import Restrocard from "./Restrocard";
import Content from "../utils/Mockdata"
import '../style.css';
 




export default Body =() => {

  const fetchdata = async () => {
    //  const response = await fetch("https://cors-anywhere.herokuapp.com/www.swiggy.com/dapi/restaurants/list/update");
    //  const data = await response.json();
    //   return data
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update");
      const result = await response.json();
      console.log("Fetched Data:", result); // Logs the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
      

  } 

  useEffect(()=>{
    fetchdata()

  },[])

  const arraycontent =Content[0].sections.SECTION_SEARCH_RESULT.map(list=>list.info);

  
  const[data,setdata] =useState(arraycontent);

  console.log(arraycontent);
  
 
  
  // console.log(data);
  

   const [filters,setfilters]=useState(arraycontent)
   
    
    const [search,setsearch]=useState("")
    
    return (              
          <div className="Body">
           
{           
            <div className="filter">
            <div className="top-rated">
              <button className="filter" onClick={()=>{
               const filterdburger = filters.filter((list)=> list.rating.aggregate_rating>4)
                setdata(filterdburger)
                console.log(filterdburger);
                
              }}>Top Rated resturant</button>
              </div>

              <div className="searchdiv"> <input placeholder="Search burgers" value={search} onChange={(e)=>{
                     const query = e.target.value.toLowerCase()
                     setsearch(query)
                     console.log(query);
                     
                    const searchresult = arraycontent.filter((list)=> 
                      list.name.toLowerCase().includes(query)
                    )

                    console.log(searchresult);
                    
                    setdata(searchresult)             
                     }}/> 
               <button >Search</button>
              
            </div>
            
            
        
           
          </div>  
              }

          { <div className="restro-container">
                   
                   <Restrocard className="rest-card" data={data}></Restrocard>               
                             
                    </div> }

          </div>     
          
      
    )
}





