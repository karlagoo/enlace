import {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'

import { useQuery } from '@apollo/client'
import { QUERY_EVENTS } from '../../utils/queries'
import { QUERY_EVENT } from '../../utils/queries'
const dayjs = require('dayjs')

//console.log(document.querySelector('.fc-event-title'))

const Calendar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
     
      setEvent(
        e.event._def
      )
    
    setShow(true)
  };
  
  const { data, error } = useQuery(QUERY_EVENTS)
 
  const [currentEvent, setEvent] = useState({});

  // const event = data?.event || {} ;
  // console.log(dayjs(event.date).format('YYYY-MM-DD'))

  // console.log(`Events: ${event.date}`);
  // const passThrough = {
  //   title: event.title,
  //   date: dayjs(event.date).format('MM-DD-YYYY'),
  //   desc: event.description,
  //   show: false

  // }
  console.log(data);


    return (

      <div>
        {/* {data.events.map((event)=>(<EventModal passThrough={data} show={show} handleClose={handleClose} />))} */}
        <EventModal show={show} handleClose={handleClose} pass={currentEvent} />
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={data}
        eventClick={(e)=>{
          handleShow(e)
        }}
        
        
      />
      
      </div>
    )
}

export default Calendar
