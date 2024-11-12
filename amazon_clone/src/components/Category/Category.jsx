import { categoryInfos } from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import Style from "./Category.module.css";
function Category() {
  return (
    <section className={Style.Category_container}>
      {categoryInfos.map((infos) => {
        <CategoryCard data={infos} />;
      })}
    </section>

    // <CategoryCard />
  );
}

export default Category;
