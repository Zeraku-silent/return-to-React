import { FC, useEffect, useState } from "react";
import { Box, Card, Center, Flex, Select, Text } from "@chakra-ui/react";
import { cast, china } from "./assets/material";

export type Material = {
  name: string;
  price: number;
};

export type Stuff = Material[];

const oneEyelet = 15;

const App: FC = () => {
  const [selector, setSelector] = useState("Не выбрано");
  const [currentMaterial, setCurrentMaterial] = useState<Material>();

  useEffect(() => {
    if (selector === "Китай") {
      setCurrentMaterial({ ...currentMaterial, ...china });
    } else if (selector === "Литой") {
      setCurrentMaterial({ ...currentMaterial, ...cast });
    } else {
      setCurrentMaterial(undefined);
    }
  }, [selector]);

  const chooseMaterial = (material: string) => {
    setSelector(material);
  };

  const handleChange = (
    event: React.ChangeEventHandler<HTMLSelectElement> | undefined,
  ) => {
    chooseMaterial(event.target.value);
  };
  // console.log(selector);
  console.log(currentMaterial);

  return (
    <Box m={0} w={"100vw"} h={"100vh"} bg={"dark-gray"}>
      <Text fontSize={60} pt={10} color={"darkorange"}>
        Калькулятор цен
      </Text>
      <Flex w={"auto"} pt={"5"}>
        <Center ml={10}>
          <Card h={300}>
            <Select
              onChange={handleChange}
              value={selector}
              color={"white"}
              w={400}
              placeholder="Выберите материал"
            >
              <option value={china.name}>{china.name}</option>
              <option value={cast.name}>{cast.name}</option>
            </Select>
          </Card>
        </Center>
        <Center ml={10}>
          <Card h={300} w={100}>
            <Text textAlign={"center"} color={"white"}>
              Цена за м/кв {currentMaterial?.price}
            </Text>
          </Card>
        </Center>
      </Flex>
    </Box>
  );
};

export default App;
