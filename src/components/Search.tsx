import React from 'react';
import {View, TextInput} from 'components';
import * as Icons from 'react-native-heroicons/outline';

export const Search = () => {
  return (
    <View className="bg-gray-200 flex-row flex-1 items-center space-x-2 p-3 rounded-sm">
      <Icons.MagnifyingGlassIcon size={24} color="gray" />
      <TextInput
        className="py-0"
        placeholder="Restaurants and cuisines"
        keyboardType="default"
      />
    </View>
  );
};
