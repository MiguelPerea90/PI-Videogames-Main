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
    rating: 0,
    genres: [],
    platforms: [],
  });

  const validate = (form) => {
    const errors = {};
    if (!form.name) errors.name = "Enter your name";
    if (!form.description) errors.description = "you need a description";
    if (!form.released) errors.released = "Enter a date";
    if (form.rating > 5 || form.rating < 1)
      errors.rating = "Ingresa un ratig valido entre 1 y 5";
    if (!form.genres.length) errors.genres = "select your genres";
    if (!form.platforms) errors.platforms = "choose a platform";
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
      alert("Missing Data");
    } else {
      axios.post("http://localhost:3001/videogames", form);
      history.push("/home");
      alert("Videogame Created");
    }
  };

  const optionsRating = [
    { label: "1.0", value: "1.0" },
    { label: "1.5", value: "1.5" },
    { label: "2.0", value: "2.0" },
    { label: "2.5", value: "2.5" },
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

      <h1 className={styles.title}>Create Video Game</h1>

      <form onSubmit={handlerSubmit}>

          <div className={styles.labelImputDiv}>
            <label className={styles.labelEnter}>Name:
              <input
                className={styles.inputEnter}
                onChange={(e) => handlerChangeInput(e)}
                type="text"
                placeholder="Enter Name"
                name="name"
              />
            </label>
          </div>
          {error.name && <span>{error.name}</span> }
          
          <div className={styles.labelImputDiv}>
            <label className={styles.labelEnter}>Description:
              <input
                className={styles.inputEnter}
                onChange={(e) => handlerChangeInput(e)}
                type="text"
                placeholder="Description"
                name="description"
              />
            </label>
          </div>
          {error.description && <span>{error.description}</span>}
          
          <div className={styles.labelImputDiv}>
            <label className={styles.labelEnter}>Realeased Date:
              <input
                className={styles.inputEnter}
                onChange={(e) => handlerChangeInput(e)}
                type="date"
                name="released"
              />
            </label>
          </div>
          {error.released && <span className={styles.spanText}>{error.released}</span>}
          
          <div className={styles.genresText}>
            <label className={styles.labelEnter}>Rating:
              <Select
                className={styles.inputEnter}
                options={optionsRating}
                onChange={handlerChangeRating}>
              </Select>
            </label>
          </div>
          {error.rating && <span>{error.rating}</span>}
          
          <div className={styles.GenresDiv}>
              <label>Choose The Genres:
                <p>
                    {allGenresForm.map((element) => (
                      <label className="checksInputs" key={element}>
                        <input
                          type="checkbox"
                          name="genres"
                          id="genres"
                          value={element}
                          onClick={(event) => handlerGenresCheck(event)}
                          key={element.id}
                        />
                        {element}
                      </label>
                    ))}
                  </p>
              </label>
          </div>
          {error.genres && <span>{error.genres}</span>}
            
          <div className={styles.platformDiv}>
              <label>Choose The Platform:
                <p className="platformsInput">
                  {allPlatforms.map((element) => (
                    <label className="checksInputs" key={element}>
                      <input
                        type="checkbox"
                        name="platforms"
                        id="platforms"
                        value={element}
                        onClick={(event) => handlerPlatformsCheck(event)}
                        key={element.id}
                      />
                      {element}
                    </label>
                  ))}
                </p>
              </label>
          </div>
          {error.platforms && <span>{error.platforms}</span>}

          <div className={styles.submitHome}>
            <button className={styles.submitButton} type="Submit">
              SUBMIT
            </button>

            <Link to="/home" className={styles.homeButton}>
              <button type="button">home</button>
            </Link>
          </div>

      </form>

    </div>
  );
};

export default Form;





// esto no debería ser
// import * as React from "react";
// export const ExampleComponent: React.FC = () => {
//   return (
//     <div>
//       🛑 Invalid
//       <div>{{ foo: 'bar' }} </div>
//       <div>{new Date()} </div>
//       <div>{['array']} </div>
//     </div>
//   )
// }

