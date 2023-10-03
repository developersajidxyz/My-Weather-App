import React, { useEffect,useState } from 'react'

const Weather = ({tempInfo}) => {
    const[weatherState,setWeatherState]=useState('')
    const{
        temp,humidity,pressure,
        main,
        name,
        speed,
        country,sunset

       }=tempInfo

       useEffect(()=>{
           if(main){
               switch(main){
                   case "Clouds":setWeatherState('wi-day-cloudy')
                   break;
                   case "Haze":setWeatherState('wi-fog')
                   break;
                   case "Clear":setWeatherState('wi-day-sunny')
                   break;
                   case "Mist":setWeatherState('wi-fog')
                   break;
                   case "Rain":setWeatherState('wi-day-rain')
                   break;
                   case "Smoke":setWeatherState('wi-smoke')
                   break;
                   default:
                    setWeatherState('wi-day-sunny')
                    break;
               }
           }
       },[main])
       let sec=sunset
       let date=new Date(sec*1000)
       let timeStr=`${date.getHours()}:${date.getMinutes()}`
    return (
        <>
           <div className='widget'>
                <div className='weatherIcon'>
                {/* <i className={'wi wi-day-sunny'}></i> */}
                <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                {/* <div className='temperature'>15°C</div> */}
                <div className='temperature'>{temp}°C</div>
                <div className='description'>
                {/* <div className='weatherCondition'>Sunny</div> */}
                <div className='weatherCondition'>{main}</div>
                {/* <div className='place'>Delhi, India</div> */}
                <div className='place'>{name}, {country}</div>
                </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>
                <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-sunset'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {/* 19:19 PM<br/>
                            Sunset */}
                            {/* {sunset}<br/>Sunset */}
                            {timeStr} PM<br/>Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-humidity'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {/* 74<br/> */}
                            {humidity}<br/>
                            Humidity
                        </p>
                    </div>
                    </div>
                    
                    <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-barometer'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {/* 50<br/> */}
                            {pressure}<br/>
                            Pressure
                        </p>
                        </div> 
            
                        <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-windy'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {/* 74<br/> */}
                            {speed}<br/>
                            Wind Speed
                        </p>
                        </div> 
                       
    

                </div>
                
                </div>
                
                </div> 
        </>
    )
}

export default Weather
