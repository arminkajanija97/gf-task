import { Product } from "../types/Product";

const formatName = (name: string | null | undefined) => {
  if (name === null || name === undefined) {
    return "N/A";
  }
  return name;
};

const formatPrice = (price: number | string | null | undefined) => {
  if (price === null || price === undefined) {
    return 0;
  }
  if (typeof price === "string") {
    return parseFloat(price);
  }
  return price;
};

const formatStock = (stock: number | string | null | undefined) => {
  if (stock === null || stock === undefined) {
    return 0;
  }
  if (typeof stock === "string") {
    return parseInt(stock);
  }
  return stock;
};

const formatRating = (rating: number | string | null | undefined) => {
  if (rating === null || rating === undefined) {
    return 0;
  }
  if (typeof rating === "string") {
    return parseFloat(rating);
  }
  return rating;
};

const formatProducts = (products: Product[]) => {
  // first remove duplicates
  const uniqueProducts = [
    ...new Map(products.map((item) => [item.ProductID, item])).values(),
  ];
  return [...uniqueProducts].map((item) => {
    return {
      ProductID: item.ProductID,
      Name: formatName(item.Name),
      Category: item.Category === null ? "N/A" : item.Category,
      Price: formatPrice(item.Price),
      Stock: formatStock(item.Stock),
      Rating: formatRating(item.Rating),
    };
  });
};

export default formatProducts;
