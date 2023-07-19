import './styles/checkboxesBar.css'
import Checkbox from './Checkbox'
import StateContext from '../../../store/StateContext';
import { useContext, useEffect, useState } from 'react'

const CheckboxesBar = () => {

  const { myEvents, setFilteredEvents } = useContext(StateContext)

  let categories = []
  myEvents.forEach(event => {
    if (!categories.includes(event.category)) categories.push(event.category)
  })

  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    // console.log('categorías seleccionadas: ', selectedCategories)
    if (selectedCategories.length > 0) {
      setFilteredEvents(myEvents.filter(event => selectedCategories.includes(event.category)))
    } else {
      setFilteredEvents(myEvents)
    }
  }, [selectedCategories])


  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, value])
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value))
    }
  }


  return (
    <div className='checkboxes-bar'>
      {
        categories.map((category) => {

          return (
            <Checkbox
              key={category}
              value={category}
              handleCheckboxChange={handleCheckboxChange} />
          )
        })
      }
    </div>
  )
}

export default CheckboxesBar