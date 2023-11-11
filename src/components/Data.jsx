import React from 'react'
import axios from "axios"
import { useState} from 'react'
function Data() {



    const baseURL = "https://api.publicapis.org/entries";
    const [data, setData] = React.useState(null);



    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setData(response.data);
        });
      }, []);
    
      if (!data) return null;
    
  return (
    <>
    <table id="customers">
      <tr>
      <th>Description</th>
      <th>Link</th>
      <th>Category</th>
      </tr>



      {data.entries.map(item =>(
      <tr>
      <td key={item.id}>{item.Description}</td>
      <td key={item.id}>{item.Link}</td>
      <td key={item.id}>{item.Category}</td>
      </tr>
      ))}


    </table>
    </>
  )
}

export default Data