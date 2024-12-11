import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    const [city, setCity]= useState("");
    const [error, setError]= useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY= "bfe4a543d5b7ba830ff75a0cf9e2dbf1";

    let getWeatherInfo= async(city) => {
            let response= await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse);
            let result= {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
    }

    let handleChange= (event) => {
        setCity(event.target.value)
    }

    let handleSubmit= async(event) => {
        try{
            event.preventDefault();
            console.log(city);
           let newInfo= await getWeatherInfo(city);
           updateInfo(newInfo);
           setError(false)
           setCity("");
        }  catch (err) {
            setError(true);
        }
      
    }

  return (
    <div className='SearchBox'>
      {/* <h3>Search for the weather</h3> */}
      <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" style={{backgroundColor: "skyblue"}} variant="outlined" onChange={handleChange} required value={city}/>
      <br />   <br />
      <Button variant="contained" type='submit'>
        Search
      </Button>
      <br /> <br />
      {
        error && <b style={{color: "red"}}>No such place exist</b>
      }
      </form>
    </div>
  )
}
