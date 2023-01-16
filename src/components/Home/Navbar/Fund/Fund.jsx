import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"
import Report from './Report';
import Settings from './Settings';

export default function Fund(props) {
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
                            <h2>صندوق</h2>
                        </div>
                    </Grid>
                    <Report />
                    <Settings />
                </Grid>

            </Modal>
        </>
    )
}