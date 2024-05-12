import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const AuthLayout: React.FC = (): JSX.Element => {
    return (
        <main className='min-h-screen bg-gray-100'>
            <Outlet />
        </main>
    )
}

export default AuthLayout
