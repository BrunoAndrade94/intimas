import { TEXTO_HEADER } from "../../../assest/var-const";

const TopStrip = () => {
  return (
    <div className="top-strip background-principal">
      <div className="container">
        <p className="mb-0 mt-0 text-center">{TEXTO_HEADER}</p>
      </div>
    </div>
  );
};

export default TopStrip;
