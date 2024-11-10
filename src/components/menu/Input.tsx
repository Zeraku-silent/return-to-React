import { Material } from "@/App";
import { Box, Input, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

type IProps = {
  material: Material | undefined;
};

export const MetrInput: FC = ({ material }: IProps) => {
  const [width, setWidth] = useState(0);
  const [lenght, setLength] = useState(0);
  const [price, setPrice] = useState(0);
  const mat = material;

  const chooseWidth = (value: number) => {
    setWidth(value);
  };
  const chooseLength = (value: number) => {
    setLength(value);
  };

  const handleChangeWidth: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    chooseWidth(e.target.value);
  };
  const handleChangeLength: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    chooseLength(e.target.value);
  };
  console.log(width);
  console.log(lenght);
  console.log(price);

  useEffect(() => {
    setPrice(((width * lenght) / 1000000) * mat?.price + w);
  }, [lenght, width, material]);

  return (
    <Box>
      <Text ml={1}>Размеры</Text>
      <Input
        m={1}
        type="number"
        onChange={handleChangeWidth}
        placeholder="Ширина"
        color={"white"}
        w={"45%"}
      />
      мм
      <br></br>
      <Input
        m={1}
        onChange={handleChangeLength}
        type="number"
        placeholder="Длина"
        color={"white"}
        w={"45%"}
      />
      мм
      <br></br>
      <Text
        textAlign={"center"}
        border={"1px solid"}
        borderColor={"gray"}
        borderRadius={25}
        m={2}
        fontSize="xl"
        fontWeight="bold"
      >
        {material ? price.toFixed(2) : 0} рублс
      </Text>
    </Box>
  );
};
