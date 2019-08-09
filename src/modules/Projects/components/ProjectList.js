import React from "react";

const Container = props => {
  const { shops } = props.projects;
  const handleFetchShop = () => {
    props.fetchShops();
  };

  return (
    <>
      <div>this is component project list</div>
      <p>List shops</p>
      <button type="button" onClick={handleFetchShop}>
        Fetch data shops
      </button>
      <ul>
        {shops.length > 0 &&
          shops.map((val, key) => {
            return <li key={key}>{val.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Container;
