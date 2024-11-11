import AllCategories from "./AllCategories";
import ListCategories from "./ListCategories";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="row">
        <div className="container mt-4">
          <div className="row">
            <AllCategories />
            <ListCategories />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
