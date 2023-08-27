import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  items,
  active,
  setCategory,
}) {
  const dispatch = useDispatch();

  console.log("render categeries");

  return (
    <div className="categories">
      <ul>
        <li
          className={active === null ? "active" : ""}
          onClick={() => dispatch(setCategory(null))}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            key={`${item}_${index}`}
            className={active === index ? "active" : ""}
            onClick={() => dispatch(setCategory(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  // active: PropTypes.number.isRequired,
  setCategory: PropTypes.func,
};

Categories.defaultProps = {
  items: [],
  active: 0,
};

export default Categories;
