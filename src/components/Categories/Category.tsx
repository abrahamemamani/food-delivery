import React from 'react';
import {Image, View, Text} from 'components';

interface Props {
  category: CategoryProps;
}

export interface CategoryProps {
  id: string;
  name: string;
  src: string;
}

export const Category = ({category: {name, src}}: Props): JSX.Element => {
  return (
    <View>
      <View className="rounded-full h-16 w-16 bg-gray-200 flex justify-center items-center">
        <Image source={{uri: src}} className="w-10 h-10" resizeMode="contain" />
      </View>
      <Text className="text-center font-medium mt-1">{name}</Text>
    </View>
  );
};
