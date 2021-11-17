import {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client'
import { QUERY_ACCEPTED, QUERY_EVENTS } from '../../utils/queries'
const dayjs = require('dayjs')


const Calendar = () => {
  const userToken = Auth.getToken();
    const userInfo = Auth.getUserInfo(userToken);
    const userId = userInfo.data._id

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
     
      setEvent(
        e.event._def
      )
    
    setShow(true)
  };
  
    
    const { data, error } = useQuery(QUERY_ACCEPTED,
    {
        variables: {_id: `${userId}`}
    });

    // const { data, error } = useQuery(QUERY_EVENTS)
  
 
  const [currentEvent, setEvent] = useState({});

  console.log(data)


    return (

      <div>
        <EventModal show={show} handleClose={handleClose} pass={currentEvent} />
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={data.plannedEvents.plannedEvents}
        eventClick={(e)=>{
          handleShow(e)
        }}  
      />
      
      </div>
    )
}

export default Calendar
