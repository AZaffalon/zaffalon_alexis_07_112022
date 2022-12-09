// React
import React, { useState, useEffect} from "react";
import { useParams, Navigate } from "react-router-dom";
// Components
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
// Styles and images
import '../assets/styles/apartment.css';
import starGrey from '../assets/images/star-grey.svg';
import starRed from '../assets/images/star-red.svg';

/**
 * Fetch datas from datas.json and find location with id from url params
 * return state of setApartment (json) an setLoading (boolean)
 */
function setFetcherApartment() {
  
  const params = useParams()
  
  const [apartment, setApartment] = useState(null) 
  const [loading, setLoading] = useState(true)
  const [redirect, setRedirect] = useState(false)
  
  useEffect(() => {
    fetch("../datas.json")
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        const findData = data.find(a => a.id === params.id)
        if (findData) {
          setApartment(findData)
        } else {
          console.error("Data not found")
          setRedirect(true)
        }
      })
      .catch(error => {
        console.error("Problem fetching data:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return [
    loading,
    redirect,
    apartment
  ]
}

function Apartment() {

  // States returned from setFetcherApartment function
  const [loading, redirect, apartment] = setFetcherApartment()

  // redirect to 404 if apartment is null
  if (redirect) {
    return <Navigate replace to="/404"/>
  }

  if (loading) { // until 'loading' passes to false => show the loader component
    return <Loader />
  }

  // Set i to 0 for tags keys
  let i = 0;

  return (
    <div className="apartment">
      <Slider slides={apartment.pictures}/>

      <div className="container">
        <div className="wrapper column grow-1">
          <h2>{apartment.title}</h2>
          <span>{apartment.location}</span>

          <div className="align-tags">
            { apartment.tags.map(tag => {
                return <Tag tagValue={tag} key={`${tag}_${apartment.id}`}/>
              })
            }
          </div>
        </div>

        <div className="wrapper direction"> 
          <div className="star-container grow-1">
            {
              [...Array(parseInt(apartment.rating))].map(() => {
                i++ // increment i to 1 for each tag
                return(
                  <img src= {starRed} alt="Star red" key={`star_red_${i}`}/>
                )
              })
            }
            {
              [...Array(5 - parseInt(apartment.rating))].map(() => {
                i++ // increment i to 1 for each tag
                return(
                  <img src= {starGrey} alt="Star grey" key={`star_grey_${i}`}/>
                )
              })
            }
          </div>

          <div className="name-picture">
            <span>{ apartment.host.name }</span>
            <div className="picture" style={{
              backgroundImage: `url(${apartment.host.picture})`
            }}></div>
          </div>
        </div>
      </div>

      <div className="align-dropdown">
        <Dropdown titleValue={"Description"} dropContent={apartment.description}/>
        <Dropdown titleValue={"Équipements"} dropContent={apartment.equipments}/>  
      </div>
    </div>
  )
}

export default Apartment