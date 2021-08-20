import { Container, Row, Col, Div } from "atomize";

import ProductCart from "../../components/ProductCart";
import Header from "../../components/layout/Header";
import Cart from "../../components/Cart";

function HomePage() {
  return (
    <>
      <Header />
      <Div p={{ t: "1rem" }}>
        <Container>
          <Row>
            {[...Array(10)].map((e, i) => (
              <Col size={{ xs: "6", md: "3" }} key={i}>
                <ProductCart />
              </Col>
            ))}
          </Row>
        </Container>
      </Div>
      <Cart />
    </>
  );
}

export default HomePage;
