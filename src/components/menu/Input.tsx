import { Material } from "@/App";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

type IProps = {
  material: Material | undefined;
};

const oneEyelet = 15;

export const MetrInput: FC = ({ material }: IProps) => {
  const [width, setWidth] = useState(0);
  const [lenght, setLength] = useState(0);
  const [eyelets, setEyelets] = useState(0);
  const [price, setPrice] = useState(0);
  const [eyeletsOnPerimetr, setEyeltesOnPerimetr] = useState(0);
  const mat = material;

  const chooseWidth = (value: number) => {
    setWidth(value);
  };
  const chooseLength = (value: number) => {
    setLength(value);
  };
  const chooseEyelets = (value: number) => {
    setEyelets(value);
  };

  const handleChangeWidth: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    chooseWidth(e.target.value);
  };
  const handleChangeEyelets: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    chooseEyelets(e.target.value);
  };
  const handleChangeLength: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    chooseLength(e.target.value);
  };
  console.log(width);
  console.log(lenght);
  // console.log(price);
  console.log(eyeletsOnPerimetr);

  const calcualteEyets = () => {
    setEyeltesOnPerimetr(Math.ceil((2 * (+lenght + +width)) / (eyelets * 10)));
  };

  useEffect(() => {
    calcualteEyets();
    setPrice(
      ((width * lenght) / 1000000) * mat?.price + eyeletsOnPerimetr * 15,
    );
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
      <Flex>
        {" "}
        <Input
          m={1}
          onChange={handleChangeEyelets}
          type="number"
          placeholder="частота люверсов"
          color={"white"}
          w={"auto"}
        />
        см
        <Text
          w={"30%"}
          textAlign={"center"}
          border={"1px solid"}
          borderColor={"gray"}
          borderRadius={25}
          m={2}
          fontSize="xl"
          fontWeight="bold"
        >
          {eyeletsOnPerimetr % 2 === 0
            ? eyeletsOnPerimetr
            : eyeletsOnPerimetr + 1}
        </Text>
      </Flex>
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
