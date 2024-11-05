import { FC } from "react";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import { MaterialSelector } from "./components/menu/Selector";

export type Material = {
  name: string;
  price: number;
};

export type Stuff = Material[];

const App: FC = () => {
  const oneEyelet = 15;

  const china: Material = {
    name: "Китай",
    price: 590,
  };
  const cast: Material = {
    name: "Литой",
    price: 660,
  };

  const materials = [china, cast];

  return (
    <Box m={0} w={"100vw"} h={"100vh"} bg={"dark-gray"}>
      <Text fontSize={60} pt={10} color={"darkorange"}>
        Калькулятор цен
      </Text>
      <Box pt={"5"}>
        <MaterialSelector stuff={materials} />
      </Box>
    </Box>
  );
};

export default App;
