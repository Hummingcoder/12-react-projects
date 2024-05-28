import React, { useEffect, useState } from "react";

const LoadData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setdisable] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      if (products && products.length <= 0) {
        setProducts(data.products);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setdisable(true);
    }
  }, [products]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="flex flex-col gap-3 mb-12">
      <div className=" grid grid-cols-4">
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className=" max-h-[300px] border border-black rounded-lg overflow-hidden m-1 p-1 inline-block"
              >
                <img
                  className="w-full object-cover h-[80%]"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      {disable ? (
        <p className="  mx-auto px-6 py-1">no more data...</p>
      ) : (
        <button
          onClick={() => setCount(count + 1)}
          className="border border-black rounded-lg mx-auto px-6 py-1"
        >
          load more
        </button>
      )}
    </div>
  );
};

export default LoadData;
