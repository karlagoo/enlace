import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import { useQuery } from '@apollo/client'
import { QUERY_EVENT } from '../../utils/queries'
const dayjs = require('dayjs')


const Calendar = () => {
  
  const { data, error } = useQuery(QUERY_EVENT, {
    variables: {title: "Meet for Coffee"}
  });
  const event = data?.event || {} ;
  console.log(dayjs(event.date).format('YYYY-MM-DD'))

  console.log(`Events: ${event.date}`);

    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[{title: event.title, date: dayjs(event.date).format('YYYY-MM-DD')}]}
      />
    )
}

export default Calendar
