import { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'

import {useHistory} from 'react-router-dom';
import { QUERY_EVENTS, QUERY_CHATROOM, QUERY_EVENT } from '../../utils/queries'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client'
import { Spinner, Button } from 'react-bootstrap'



const Calendar = () => {

  const history = useHistory();
  const title = 'Grab a coffee';

  const userToken = Auth.getToken();
  const userInfo = Auth.getUserInfo(userToken);
  const userId = userInfo.data._id

  const [show, setShow] = useState(false);
  const {data:datas} = useQuery(QUERY_CHATROOM,
    {
      variables:{title:title}
    })
  const handleClose = () => setShow(false);
  const handleShow = (e) => {

    setEvent(
      e.event._def
    )

    setShow(true)
  };


  const testChat = (e)=>{
    e.preventDefault();
    history.push({
      pathname: '/chatroom',
      state: {datas}
      
    })
    // console.log(datas.chatroom)
  }
 
  const [currentEvent, setEvent] = useState({});



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

     <Button onClick={testChat}>testing chatroom</Button>
      

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
