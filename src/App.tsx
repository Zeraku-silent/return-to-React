import { FC, useEffect, useState } from "react";
import { Box, Card, Center, Flex, Select, Text } from "@chakra-ui/react";
import { cast, china } from "./assets/material";
import { MetrInput } from "./components/menu/Input";

export type Material = {
  name: string;
  price: number;
};

export type Stuff = Material[];

const App: FC = () => {
  const [selector, setSelector] = useState("Не выбрано");
  const [currentMaterial, setCurrentMaterial] = useState<Material>();

  useEffect(() => {
    if (selector === "Китай 440г/м²") {
      setCurrentMaterial({ ...currentMaterial, ...china });
    } else if (selector === "Литой 510г/м²") {
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
    chooseMaterial(event?.target.value);
  };
  // console.log(selector);
  console.log(currentMaterial);

  return (
    <Box m={0} w={"auto"} h={"100vh"} bg={"dark-gray"}>
      <Text textAlign={"center"} fontSize={60} pt={10} color={"teal"}>
        Калькулятор цен
      </Text>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        ml={"auto"}
        mr={"auto"}
        w={"auto"}
        pt={"5"}
      >
        <Center w={"50%"} ml={"auto"} mr={"auto"}>
          <Card w={"100%"} h={"auto"}>
            <Select
              borderColor={"teal"}
              mt={5}
              alignSelf={"center"}
              mb={10}
              onChange={handleChange}
              value={selector}
              color={"white"}
              w={400}
              placeholder="Выберите материал"
            >
              <option value={china.name}>{china.name}</option>
              <option value={cast.name}>{cast.name}</option>
            </Select>
            <Flex alignSelf={"center"}>
              <MetrInput material={currentMaterial} />
            </Flex>
          </Card>
        </Center>
      </Flex>
    </Box>
  );
};

export default App;
