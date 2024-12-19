import formatProducts from "../utils/formatProducts";
import { Product } from "../types/Product";

describe("formatProducts", () => {
  it("should format product names correctly", () => {
    const products: Product[] = [
      {
        ProductID: 1,
        Name: null,
        Category: "Electronics",
        Price: 100,
        Stock: 10,
        Rating: 4.5,
      },
      {
        ProductID: 2,
        Name: undefined,
        Category: "Books",
        Price: 20,
        Stock: 5,
        Rating: 4.0,
      },
      {
        ProductID: 3,
        Name: "Laptop",
        Category: "Electronics",
        Price: 1000,
        Stock: 2,
        Rating: 4.8,
      },
    ];
    const formattedProducts = formatProducts(products);
    expect(formattedProducts[0].Name).toBe("N/A");
    expect(formattedProducts[1].Name).toBe("N/A");
    expect(formattedProducts[2].Name).toBe("Laptop");
  });

  it("should format product prices correctly", () => {
    const products: Product[] = [
      {
        ProductID: 1,
        Name: "Phone",
        Category: "Electronics",
        Price: null,
        Stock: 10,
        Rating: 4.5,
      },
      {
        ProductID: 2,
        Name: "Book",
        Category: "Books",
        Price: "20",
        Stock: 5,
        Rating: 4.0,
      },
      {
        ProductID: 3,
        Name: "Laptop",
        Category: "Electronics",
        Price: 1000,
        Stock: 2,
        Rating: 4.8,
      },
    ];
    const formattedProducts = formatProducts(products);
    expect(formattedProducts[0].Price).toBe(0);
    expect(formattedProducts[1].Price).toBe(20);
    expect(formattedProducts[2].Price).toBe(1000);
  });

  it("should format product stock correctly", () => {
    const products: Product[] = [
      {
        ProductID: 1,
        Name: "Phone",
        Category: "Electronics",
        Price: 100,
        Stock: null,
        Rating: 4.5,
      },
      {
        ProductID: 2,
        Name: "Book",
        Category: "Books",
        Price: 20,
        Stock: "5",
        Rating: 4.0,
      },
      {
        ProductID: 3,
        Name: "Laptop",
        Category: "Electronics",
        Price: 1000,
        Stock: 2,
        Rating: 4.8,
      },
    ];
    const formattedProducts = formatProducts(products);
    expect(formattedProducts[0].Stock).toBe(0);
    expect(formattedProducts[1].Stock).toBe(5);
    expect(formattedProducts[2].Stock).toBe(2);
  });

  it("should format product ratings correctly", () => {
    const products: Product[] = [
      {
        ProductID: 1,
        Name: "Phone",
        Category: "Electronics",
        Price: 100,
        Stock: 10,
        Rating: null,
      },
      {
        ProductID: 2,
        Name: "Book",
        Category: "Books",
        Price: 20,
        Stock: 5,
        Rating: "4.0",
      },
      {
        ProductID: 3,
        Name: "Laptop",
        Category: "Electronics",
        Price: 1000,
        Stock: 2,
        Rating: 4.8,
      },
    ];
    const formattedProducts = formatProducts(products);
    expect(formattedProducts[0].Rating).toBe(0);
    expect(formattedProducts[1].Rating).toBe(4.0);
    expect(formattedProducts[2].Rating).toBe(4.8);
  });

  it("should remove duplicate products based on ProductID", () => {
    const products: Product[] = [
      {
        ProductID: 1,
        Name: "Phone",
        Category: "Electronics",
        Price: 100,
        Stock: 10,
        Rating: 4.5,
      },
      {
        ProductID: 1,
        Name: "Phone",
        Category: "Electronics",
        Price: 100,
        Stock: 10,
        Rating: 4.5,
      },
      {
        ProductID: 2,
        Name: "Book",
        Category: "Books",
        Price: 20,
        Stock: 5,
        Rating: 4.0,
      },
    ];
    const formattedProducts = formatProducts(products);
    expect(formattedProducts.length).toBe(2);
  });

  it("should format product categories correctly", () => {
    const products: Product[] = [
      {
        ProductID: 1,
        Name: "Phone",
        Category: null,
        Price: 100,
        Stock: 10,
        Rating: 4.5,
      },
      {
        ProductID: 2,
        Name: "Book",
        Category: "Books",
        Price: 20,
        Stock: 5,
        Rating: 4.0,
      },
    ];
    const formattedProducts = formatProducts(products);
    expect(formattedProducts[0].Category).toBe("N/A");
    expect(formattedProducts[1].Category).toBe("Books");
  });
});
