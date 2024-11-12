import Style from "./Category.module.css";

import PropTypes from "prop-types";

function CategoryCard({ data }) {
  return (
    <div className={Style.category}>
      <span>
        <h2>{data.title}</h2>
      </span>
      <a href="">
        <img src={data.imgLink} alt={data.title} />
      </a>
      <p>shop now</p>
    </div>
  );
}

CategoryCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
