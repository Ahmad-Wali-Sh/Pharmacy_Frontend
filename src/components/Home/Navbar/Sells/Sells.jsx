import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"
import Add from './Add';
import Blueprint from './Blueprint';
import Diabets from './Diabets';
import Hygiene from './Hygiene';
import Other from './Other';

export default function Sells(props) {
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
                <>
                    <Grid container className='grid-container' style={{ width: "80%" }}>
                        <Grid container style={{ width: "100%", height: "4rem", }}>
                            <div className='title'>
                                <h2>فروشات</h2>
                            </div>
                        </Grid>
                        <Add />
                        <Blueprint />
                        <Diabets />
                        <Hygiene />
                        <Other />
                    </Grid>
                </>
            </Modal>
        </>
    )
}