import Style from "./Category.module.css";
function CategoryCard({ data }) {
  return (
    <div className={Style.category}>
      <a href="">
        <span>
          <h2> {data.title} </h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
