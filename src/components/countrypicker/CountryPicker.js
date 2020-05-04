import React, {useState , useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './countryPicker.module.css'; 
import {fetchCountries} from '../../Api';


const CountryPicker = ({handleCountryChange}) =>{
  const [fetchedCountries, setFetchedCountries]=useState([]);
  
  useEffect(()=>{
    const fetchAPI = async()=>{
      setFetchedCountries(await fetchCountries());
    }
    fetchAPI(); 
  },[setFetchedCountries])
  console.log(fetchedCountries); 
  
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}className="options">
          <option value="global">Global</option>
          {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
              
        </NativeSelect>
      </FormControl>
   
    )
}
export default CountryPicker;
