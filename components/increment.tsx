import { View, Button } from 'react-native';
import React from 'react';

type SetCount = (value: number | ((prev: number) => number)) => void;

type Props = {
  count: number;
  setCount: SetCount;
};

export default function Increment({ count, setCount }: Props) {
  return (
    <View>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}