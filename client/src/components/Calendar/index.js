import { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'


import { QUERY_EVENTS } from '../../utils/queries'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client'
import { Spinner, Button } from 'react-bootstrap'



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

 
  const [currentEvent, setEvent] = useState({});



  const { data, error } = useQuery(QUERY_EVENTS,
    {
      variables: { _id: `${userId}` }
    });



  console.log(currentEvent)

  if (data) {
    return (

      <div style={{backgroundColor: "white", color: "#02353C", boxShadow: '15px 15px 15px black'}}>
        <EventModal show={show} handleClose={handleClose} pass={currentEvent} />
        <FullCalendar
        style={{backgroundColor: "white"}}
        headerToolbar={
          {
            start: "today",
            center: 'title',
            end: 'prev next'
          }
        }
        eventColor={'#02353C'}
        eventBackgroundColor={'#449342'}
        eventBorderColor={'#449342'}
        eventDisplay={"block"}
        plugins={[ dayGridPlugin ]}
        initialView={"dayGridMonth"}
        events={data}
        eventClick={(e)=>{
          handleShow(e)
        }}  
      />

      
        <hr/>
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
