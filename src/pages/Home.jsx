import React from "react"
import '../assets/styles/home.css'
import LocationCard from "../components/LocationCard"

function Home() {
  return (
    <main className="home">
      <div className="bckg-img">
        <div className="slight-opacity"></div>
        <div className="slogan">Chez vous, partout et ailleurs</div>
      </div>
      <section className="locations-list background--grey">
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </section>
    </main>
  )
}

export default Home