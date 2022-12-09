// React
import React, { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
// Components
import LocationCard from "../components/LocationCard"
import Loader from "../components/Loader"
// Styles
import '../assets/styles/home.css'

/**
 * Fetch datas from datas.json
 * return state of setLocations (json) an setLoading (boolean)
 */
function setFetcher() {
  const [locations, setLocations] = useState(null) 
  const [loading, setLoading] = useState(true)
  const [redirect, setRedirect] = useState(false)

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
        setRedirect(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return [ locations, loading, redirect ]
}

function Home() {

  // States returned from setFetcher function
  const [locations, loading, redirect] = setFetcher()

    // redirect to 404 if apartment is null
    if (redirect) {
      return <Navigate replace to="/404"/>
    }
  
  if (loading) { // until 'loading' passes to false => show the loader component
    return <Loader />
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
              <Link to={`/fiche-logement/${location.id}`} className="location-link" key={location.id}>
                {
                  <LocationCard backgroundImage={location.cover} titleValue={location.title}/>
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