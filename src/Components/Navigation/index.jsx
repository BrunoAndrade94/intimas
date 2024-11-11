import AllCategories from "./AllCategories";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="row">
        <AllCategories />
        <div className="nav2 col-sm-9"></div>
      </div>
    </nav>
  );
};

export default Navigation;
