import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Detail = () => {
  const [data, setData] = useState("");
  const params = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:8080/store/${params.id}`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
      </Helmet>
      <div className="container">
        <Link to={"/"}>
          <button className="px-[40px] rounded-[10px] py-2 bg-blue-400 text-white hover:bg-blue-500 absolute">
            Back
          </button>
        </Link>
        <div className="max-w-[400px] border p-3 flex flex-col gap-5 mx-auto my-[100px]">
          <img src={data.image} alt="" />
          <p className="text-gray-400 text-[20px]">{data.name}</p>
          <p>${data.price}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
