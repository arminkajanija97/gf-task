import { Input, Table, TableColumnsType } from "antd";
import { Product } from "../../types/Product";
import { useEffect, useState } from "react";

import "./style.scss";

interface ProductsTableProps {
  products: Product[];
}

const columns = [
  {
    title: "ProductID",
    dataIndex: "ProductID",
    sorter: (a: Product, b: Product) => a.ProductID - b.ProductID,
  },
  {
    title: "Name",
    dataIndex: "Name",
    sorter: (a: Product, b: Product) =>
      (a.Name ?? "").toLowerCase().localeCompare((b.Name ?? "").toLowerCase()),
  },
  {
    title: "Category",
    dataIndex: "Category",
    sorter: (a: Product, b: Product) =>
      (a.Category ?? "")
        .toLowerCase()
        .localeCompare((b.Category ?? "").toLowerCase()),
  },
  {
    title: "Price",
    dataIndex: "Price",
  },
  {
    title: "Stock",
    dataIndex: "Stock",
  },
  {
    title: "Rating",
    dataIndex: "Rating",
  },
];

const ProductsTable = ({ products }: ProductsTableProps) => {
  const [searchByName, setSearchByName] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");
  const [filteredProducts, setProducts] = useState(products);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  useEffect(() => {
    if (searchByName) {
      const filteredProducts = products.filter((product) =>
        product.Name?.toLowerCase().includes(searchByName.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [searchByName]);

  useEffect(() => {
    if (searchByCategory) {
      const filteredProducts = products.filter((product) =>
        product.Category?.toLowerCase().includes(searchByCategory.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [searchByCategory]);

  return (
    <div className="products-table">
      <div className="filters">
        <Input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchByName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Search by category"
          onChange={(e) => setSearchByCategory(e.target.value)}
        />
      </div>

      <Table
        columns={columns}
        dataSource={filteredProducts}
        loading={products.length === 0}
        rowKey="ProductID"
      />
    </div>
  );
};

export default ProductsTable;
