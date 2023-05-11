// import { useSelector } from "react-redux";
// import { useState } from "react";
// import React from "react";
// import Card from "../Card/Card";
// import Paginado from "../Paginado/Paginado";
// import styles from "./CardsContainer.module.css";

// const CardsContainer = () => {
//   // Hace una función similar a la de mapStateToProps, en la constatnte
//   // allVideogames me traigo todo lo que está en el estado videogames.
//   const allVideogames = useSelector((state) => state.videogames);

//   // // PAGINADO
//   const [currentPage, setCurrentPage] = useState(1);

//   const [videogamesPerPage] = useState(15); // setVideogamesPerPage INCLUIR

//   const indexOfLastVideogame = currentPage * videogamesPerPage; // 15

//   const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; //0

//   const currentVideogames = allVideogames.slice(
//     indexOfFirstVideogame,
//     indexOfLastVideogame
//   );

//   const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//       <div className={styles.cardsContainerHome}>

//           <div className={styles.containerCurrent}>
//             <span>Página {currentPage} </span>
//           </div>
          
//           <div className={styles.cardsContainer}>
//             {currentVideogames?.map((videogame) => {
//               return (
//                     <div key={videogame.name}>
//                       <Card 
//                       id={videogame.id}
//                       image={videogame.image}
//                       rating={videogame.rating}
//                       name={videogame.name}
//                       Genres={videogame.Genres}
//                       /> 
//                     </div>
//                 );
//               })}
//           </div>

//           <div  className={styles.containerPaginado}>
//             <Paginado
//               videogamesPerPage={videogamesPerPage}
//               allVideogames={allVideogames.length}
//               paginado={paginado}
//             />
//           </div>
      
//       </div>
//   );
// };

// export default CardsContainer;


import { useSelector } from "react-redux";
import { useState } from "react";
import React from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import styles from "./CardsContainer.module.css";
import Loader from "../../Loader/Loader";

const CardsContainer = ({ isLoading }) => {
  // Hace una función similar a la de mapStateToProps, en la constatnte
  // allVideogames me traigo todo lo que está en el estado videogames.
  const allVideogames = useSelector((state) => state.videogames);

  // // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);

  const [videogamesPerPage] = useState(15); // setVideogamesPerPage INCLUIR

  const indexOfLastVideogame = currentPage * videogamesPerPage; // 15

  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; //0

  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
      <div className={styles.cardsContainerHome}>
        {isLoading ? (
          <Loader />
          ) : (
          <div className={styles.cardsContainer}>

            <div className={styles.containerCurrent}>
                <span>Página {currentPage} </span>
            </div> 

            {currentVideogames?.map((videogame) => {
                return (
                      <div key={videogame.id}>
                        <Card 
                        id={videogame.id}
                        image={videogame.image}
                        rating={videogame.rating}
                        name={videogame.name}
                        Genres={videogame.Genres}
                        /> 
                      </div>
                  );
            })}

            <div  className={styles.containerPaginado}>
              <Paginado
                  videogamesPerPage={videogamesPerPage}
                  allVideogames={allVideogames.length}
                  paginado={paginado}
                />
            </div> 
            
          </div>
        )}
      </div>
  );
};

export default CardsContainer;
