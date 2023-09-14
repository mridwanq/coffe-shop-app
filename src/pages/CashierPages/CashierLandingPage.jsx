// import { Container } from "react-bootstrap";
// import { Header } from "../../components/Header";

// export const CashierLandingPage = () => {
//   return (
//     <div>
//       <Header />
//       <Container>
//         <h1>Hellow</h1>
//       </Container>
//     </div>
//   );
// };

import { Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Flex, useDisclosure, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProductList } from "../../components/product";
import add50 from "../../assets/icons8-plus.svg";
import { ModalInputProduct } from "../../components/modal";
import { api } from "../../API/api";

export const CashierLandingPage = ({ search }) => {
  const [products, setProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products", {
        params: { product_name: search },
      });
      setProducts([...res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);
  return (
    <>
      <Center alignItems={"flex-start"} marginTop={"35px"}>
        <ProductList products={[...products]} fetchProducts={fetchProducts} />
      </Center>
    </>
  );
};
