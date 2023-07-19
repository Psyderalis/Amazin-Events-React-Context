import './styles/filters.css'
import SearchBar from './SearchBar'
import CheckboxesBar from './CheckboxesBar'

const Filters = ({ filteredEvents, setFilteredEvents, setSearchedEvent }) => {

  return (
    <div>
      <SearchBar
        // filteredEvents={filteredEvents}
        // setSearchedEvent={setSearchedEvent}
         />

      <CheckboxesBar
        // setFilteredEvents={setFilteredEvents}
         />
    </div>
  )
}

export default Filters