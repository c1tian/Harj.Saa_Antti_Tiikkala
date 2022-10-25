import './App.css';
import {useState,useEffect} from 'react';
import Weather from './components/Weather';


function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
          console.log(error)
          alert("Paikannus epäonnistui!")
      })

    } else {
      alert("Selaimesi ei tue paikannusta!")
    }
  }, [])
  
  if (isLoading){
    return <p>Loading...</p>
  } else {
  return (
    <div className="content">
      <h3>Your position</h3>
      <p>
        Position:&nbsp;
        {latitude.toFixed(3)}, {longitude.toFixed(3)}
      </p>
      <Weather latitude={latitude} longitude={longitude} />
    </div>
  );
}
}

export default App;
