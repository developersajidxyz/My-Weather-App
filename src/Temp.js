import React from 'react'
import './style.css'
import { useState,useEffect}from 'react'
import Weather from './Weather'

const Temp = () => {
   const [searchValue,setSearchValue]=useState('Dhaka')
   const[tempInfo,setTempInfo]=useState({})
   const getWeatherInfo=async()=>{
       try{
           let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}
           &units=metric&APPID=f8087a9c74fd80bf10a23435f742fdbb`;
           let res=await fetch(url)
           let data=await res.json()
           console.log(data)
           const{temp,humidity,pressure}=data.main
           //console.log(temp)
           const{main}=data.weather[0]
           const {name}=data
           const{speed}=data.wind
           const{country,sunset}=data.sys

           const myNewWeatherInfo={
            temp,humidity,pressure,
            main,
            name,
            speed,
            country,sunset

           }
           setTempInfo(myNewWeatherInfo)

       }
       catch(error){
            console.log(error)
       }

   }
   useEffect(() => {
     getWeatherInfo()
   }, [])
    return (
        <>
        <div className='wrap container'>
            <div className='search'>
                <input type="search"
                placeholder='Search....'
                autoFocus
                id='search'
                className='searchTerm'
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                />
            
                <button className='searchButton'
                type="button"
                onClick={getWeatherInfo} >Search</button>
            </div>
            
            
        </div>
        
        <Weather tempInfo={tempInfo}/>
        
        </>
        
    )
}

export default Temp
