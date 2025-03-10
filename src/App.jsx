import { useEffect, useState } from 'react'

const Card = ({ title }) => {
  const [count, setCount] = useState(0); 
  const [hasLiked, setHasLiked] = useState(false);



  useEffect( ()  => {
    console.log(`${title} has been Liked: ${hasLiked}`);
  },[hasLiked]);


  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br /> {count}</h2>
      
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ?  "❤️": "🤍"}
      </button>
      </div>
  )
}
const App = () => {

  return (
    <div className="card-container" >
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
      <Card title="The Matrix" />
      <Card title="The GodFather" />
      <Card title="The Lord Of The Rings, The fellowship Of The Ring" />
    </div>
    
  
  )
};

export default App
