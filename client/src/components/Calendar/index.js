import { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client'
import { QUERY_EVENTS } from '../../utils/queries'
import { Spinner } from 'react-bootstrap'


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


  const { data, error } = useQuery(QUERY_EVENTS,
    {
      variables: { _id: `${userId}` }
    });


  const [currentEvent, setEvent] = useState({});

  console.log(currentEvent)

  if (data) {
    return (

      <div>
        <EventModal show={show} handleClose={handleClose} pass={currentEvent} />
        <FullCalendar
        eventColor={'#02353C'}
        eventBackgroundColor={'#449342'}
        eventBorderColor={'#02353C'}
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
  else {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
}

export default Calendar
