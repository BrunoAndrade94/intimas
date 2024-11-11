import {
  CATEGORIA_CONJUTOS,
  CATEGORIA_CONTATO,
  CATEGORIA_MAIS_VENDIDOS,
  CATEGORIA_MODA_PRAIA,
  CATEGORIA_PROMOCAO,
  CATEGORIA_SUTIA,
} from "../../../assest/var-const/categories";
import Categories from "../Categories";

const ListCategories = () => {
  return (
    <div className="list-categories">
      <div className="category">
        <Categories categoria={CATEGORIA_PROMOCAO} />
      </div>{" "}
      <div className="category">
        <Categories categoria={CATEGORIA_MODA_PRAIA} />
      </div>{" "}
      <div className="category">
        <Categories categoria={CATEGORIA_CONJUTOS} />
      </div>{" "}
      <div className="category">
        <Categories categoria={CATEGORIA_MAIS_VENDIDOS} />
      </div>{" "}
      <div className="category">
        <Categories categoria={CATEGORIA_CONTATO} />
      </div>
    </div>
  );
};

export default ListCategories;
