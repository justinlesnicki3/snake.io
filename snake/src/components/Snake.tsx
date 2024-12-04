import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { View } from "react-native";

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake ({snake}:SnakeProps):JSX.Element {
    return (
        <Fragment>
          {snake.map((segment:Coordinate, index:number) => {
            return <View key={index} />
          })}  
        </Fragment>
    )
}