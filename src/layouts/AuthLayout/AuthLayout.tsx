import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const AuthLayout: React.FC = (): JSX.Element => {
    return (
        <main className='bg-gray-100'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default AuthLayout
