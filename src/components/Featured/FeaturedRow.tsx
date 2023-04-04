import React from 'react';
import {View, Text} from 'components';

interface Props {
  title: string;
  handleAll: () => void;
}

export const FeaturedRow = ({title, handleAll}: Props) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="font-medium text-gray-900 text-xl">{title}</Text>
      <Text
        onPress={handleAll}
        className="font-medium text-base text-[#19A73F]">
        View all
      </Text>
    </View>
  );
};
