import React from 'react'
import { Route, Router, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import {LoginScreen} from '../auth'
import { CalendarScreen } from '../calendar'
export const AppRouter = () => {
    const authStatus = 'authenticated'
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    {
                        (authStatus === 'not-authenticated')
                            ? <Route path='/auth/*' element={<LoginScreen />} />
                            :
                            <Route path='/*' element={<CalendarScreen />} />
                    }
                    <Route path='/*' element={<Navigate to="/auth/login" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

