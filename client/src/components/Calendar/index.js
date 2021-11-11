import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import { useQuery } from '@apollo/client'
import { QUERY_EVENT } from '../../utils/queries'


const Calendar = () => {
  
  const { data, error } = useQuery(QUERY_EVENT, {
    variables: {title: "Meet for Coffee"}
  });
  //const events = data?.event || [] ;

  console.log(`Events: ${data}`);

    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        //events={events}
      />
    )
}

export default Calendar
