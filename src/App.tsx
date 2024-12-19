import React, { useEffect, useState } from "react";
import { products } from "./utils/products";
import formatProducts from "./utils/formatProducts";
import { Product } from "./types/Product";
import GfLayout from "./layouts/GfLayout/GfLayout";
import ProductsTable from "./components/ProductsTable/ProductsTable";

import "antd/dist/reset.css"; // Import the default styles

const App: React.FC = () => {
  const [data, setData] = useState<Product[]>();

  const loadData = async () => {
    // Simulate loading data
    setTimeout(() => {
      const formattedProducts = formatProducts(products).map(
        (product, index) => ({
          ...product,
          key: index,
        })
      );
      setData(formattedProducts);
    }, 2000);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <GfLayout children={<ProductsTable products={data ? data : []} />} />
    </div>
  );
};

export default App;
