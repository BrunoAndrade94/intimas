import { TIPOS_CATEGORIAS } from "../../../assest/var-const/categories";
import Categories from "../Categories";

const AllCategories = () => {
  return (
    <div className="col-sm-3">
      <Categories categoria={TIPOS_CATEGORIAS} />
    </div>
  );
};

export default AllCategories;
