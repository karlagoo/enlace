import {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from '../EventModal'
import {useHistory} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { QUERY_EVENTS, QUERY_CHATROOM} from '../../utils/queries'
import { QUERY_EVENT } from '../../utils/queries'
import {Button} from 'react-bootstrap'
const dayjs = require('dayjs')

//console.log(document.querySelector('.fc-event-title'))

const Calendar = () => {
  const history = useHistory();
  const title = 'Grab a coffee';
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
     <Button onClick={testChat}>testing chatroom</Button>
      
      </div>
    )
}

export default Calendar
