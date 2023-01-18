import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function Add() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [medician, setMedician] = React.useState([]);
  const [kind, setKind] = React.useState([]);
  const [country, setCountry] = React.useState([]);
  const [unit, setUnit] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/medician/")
      .then((data) => setMedician(data));
  }, []);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/kind/").then((data) => setKind(data));
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/country/")
      .then((data) => setCountry(data));
  }, []);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/unit/").then((data) => setUnit(data));
  }, []);

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

  console.log(medician.data);
  console.log(kind.data);
  console.log(country.data);
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
            <form>
              <label>Name: </label>
              <input type="text" className="inputbox--name"></input>
              <label>Code: </label>
              <input type="text" className="inputbox--code"></input>
            </form>
            <ReactSearchAutocomplete
              items={medician.data}
              fuseOptions={{ keys: ["brand_name"] }}
              resultStringKeyName="brand_name"
              placeholder="input the medician accordingly"
              formatResult={formatResult}
              showIcon={false}
              maxResults={5}
            />
          </div>
        </Grid>
      </Modal>
    </>
  );
}
