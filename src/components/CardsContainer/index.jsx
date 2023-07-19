import './styles/cardsContainer.css'

import Card from './Card'
import { useContext } from 'react'
import StateContext from '../../store/StateContext';

const CardsContainer = () => {

  const { filteredEvents, searchedEvent } = useContext(StateContext)

  // console.log(filteredEvents)
  const eventsToPrint = searchedEvent ? searchedEvent : filteredEvents

  // const eventsToPrint = filteredEvents

  return (
    <div className='card-container'>
      {
        eventsToPrint.map((event) => {
          return (
            <Card
              key={event._id}
              name={event.name}
              date={event.date}
              description={event.description}
              category={event.category}
              place={event.place}
              capacity={event.capacity}
              assistance={event.assistance}
              estimate={event.estimate}
              path={`/details/${event._id}`} />
          )
        })
      }
    </div>
  )
}

export default CardsContainer