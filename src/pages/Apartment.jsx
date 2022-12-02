// React
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// Components
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Slider from "../components/Slider";
// Styles and images
import '../assets/styles/apartment.css'
import starGrey from '../assets/images/star-grey.svg'
import starRed from '../assets/images/star-red.svg'

function Apartment() {
  const params = useParams()

  const [apartment, setApartment] = useState(null) 
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("../datas.json")
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setApartment(data.find(a => a.id === params.id))
        console.log(data.find(a => a.id === params.id))
      })
      .catch(error => {
        console.error("Problem fetching data:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return "Loading..."
  }

  return (
    <div className="apartment">
      <Slider slides={apartment.pictures}/>

      <div className="container">
        <div className="wrapper column grow-1">
          <h2>{apartment.title}</h2>
          <span>{apartment.location}</span>

          <div className="align-tags">
            { apartment.tags.map(tag => {
                return <Tag tagValue={tag} key={`${apartment.id}_${tag}`}/>
              })
            }
          </div>
        </div>

        <div className="wrapper direction"> 
          <div className="star-container grow-1">
            {
              [...Array(parseInt(apartment.rating))].map(() => {
                return(
                  <img src= {starRed} alt="Star red" />
                )
              })
            }
            {
              [...Array(5 - parseInt(apartment.rating))].map(() => {
                return(
                  <img src= {starGrey} alt="Star grey" />
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