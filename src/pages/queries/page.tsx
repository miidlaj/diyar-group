import { Route, Routes } from 'react-router-dom'
import Calendar from './calendar/calendar'

export default function QueriesPage() {
  return (
    <>
        <Routes>

            <Route path='/calendar' element={<Calendar/>} />
        </Routes>
    </>
  )
}
