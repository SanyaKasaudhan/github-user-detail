import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
const GithubUser = () => {

    const[error,setError]=useState(null);
    const[isLoaded, setIsLoaded]=useState(false);
    const[items,setItems]=useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(res=>res.json())
        .then((result)=>{
            setIsLoaded(true);
            setItems(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        })
    },[])
    
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>

        {items.map(item => (  
          <>
          <CardGroup style={{width:"15em", height:"25em" , marginTop:"1em"}}>
          <Card style={{ width: '8rem' }}>
            <Card.Img variant="top" src={item.avatar_url} style={{width:"15em", height:"15em"}}/>
            <Card.Body>
            <Card.Title>{item.login}</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {item.type}
          </Card.Footer>
          </Card>   
          </CardGroup>
          </>
        ))}

    </div>
  )
}
}
export default GithubUser