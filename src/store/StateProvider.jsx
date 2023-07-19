import { useEffect, useState } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {

  const [currentDate, setCurrentDate] = useState('')
  const [allEvents, setAllEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [myEvents, setMyEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchedEvent, setSearchedEvent] = useState(null)

  const loadEvents = (events) => {
    setMyEvents(events)
    setAllEvents(events)
    setFilteredEvents(events)
  }

  useEffect(() => {
    setPastEvents(allEvents.filter(event => currentDate > event.date))
    setUpcomingEvents(allEvents.filter(event => currentDate <= event.date))
  }, [allEvents])

  const selectEvents = (type) => {
    switch (type) {
      case 'all':
        setMyEvents(allEvents)
        setFilteredEvents(allEvents)
        break

      case 'past':
        setMyEvents(pastEvents)
        setFilteredEvents(pastEvents)
        break

      case 'upcoming':
        setMyEvents(upcomingEvents)
        setFilteredEvents(upcomingEvents)
        break
    }
  }

  const initialState = {
    currentDate,
    setCurrentDate,
    allEvents,
    pastEvents,
    upcomingEvents,
    myEvents,
    setMyEvents,
    filteredEvents,
    setFilteredEvents,
    searchedEvent,
    setSearchedEvent,
    loadEvents,
    selectEvents
  }
  

  return (

    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>

  )
}

export default StateProvider