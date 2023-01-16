import React from "react"
import Grid from "@material-ui/core/Grid"


export default function Header () {

    return (
        <div className="header">
        <Grid container justifyContent="space-between">
            <Grid item xs={2} >
            <img src="../images/Logo.png" className="sharif-logo"/>
            </Grid>
            <Grid item>
            </Grid>
            <Grid item xs={3} direction="column" justifyContent="center" className="align">
                <h2 className="text">Sharif Pharmacy | App</h2>
                <h4 className="user">Manager / Admin</h4>
            </Grid>
        </Grid>
        </div>
    )
}