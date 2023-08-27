import React from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import { Categories, SortPopup, Pizza, Skelet } from "../components";

//reducers
import { getPizzas } from "../store/slices/HomePageSlice";
import { setCategory, setSortBy } from "../store/slices/filter";
import { ADD_PIZZA_CART } from "../store/slices/cart";

const items = [
  // "Все",
  "Мясные",
  "Вегетерианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sort = [
  { type: "rating", name: "популярности" },
  { type: "price", name: "цене" },
  { type: "name", name: "алфавиту" },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { pizzas, isLoaded } = useSelector((state) => state.home);
  const { category, sortBy } = useSelector((state) => state.filter);
  const counts = useSelector(({ cart }) => cart.items);

  console.log("render home");

  const addPizzaCart = (pizzaObj) => {
    console.log(pizzaObj);
    dispatch(ADD_PIZZA_CART(pizzaObj));
  };

  React.useEffect(() => {
    dispatch(getPizzas({ category, sortBy }));
  }, [dispatch, category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={items} active={category} setCategory={setCategory} />
        <SortPopup sort={sort} sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? Array(4)
              .fill(0)
              .map((_, index) => <Skelet key={index} />)
          : pizzas.map((item) => {
              return (
                <Pizza
                  key={item.id}
                  {...item}
                  addedCount={counts[item.id] && counts[item.id].length}
                  // isLoaded={true}
                  addPizzaCart={addPizzaCart}
                />
              );
            })}
      </div>
    </div>
  );
};

export default HomePage;
