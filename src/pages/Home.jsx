import React from "react"
import '../assets/styles/home.css'
import LocationCard from "../components/LocationCard"

function Home() {
  return (
    <main className="home">
      <div className="bckg-img">
        <div className="slight-opacity"></div>
        <span>Chez vous, partout et ailleurs</span>
      </div>
      <section className="locations-list">
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