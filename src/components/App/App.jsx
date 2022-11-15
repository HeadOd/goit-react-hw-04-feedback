import { Global } from "@emotion/react";
import { GlobalStyled } from "../Global/Global.styled";

import { Container } from "./App.styled";
import { Feedback } from "../Feedback/Feedback";

export const App = () => {
  return ( 
    <Container>
      <Global styles={GlobalStyled} />
      <Feedback />
    </Container>
  );
};
