import { Material } from "@/App";
import { Box, Card, Center, Select, Text } from "@chakra-ui/react";
import { FC } from "react";

type IProps = {
  stuff: Material[];
};

export const MaterialSelector: FC<IProps> = ({ stuff }: IProps) => {
  const china = stuff[0];
  const cast = stuff[1];
  console.log(cast.name);

  return (
    <Center ml={10}>
      <Card h={300}>
        <Select color={"white"} w={400} placeholder="Выберите материал">
          <option value={china.name}>{china.name}</option>
          <option value={cast.name}>{cast.name}</option>
        </Select>
        <Text color={"white"}>{china.price}</Text>
      </Card>
    </Center>
  );
};
