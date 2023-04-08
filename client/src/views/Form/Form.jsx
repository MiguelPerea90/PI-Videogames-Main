import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Select from "react-select";
import { Link, useHistory } from "react-router-dom";
import { getGenresForm, getPlatforms } from "../../redux/actions";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const allGenresForm = useSelector(state => state.genresForm);
  const allPlatforms = useSelector(state => state.platforms);

  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    image: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  const validate = (form) => {
    const errors = {};
    if (!form.name) errors.name = "Enter a Name";
    if (!form.description) errors.description = "Your Description";
    if (!form.released) errors.released = "Enter a date";
    if (form.rating > 5 || form.rating < 1)
      errors.rating = "Select a Rating";
    if (!form.genres.length) errors.genres = "Choose Your Genres";
    if (!form.platforms) errors.platforms = "Choose Your Platform";
    return errors;
  };

  const [error, setError] = useState({});

  useEffect(() => {
    const validations = validate(form);
    setError(validations);
    dispatch(getGenresForm());
    dispatch(getPlatforms());
  }, [dispatch, form]);

  const handlerChangeInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const handlerSubmit = () => {
    if (Object.values(error).length > 0) {
      alert("MISSING DATA").toUpperCase();
    } else {
      axios.post("/videogames", form);
      history.push("/home");
      alert("VIDEOGAME CREATED");
    }
  };

  const optionsRating = [
    { label: "1.0", value: "1.0" },
    { label: "1.5", value: "1.5" },
    { label: "2.0", value: "2.0" },
    { label: "2.5", value: "2." },
    { label: "3.0", value: "3.0" },
    { label: "3.5", value: "3.5" },
    { label: "4.0", value: "4.0" },
    { label: "4.5", value: "4.5" },
    { label: "5.0", value: "5.0" },
  ];

  const handlerChangeRating = (event) => {
    const value = event.value;
    setForm({ ...form, rating: value });
  };

  function handlerGenresCheck(e) {
      let target = e.target.value;
      if (e.target.checked) {
        setForm({
          ...form,
          genres: [...form.genres, e.target.value],
        });
      } else {
        setForm({
          ...form,
          genres: form.genres.filter((e) => e !== target),
        });
      }
  }

  function handlerPlatformsCheck(e) {
      let target = e.target.value;
      if (e.target.checked) {
        setForm({
          ...form,
          platforms: [...form.platforms, e.target.value],
        });
      } else {
        setForm({
          ...form,
          platforms: form.platforms.filter((e) => e !== target),
        });
      }
  }

  return (
      <div className={styles.container}>

        <div className={styles.headers}>
          <h1 className={styles.title}>Create Video Game</h1>
          <p>Los campos marcados con <span className={styles.parragraf}>*</span> son obligatorios</p>
        </div>

        <form onSubmit={handlerSubmit}>

          <div className={styles.containerForm}>

            <div className={styles.labelDiv}>
                <label className={styles.label}>Name <span>*</span></label>
                <input
                    className={styles.input}
                    onChange={(e) => handlerChangeInput(e)}
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                {error.name && <span>{error.name}</span> }
            </div>

            <div className={styles.labelDiv}>
                <label className={styles.label}>Description <span>*</span></label>
                <input
                    className={styles.input}
                    onChange={(e) => handlerChangeInput(e)}
                    type="text"
                    placeholder="Description"
                    name="description"
                />
                {error.description && <span>{error.description}</span>}
            </div>

            <div className={styles.labelDiv}>
                <label className={styles.label}>Realeased Date</label>
                <input
                    className={styles.input}
                    onChange={(e) => handlerChangeInput(e)}
                    type="date"
                    name="released"
                />
                {error.released && <span>{error.released}</span>}
            </div>

            <div className={styles.labelDiv}>
                <label className={styles.label}>Image</label>
                <input
                    className={styles.inputUrl}
                    onChange={(e) => handlerChangeInput(e)}
                    type="text"
                    placeholder="Url:"
                    name="image"
                />
            </div>

            <div className={styles.labelDiv}>
                <label className={styles.label}>Rating</label>
                <Select 
                    placeholder="Rating"
                    className={styles.select}
                    options={optionsRating}
                    onChange={handlerChangeRating}>
                </Select>
                {error.rating && <span>{error.rating}</span>}
            </div>

            <div className={styles.labelDiv}>
                  <label> <p className={styles.labelGenPlat}>Genres</p>
                    <p className={styles.labelGenPlatP}>
                        {allGenresForm.map((element) => (
                          <label className={styles.genresCheckBox} key={element}>
                            { " " + element}
                            <input
                              type="checkbox"
                              name="genres"
                              id="genres"
                              value={element}
                              onClick={(event) => handlerGenresCheck(event)}
                              key={element.id}
                            />
                          </label>
                        ))}
                      </p>
                  </label>
                  {error.genres && <span className={styles.spanGenPlat}>{error.genres}</span>}
            </div>
                
            <div className={styles.labelDiv}>
                  <label> <p className={styles.labelGenPlat}>Platforms</p>
                    <p className={styles.labelGenPlatP}>
                      {allPlatforms.map((element) => (
                        <label key={element}>
                          { " " + element}
                          <input
                            type="checkbox"
                            name="platforms"
                            id="platforms"
                            value={element}
                            onClick={(event) => handlerPlatformsCheck(event)}
                            key={element.id}
                          />
                        </label>
                      ))}
                    </p>
                  </label>
                  {error.platforms && <span className={styles.spanGenPlat}>{error.platforms}</span>}
            </div>

            <div className={styles.submitHome}>
                <button className={styles.submitButton} type="Submit">
                  SUBMIT
                </button>

                <Link to="/home" className={styles.homeButton}>
                  <button type="button">home</button>
                </Link>
            </div>
          </div>

        </form>

      </div>
  );
};

export default Form;
