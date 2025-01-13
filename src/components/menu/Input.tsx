import { Material } from "@/App";
import { Box, Button, Card, Center, Flex, Input, Text } from "@chakra-ui/react";
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
  const [gluingPrice, setGluingPrice] = useState(0);
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

  useEffect(() => {
    const calcualteEyets = () => {
      setEyeltesOnPerimetr(
        Math.ceil((2 * (+lenght + +width)) / (eyelets * 10)),
      );
    };

    const calculateGluing = () => {
      if (lenght * width >= 2000000) {
        setGluingPrice(Math.ceil(((2 * (+lenght + +width)) / 1000) * 19));
      } else if (lenght * width < 2000000 && lenght * width > 0) {
        setGluingPrice(
          Math.ceil(((2 * (+lenght + 100 + (+width + 100))) / 1000) * 19),
        );
      }
      console.log(gluingPrice);
    };
    calculateGluing();

    calcualteEyets();
    // if (eyelets > 0) {
    //   setPrice(
    //     ((width * lenght) / 1000000) * mat?.price +
    //       eyeletsOnPerimetr * oneEyelet,
    //   );
    // }
  }, [
    lenght,
    width,
    material,
    mat?.price,
    eyeletsOnPerimetr,
    eyelets,
    gluingPrice,
  ]);

  const calculatePrice = () => {
    if (width * lenght >= 2000000) {
      setPrice(
        ((width * lenght) / 1000000) * mat?.price +
          eyeletsOnPerimetr * oneEyelet +
          gluingPrice,
      );
    } else if (width * lenght < 2000000) {
      setPrice(
        (((+width + 100) * (+lenght + 100)) / 1000000) * mat?.price +
          eyeletsOnPerimetr * oneEyelet +
          gluingPrice,
      );
    }
  };

  return (
    <Flex justifyItems={"center"} w={"100%"}>
      <Box
        m={5}
        mr={2}
        p={5}
        border={"3px solid teal"}
        borderRadius={25}
        h={"auto"}
        w={"70%"}
      >
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
          <Input
            borderColor={"teal"}
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
            {eyelets
              ? eyeletsOnPerimetr % 2 === 0
                ? eyeletsOnPerimetr
                : eyeletsOnPerimetr + 1
              : 0}
          </Text>
        </Flex>
        <br></br>
        <Button onClick={calculatePrice} bg={"teal"}>
          Рассчитать
        </Button>
        <Text
          textAlign={"center"}
          border={"1px solid"}
          borderColor={"gray"}
          borderRadius={25}
          m={2}
          fontSize="xl"
          fontWeight="bold"
        >
          {price ? price.toFixed(2) : price} ₽
        </Text>
      </Box>

      <Card
        m={5}
        ml={2}
        p={5}
        border={"3px solid teal"}
        borderRadius={25}
        h={"auto"}
        w={"auto"}
      >
        <Text mb={3} color={"white"}>
          Цена за м/кв: {mat?.price}₽
        </Text>
        <Text mb={3} color={"white"}>
          Цена за работу над проклейкой: {gluingPrice}₽
        </Text>
        <Text mb={3} color={"white"}>
          Цена люверсов: {eyeletsOnPerimetr * oneEyelet}₽
        </Text>
      </Card>
    </Flex>
  );
};
