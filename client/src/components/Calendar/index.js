import {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'

import { useQuery } from '@apollo/client'
import { QUERY_EVENT } from '../../utils/queries'
const dayjs = require('dayjs')


const Calendar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const { data, error } = useQuery(QUERY_EVENT, {
    variables: {title: "Meet for Coffee"}
  });
  const event = data?.event || {} ;
  console.log(dayjs(event.date).format('YYYY-MM-DD'))

  console.log(`Events: ${event.date}`);
  const passThrough = {
    title: event.title,
    date: dayjs(event.date).format('MM-DD-YYYY'),
    desc: event.description,
    show: false

  }

    return (
      <div>
        <EventModal passThrough={passThrough} show={show} handleClose={handleClose} />
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[{title: event.title, date: dayjs(event.date).format('YYYY-MM-DD')}]}
        eventClick={handleShow}
      />
      
      </div>
    )
}

export default Calendar
