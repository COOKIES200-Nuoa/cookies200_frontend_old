import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

const AdminLayout: React.FC = (): JSX.Element => {
    return (
        <main>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </Grid>
        </main>
    );
};

export default AdminLayout;
