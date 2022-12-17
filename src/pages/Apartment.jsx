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
function useSetFetcherApartment() {
  
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
        throw new Error("Network response was not ok")
      })
      .then(data => {
        const findData = data.find(a => a.id === params.id)
        if (findData) {
          setApartment(findData)
        } else {
          alert('Données introuvable, vous allez être redirigé')
          setRedirect(true)
        }
      })
      .catch(error => {
        console.error("Problem fetching Data: ", error)
        alert('Données introuvable, vous allez être redirigé')
        setRedirect(true)
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
  const [loading, redirect, apartment] = useSetFetcherApartment()
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1080 // className will change before or after 1080px

  /**
   * Get window's width on resize
   */
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [])
  
  // Store className to pass in props for the dropdown
  let widthClass = width < breakpoint ? "full-width" : "half-width"

  // redirect to 404 if apartment is null
  if (redirect) {
    return <Navigate replace to="/404"/>
  }
  
  if (loading) { // until 'loading' passes to false => show the loader component
    return <Loader />
  }

  /**
   * Set an array of boolean used to define if a star is red or grey
   * true == red
   * false == grey
   */
  const starsLoop = () => {
    const starsArray = []
    for (let i = 1; i <= 5; i++) { // We choose 5 here because it's the maximum number of stars we can choose
      if (i <= apartment.rating) {
        starsArray.push(true)
      } else {
        starsArray.push(false)
      }
    }
    return starsArray
  } 

  return (
    <div className="apartment">
      <Slider slides={apartment.pictures}/>

      <div className="container">
        <div className="wrapper column grow-1">
          <h2>{apartment.title}</h2>
          <span className="place">{apartment.location}</span>

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
              starsLoop().map((star, index) => {
                if (star) {
                  return <img src= {starRed} alt="Star red" key={`star_red_${index}`}/>
                } else {
                  return <img src= {starGrey} alt="Star grey" key={`star_grey_${index}`}/>
                }
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
        <Dropdown widthClass={widthClass} titleValue={"Description"} dropContent={apartment.description} />
        <Dropdown widthClass={widthClass} titleValue={"Équipements"} dropContent={apartment.equipments} isList={apartment.equipments.length > 1 ? true : false}/>  
      </div>
    </div>
  )
}

export default Apartment