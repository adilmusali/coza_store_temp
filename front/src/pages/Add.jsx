import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { schema } from "../schema/schema";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Add = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:8080/store", {
      image: values.image,
      name: values.name,
      price: values.price,
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <div className="container h-[70vh]">
        <Link to={"/"}>
          <button className="px-[40px] rounded-[10px] py-2 bg-blue-400 text-white hover:bg-blue-500 absolute">
            Back
          </button>
        </Link>
        <form
          className="max-w-[600px] mx-auto mt-[100px]"
          onSubmit={handleSubmit(postData)}
        >
          <FormControl className="flex flex-col gap-[10px]">
            <FormLabel>Image</FormLabel>
            <Input type="text" {...register("image")} />
            {errors.image?.message && (
              <p className="text-red-500">{errors.image?.message}</p>
            )}
            <FormLabel>Name</FormLabel>
            <Input type="text" {...register("name")} />
            {errors.name?.message && (
              <p className="text-red-500">{errors.name?.message}</p>
            )}
            <FormLabel>Price</FormLabel>
            <Input type="float" {...register("price")} />
            {errors.price?.message && (
              <p className="text-red-500">{errors.price?.message}</p>
            )}
            <Button colorScheme="purple" size="lg" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    </>
  );
};

export default Add;
