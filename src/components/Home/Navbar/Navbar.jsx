import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"
import Modal from '@material-ui/core/Modal'
import Box from "@material-ui/core/Box"
import Sells from "./Sells/Sells"
import Blueprint from "./Sells/Blueprint"
import Blueprints from "./Blueprints/Blueprints"
import Fund from "./Fund/Fund"
import Store from "./Store/Store"
import Employees from "./Employees"
import Barcode from "./Barcode"


export default function Navbar() {

    const theme = createTheme({
        palette: {
            secondary: {
                main: "rgb(40, 40, 40)"
            }
        }
    })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (

        <div className="navbar">
            <MuiThemeProvider theme={theme}>
                <Grid >
                    <ButtonGroup orientation="vertical">
                        <Sells title="فروشات"/>
                        <Blueprints title="ثبت اولیه"/>
                        <Fund title="صندوق"/>
                        <Store title="انبار"/>
                        <Employees title="مشخصات کارمندان"/>
                        <Barcode title="بارکد"/>
                    </ButtonGroup>
                </Grid>
            </MuiThemeProvider>




        </div>
    )
}