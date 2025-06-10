import { View, Button } from 'react-native';
import React from 'react';

type SetCount = (value: number | ((prev: number) => number)) => void;

type Props = {
  count: number;
  setCount: SetCount;
};

export default function Decrement({ count, setCount }: Props) {
  return (
    <View>
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
}