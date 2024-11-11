import { CategoryInfo } from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import Style from "./Category.module.css";
function Category() {
  return (
    <section className={Style.Category_container}>
      {CategoryInfo.map((infos) => {
        <CategoryCard data={infos} />;
      })}
    </section>
  );
}

export default Category;
