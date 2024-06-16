import { useParams } from "react-router-dom";
import { fetchProductById } from "./APICalls";
import { useEffect, useState } from "react";

export default function ItemPage() {
  let { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductById(product_id)
      .then((result) => {
        setProduct(result.data.product[0]);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div>Product Name = {product.productname}</div>
      <div>Product Type = {product.producttype}</div>
      <div>Product Category = {product.productcategory}</div>
      <div>Product Price = ${product.productprice}</div>
      <div>About = {product.about}</div>
    </>
  );
}
