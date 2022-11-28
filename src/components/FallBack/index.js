import React from "react";
import Loader from "react-loader-spinner";
import { Container } from "./styled";

const FallBack = () => {
  return (
    <Container>
      <Loader type="TailSpin" color="#870000" height={100} width={100} />
    </Container>
  );
};

export default FallBack;
