import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import NotificationManager from "react-notifications/lib/NotificationManager";

export default function Add() {

  const [open, setOpen] = React.useState(false);
  const [medician, setMedician] = React.useState([]);
  const [kind, setKind] = React.useState([]);
  const [country, setCountry] = React.useState([]);
  const [unit, setUnit] = React.useState([]);
  const [list, setList] = React.useState([]);
  const [mediArray, setMediArray] = React.useState([])
  const [form, setForm] = React.useState({
    name: "",
    code: 0,
    medician: [],
    prescription_number: "1304-12-1"
  })
  
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/unit/").then((data) => setUnit(data));
    axios.get("http://127.0.0.1:8000/api/country/").then((data) => setCountry(data));
    axios.get("http://127.0.0.1:8000/api/kind/").then((data) => setKind(data));
    axios.get("http://127.0.0.1:8000/api/medician/").then((res) => setMedician(res), NotificationManager.info("Data Recieved..."));
  }, []);



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (item) => {
    setList((prev) => [...prev, item]);
    setMediArray((prev) => [...prev, item.id])
  };

  const handleChange = (event) => {
    if (event.target.name !== "medician")
    setForm({
      ...form,
     [event.target.name]: event.target.value
    }) 
 }

 const PostHandle = async (e) => {
   e.preventDefault()
   const postForm = new FormData();
   postForm.append("name", form.name)
   postForm.append("code", form.code)
   for (let i = 0; i < mediArray.length; i++){
     postForm.append("medician", mediArray[i])
   }
   postForm.append("prescription_number", form.prescription_number)

   console.log(postForm)

   try {
     const response = await axios({
       method: "POST",
       url: "http://127.0.0.1:8000/api/prescription/",
       data: postForm,
       headers: {
         'Content-Type': 'Multipart/form-data'
       }
     })
     console.log(response)
     NotificationManager.success("Data Sent. Successfuly!")
    } catch (err) {
     NotificationManager.erorr("Not Sent, Check it again.")
     console.log(err)
   }
 }


  const formatResult = (item) => {


    const kindMap = (kindName, url) => {
      return kind.data.map((task) =>
        task.id == item.kind && task.name == kindName
          ? url && <img className="bar-kind" src={url} />
          : ""
      );
    };

    const countryMap = (countryName, url) => {
      return country.data.map((task) =>
        task.id == item.country && task.name == countryName
          ? url && <img className="bar-image" src={url} />
          : ""
      );
    };

    return (
      <>
        <div className="bar">
          {item.image == null ? (
            <img className="bar-image" src={"/images/noimage.jpg"}></img>
          ) : (
            <img
              className="bar-image"
              src={item.image.substring(38)}
              alt={item.image}
            />
          )}
          <div>
            {kind.data.map((itemer) =>
              kindMap(
                itemer.name,
                itemer.name == "Capsul"
                  ? "/images/capsul.jpg"
                  : itemer.name == "Sharbat"
                  ? "/images/sherbat.jpg"
                  : itemer.name == "Tablet"
                  ? "/images/tablet.jpg"
                  : "/images/noimage.jpg"
              )
            )}
          </div>
          <div>
            {item.country == null ? (
              <img className="bar-image" src={"/images/noimage.jpg"}></img>
            ) : (
              country.data.map((itemer) =>
                countryMap(
                  itemer.name,
                  itemer.name == "Iran"
                    ? "/images/iran.jpg"
                    : itemer.name == "Pakistan"
                    ? "/images/pakistan.jpg"
                    : itemer.name == "Afghanistan"
                    ? "/images/afghanistan.jpg"
                    : itemer.name == "India"
                    ? "/images/india.jpg"
                    : itemer.name == "Turkey"
                    ? "/images/turkey.jpg"
                    : itemer.name == "Chaina"
                    ? "/images/china.jpg"
                    : "/images/noimage.jpg"
                )
              )
            )}
          </div>
          <div>
            <div className="bar-container">
              <div className="first-bar-container">
                <span className="brand-name">{item.brand_name}</span>
                <span>
                  {item.ml}{" "}
                  {unit.data.map(
                    (unit) => unit.id == item.unit && <span>{unit.name}</span>
                  )}
                </span>
                <span className="brand-name">
                  {kind.data.map((kind) => kind.id == item.kind && kind.name)}
                </span>
                <div>
                  <span className="brand-name">{item.location}</span>
                </div>
                <div>
                  <span className="generic-name">{item.generic_name}</span>
                </div>
                <div>
                  <span className="generic-name">
                    موجودی: {item.maximum_existence}
                  </span>
                </div>
              </div>
              <div className="flex-row">
                <span className="price">&nbsp;</span>
                <span className="price">قیمت: {item.price}</span>
                <span className="price">تعداد در پاکت: {item.no_pocket}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  let sum = 0;
  let number = 0;

  return (
    <>
      <Grid
        item
        className="grid-item"
        style={{ margin: "0.5rem" }}
        onClick={handleOpen}
      >
        <h2>ثبت نسخه</h2>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          className="grid-container"
          style={{ width: "70%", marginTop: "2rem" }}
        >
          <Grid container style={{ width: "100%", height: "4rem" }}>
            <div className="title">
              <h2> فروشات | ثبت نسخه</h2>
            </div>
          </Grid>
          <div>
            <form onSubmit={PostHandle}>
              <input type="text" className="inputbox--code" name="code" onChange={handleChange}></input>
              <label >نام </label>
              <input type="text" className="inputbox--name" name="name" onChange={handleChange}></input>
              <label>کد </label>
            
            <ReactSearchAutocomplete
              items={medician.data}
              fuseOptions={{ keys: ["brand_name"] }}
              resultStringKeyName="brand_name"
              placeholder="input the medician accordingly"
              formatResult={formatResult}
              showIcon={false}
              maxResults={5}
              onSelect={handleSelect}
              name="medician"
            />
            <div className="prescription-list">
              {list != "" && (
                <div className="flex-title">
                  <h4>Brand Name</h4>
                  <h4>Price</h4>
                  <h4>Number</h4>
                </div>
              )}
              {list.map((item) => (
                <>
                  <div className="flex">
                    <h4 style={{ width: "6rem" }}>{item.brand_name}</h4>
                    <h4 style={{ width: "2.3rem" }}>{item.price}</h4>
                    <h4>{item.no_pocket}</h4>
                  </div>
                  <div className="hidden">{(sum += item.price)}</div>
                  <div className="hidden">{(number += item.no_pocket)}</div>
                </>
              ))}
              <div>
                {list != "" && (
                  <>
                  <div className="flex-title">
                    <h4 style={{ width: "4rem", marginLeft: "2rem" }}>Total</h4>
                    <h4 style={{ width: "2.5rem" }}>{sum}</h4>
                    <h4 style={{ width: "2rem" }}>{number}</h4>
                  </div>
                  <div className="button-box">
                    <button type="submit" className="submit-button">Submit</button>
                  </div>
                  </>
                )}
              </div>
            </div>
            </form>
          </div>
        </Grid>
      </Modal>
    </>
  );
}
