import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { Grid } from '@mui/material'

const MainLayout: React.FC = (): JSX.Element => {
    return (
        <Grid container component={"main"} spacing={2}>
            <Grid item xs={2.5}>
                <Sidebar />
            </Grid>
            <Grid item xs={9.5}>
                <Outlet />
            </Grid>
        </Grid>
    )
}

export default MainLayout
