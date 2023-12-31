import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Pizza = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  addPizzaCart,
  addedCount,
}) => {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSizes, setActiveSizes] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSizes(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSizes],
      type: availableTypes[activeType],
    };
    addPizzaCart(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((item, index) => (
            <li
              key={`${item}_${index}`}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {item}
            </li>
          ))}
          {/* <li className="active">тонкое</li>
          <li>традиционное</li> */}
        </ul>
        <ul>
          {availableSizes.map((item, index) => {
            return (
              <li
                key={`${item}_${index}`}
                onClick={() => onSelectSize(index)}
                className={classNames({
                  active: availableSizes[activeSizes] === item,
                  disabled: !sizes.includes(item),
                })}
              >
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={onAddPizza}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

//imageUrl, name, price, types, sizes

Pizza.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  addPizzaCart: PropTypes.func,
};

Pizza.defaultProps = {
  types: [],
};

export default Pizza;
