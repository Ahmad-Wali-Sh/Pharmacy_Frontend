import React, { useEffect } from "react"
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"
import axios from "axios"
import { ReactSearchAutocomplete } from "react-search-autocomplete"



export default function Add() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [medician, setMedician] = React.useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/medician/').then(
            data => setMedician(data)
        )
    },[])

    const formatResult = (item) => {
        return (
            <>
            <div className="bar">
                <image className="bar-image" src={item.image}/>
                <div>
                    country: {item.country}
                </div>
                <div>
                    brand_name: {item.brand_name}
                    generic_name: {item.generic_name}
                </div>

            </div>
            </>
        )
    }
    
    console.log(medician.data)
    return (
        <>
            <Grid item className='grid-item' style={{ margin: "0.5rem" }} onClick={handleOpen}>
                <h2>ثبت نسخه</h2>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container className='grid-container' style={{ width: "70%", marginTop: "2rem" }}>
                    <Grid container style={{ width: "100%", height: "4rem", }}>
                        <div className='title'>
                            <h2> فروشات | ثبت نسخه</h2>
                        </div>
                    </Grid>
                    <div>
                        <form>
                            <label>Name: </label>
                            <input type="text" className="inputbox--name"></input>
                            <label>Code: </label>
                            <input type="text" className="inputbox--code"></input>
                            
                        </form>
                        <ReactSearchAutocomplete
                        items={medician.data}
                        fuseOptions={{keys: ["brand_name"]}}
                        resultStringKeyName="brand_name"   
                        placeholder="input the medician accordingly"
                        formatResult={formatResult}
                        />
                    </div> 
                    
                </Grid>

            </Modal>

        </>
    )
}