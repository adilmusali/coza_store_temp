import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/store");
    setData(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/store/${id}`);
    await getData();
  };

  const checkData = (e) => {
    setValue(e.target.value);
  };

  const toggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="py-[100px]">
          <div className="flex flex-col">
            <h2 className="text-[40px] uppercase mb-[30px] font-bold">
              product overview
            </h2>
            <div className="flex justify-between">
              <div className="flex gap-[40px]">
                <span>All Products</span>
                <span>Women</span>
                <span>Men</span>
                <span>Bag</span>
                <span>Shoes</span>
                <span>Watches</span>
              </div>
              <div className="flex gap-[20px]">
                <input
                  type="text"
                  className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  onChange={checkData}
                />
                <button
                  onClick={toggle}
                  className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"
                >
                  Sort by Price
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-wrap mt-[50px] gap-y-[40px]">
            {data
              .sort((a, b) =>
                sortAsc
                  ? a.price - b.price
                  : b.price - a.price
              )
              .filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase())
              )
              .map((d) => {
                return (
                  <div className="flex w-[290px] flex-col" key={d._id}>
                    <Link to={`/${d._id}`}><img src={d.image} alt="" /></Link>
                    <p className="mt-[20px] text-gray-400 flex justify-between items-center">
                      {d.name}
                      <AiOutlineHeart className="text-[20px]" />
                    </p>
                    <span className="mt-[5px]">${d.price}</span>
                    <button
                      className="bg-red-500 text-white"
                      onClick={() => deleteData(d._id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="text-center mt-[100px]">
            <button
              className="uppercase font-bold bg-gray-300 py-3 px-[40px] rounded-[30px]
          hover:bg-black hover:text-white transition duration-300"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
