import styled from "styled-components/native";

import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

let teste = (screenWidth * 0.96) / 2;

export const Container = styled.View`
  width: ${teste};
  margin: 1%;
  height: 300px;
  padding: 0 5%;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const ImageView = styled.ImageBackground`
  width: 80%;
  height: 50%;
  z-index: 999;
`;
export const Type = styled.Text`
  font-size: 16px;
`;
