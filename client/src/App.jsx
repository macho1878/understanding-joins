import {useEffect, useState} from "react"

export default function App() {
  const [superHeroes, setSuperHeroes] = useState('')
  const [villians, setVillains] = useState('')

  useEffect(() => {
    getSuperHeroes()
    getVillains()
  })

  async function getSuperHeroes() {
    const response = await fetch('someurl')
    const json = await response.json()
    setSuperHeroes(json)
  }

  async function getVillains() {
    const response = await fetch('someurl')
    const json = await response.json()
    setVillains(json)
  }

  return (
    <div>
      {superHeroes.map(hero => {
        return (
          <div key={hero.hero_id}>
            <p>{hero.name}</p>
          </div>
        )
      })}
    </div>
  )
}