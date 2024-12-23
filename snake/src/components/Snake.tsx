import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from 'react-native';

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake ({snake}:SnakeProps):JSX.Element {

    return (
        <Fragment>
          {snake.map((segment:Coordinate, index:number) => {
            const segmentStyle = {
              left: segment.x * 10,
              top: segment.y * 10,
            }
            return <View key={index} style={[styles.snake, segmentStyle]} />
          })}  
        </Fragment>
    )
}

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: "#365314",
    position: 'absolute',
  }
})