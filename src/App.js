import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import ImageCard from "./components/ImageCard";

import MARS from "./mars.png";

const App = () => {
  const [query, setQuery] = useState("2020-08-12");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?",
        {
          params: {
            earth_date: query,
            page: 2,
            api_key: `${process.env.REACT_APP_KEY}`
          }
        }
      );
      setImages(data.photos);
    };

    search();
  }, [images.length, query]);

  const imageResults = images.map(img => {
    return <ImageCard img={img} />;
  });

  const noResultsError = () => {
    return (
      <div className="ui raised padded text container inverted red segment">
        <h2 className="header">Error</h2>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="ui raised very padded text container segment">
        <img src={MARS} alt="mars" className="ui medium image centered" />
        <h2 className="ui header centered ">Mars Rover</h2>
        <form className="ui form" onSubmit={e => e.preventDefault()}>
          <div className="field">
            <label htmlFor="input">Enter Date</label>
            <input
              type="date"
              value={query}
              className="input"
              id="input"
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
      {!images ? noResultsError : null}
      <div className="ui raised padded tet container segment">
        <div className="ui center cards">{images ? imageResults : null}</div>
      </div>
    </Fragment>
  );
};

export default App;
