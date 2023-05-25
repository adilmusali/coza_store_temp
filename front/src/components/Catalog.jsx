import React from "react";

const Catalog = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between py-[100px] mb-[100px]">
          <div className="flex w-[400px] border relative p-[10px]">
            <div className="p-[30px] z-10">
              <h2 className="font-bold text-[30px]">Women</h2>
              <p>Spring 2018</p>
            </div>
            <img
              className="absolute right-0"
              src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"
              alt=""
            />
          </div>
          <div className="flex w-[400px] border relative p-[10px]">
            <div className="p-[30px] z-50">
              <h2 className="font-bold text-[30px]">Men</h2>
              <p>Spring 2018</p>
            </div>
            <img
              className="absolute right-0"
              src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp"
              alt=""
            />
          </div>
          <div className="flex w-[400px] border relative p-[10px]">
            <div className="p-[30px] z-50">
              <h2 className="font-bold text-[30px]">Accessories</h2>
              <p>New Trend</p>
            </div>
            <img
              className="absolute right-0"
              src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
