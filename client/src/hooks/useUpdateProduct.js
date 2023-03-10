import { useState } from "react";
import { useSelector } from "react-redux";

function useUpdateProduct() {
  const { productDetail } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    product_name: productDetail.product_name,
    product_quantity: productDetail.product_quantity,
    original_price: productDetail.original_price,
    selling_price: productDetail.selling_price,
    product_type: productDetail.product_type,
    product_image: productDetail.product_image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];

    TransformFile(imageFile);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, product_image: reader.result });
      };
    } else {
      setFormData({ ...formData });
    }
  };

  const resetFormdata = () => {
    setFormData({
      product_name: "",
      product_quantity: "",
      original_price: "",
      selling_price: "",
      product_type: "",
      product_image: "",
    });
  };
  return { formData, handleChange, handleChangeImage, resetFormdata };
}

export default useUpdateProduct;
