import './styles/home.css'

import Filters from '../../components/Filters'
import CardsContainer from '../../components/CardsContainer'

import { useContext, useEffect, useState } from 'react'
import StateContext from '../../store/StateContext';

const Home = ({ typeOfEvents }) => {

  const { selectEvents } = useContext(StateContext)

  // const { allEvents, pastEvents, upcomingEvents, setMyEvents, setFilteredEvents } = useContext(StateContext)

  const [title, setTitle] = useState('')

  useEffect(() => {

   typeOfEvents ? selectEvents(typeOfEvents) : selectEvents('all')

    switch (typeOfEvents) {
      case 'all':
        setTitle(`Todos los eventos`)
        // setMyEvents(allEvents)
        // setFilteredEvents(allEvents)
        break

      case 'past':
        setTitle(`Eventos pasados`)
        // setMyEvents(pastEvents)
        // setFilteredEvents(pastEvents)
        break

      case 'upcoming':
        setTitle(`Eventos próximos`)
        // setMyEvents(upcomingEvents)
        // setFilteredEvents(upcomingEvents)
        break

      default:
        setTitle('Todos los eventos')
        // setMyEvents(allEvents)
        // setFilteredEvents(allEvents)
        break
    }
  }, [typeOfEvents])

  return (
    <main className='home'>
      <h2>{title}</h2>
      
      <Filters />

      <CardsContainer />
    </main>

  )
}

export default Home