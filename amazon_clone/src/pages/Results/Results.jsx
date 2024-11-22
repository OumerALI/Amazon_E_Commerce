// import LayOut from "../../components/LayOut/LayOut";

// import style from "./Results.module.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/EndPoints";
// import React { useEffect } from "react-router-dom";

// function Results() {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <LayOut>
//       <div>Results</div>
//     </LayOut>
//   );
// }

// export default Results;

import { useEffect, useState } from "react"; // Importing from React
import { useParams } from "react-router-dom"; // React Router hooks
import axios from "axios";

import LayOut from "../../components/LayOut/LayOut"; // Custom component
import style from "./Results.module.css"; // CSS Module
import { productUrl } from "../../Api/EndPoints"; // API endpoint

function Results() {
  const [results, setResults] = useState([]); // State for storing results
  const { categoryName } = useParams(); // Getting route parameters

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`) // Fetching products by category
      .then((res) => {
        setResults(res.data); // Storing fetched data in state
      })
      .catch((err) => {
        console.log(err); // Logging errors
      });
  }, [categoryName]); // Adding dependency array for re-fetching on category change

  return (
    <LayOut>
      <div>Results</div>
      <ul>
        {results.map((product, index) => (
          <li key={index}>{product.name}</li> // Rendering product names
        ))}
      </ul>
    </LayOut>
  );
}

export default Results;
