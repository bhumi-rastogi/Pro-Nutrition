import React, { useState } from 'react';
import './FoodBox.css';
import TotalCalorie from './TotalCalorie';

const LunchBox = ({ food }) => {
  const [box, count] = useState(0);
  const [calorie, setCal] = useState(0);

  const changes = (e) => count(e.target.value);
  const submit = (e) => {
    e.def();
    setCal(food.cal * box);
  };
  const res = () => {
    count(0);
    setCal(0);
  };

  return (
    <div className="boxs">
      <div className="ppr">
        <article className="famous">
          <div className="famous-l">
            <figure className="photo">
              <img src={food.img} alt="" />
            </figure>
          </div>
          <div className="famous-c">
            <div className="ct">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.cal}</small>
              </p>
            </div>
          </div>
          <div className="famous-r">
            <div className="add">
              <div className="maj">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter a number here"
                  onChange={changes}
                />
              </div>
              <div className="maj">
                <button onClick={submit} className="inf">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <TotalCalorie name={food.name} calorie={calorie} count={box} />
      <button className="res" onClick={res}>reset</button>
    </div>
  );
};

export default LunchBox;