import React from "react"
import Button from '@material-ui/core/Button'
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"


export default function Medician() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)



    return (
        <>
            <Grid item className='grid-item' style={{ margin: "0.5rem" }} onClick={handleOpen}>
                <h2>بخش دوا</h2>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container className='grid-container' style={{width: "70%"}}>
                <Grid container style={{ width: "100%", height: "4rem", }}>
                        <div className='title'>
                            <h2>ثبت اولیه | بخش دوا</h2>
                        </div>
                    </Grid>
                    <Grid item className='grid-item' style={{margin: "0.5rem"}}>
                            <h2>Comming Soon...</h2>
                    </Grid>
                   
                </Grid>

            </Modal>
          
        </>
    )
}