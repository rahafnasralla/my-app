  function Names(props) {  
    const  array = props.array; 
    return (
      <div>
      <div>
      <table>
      <tbody>
        <tr>
        <th>Name</th>
        <th>Age</th>
        </tr>
        {
          array.map((item,idx) => {
            return <tr key={idx}><td>{item.name}</td><td>{item.age}</td></tr>
          })
        }
    
        <tr> 
        <td> <button onClick={(array)=>{
                props.array.splice(array.length-1, 1)
             return (
                props.array
             )
        }}>Delete element</button></td>
        </tr>
        </tbody>
      </table>
      </div>
      </div> 
      
    )
  }

  
  

  export default Names;

