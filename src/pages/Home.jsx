import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../assets/styles/home.css'
import LocationCard from "../components/LocationCard"

function Home() {
  const [locations, setLocations] = useState(null) 
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("./datas.json")
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setLocations(data)
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
    <main className="home">
      <div className="bckg-img">
        <div className="slight-opacity"></div>
        <div className="slogan">Chez vous, partout et ailleurs</div>
      </div>
      <section className="locations-list background--grey">
        { locations.map(location => {
            return (
              <Link to={`/fiche-logement/${location.id}`} className="location-link">
                {
                  <LocationCard backgroundImage={location.cover} titleValue={location.title} key={location.id}/>
                }
              </Link>
            )
          }) 
        }
      </section>
    </main>
  )
}

export default Home