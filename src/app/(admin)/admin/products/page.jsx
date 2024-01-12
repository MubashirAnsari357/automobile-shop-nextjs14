import { products } from "@/app/MockData";
import Table from "@/components/Table";
import React from "react";

const Products = () => {
  return (
    <div>
      <Table data={products} title={"Products"} />
    </div>
  );
};

export default Products;
