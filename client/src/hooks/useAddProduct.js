import { useState } from "react";

function useAddProduct() {
  const [formData, setFormData] = useState({
    product_name: "",
    product_quantity: "",
    original_price: "",
    selling_price: "",
    product_type: "",
    product_image: "",
  });

  console.log("formData", formData);

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
  return { formData, handleChange, handleChangeImage };
}

export default useAddProduct;
