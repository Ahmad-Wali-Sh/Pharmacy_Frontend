import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"
import Medician from './Medician';
import Personalities from './Personalities/Personalities';
import Store from './Store'
import Sellings from "./Sellings"

export default function Blueprints(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button
                color="secondary"
                variant="contained"
                style={{ width: "15rem", height: "4rem" }}
                onClick={handleOpen}
            >
                <h2>{props.title}</h2>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container className='grid-container' style={{ width: "70%" }}>
                    <Grid container style={{ width: "100%", height: "4rem", }}>
                        <div className='title'>
                            <h2>ثبت اولیه</h2>
                        </div>
                    </Grid>
                    <Medician />
                    <Personalities />
                    <Store />
                    <Sellings />
                </Grid>

            </Modal>
        </>
    )
}