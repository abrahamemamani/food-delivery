import React from 'react';
import {Text, View, Search, Avatar} from 'components';
import * as Icons from 'react-native-heroicons/outline';

export const Header = () => {
  return (
    <View className="bg-white pt-5 pb-2 px-4">
      {/* Location */}
      <View className="flex-row pb-3 items-center space-x-2">
        <Avatar />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl text-black flex-row items-center mr-1">
              Current Location
            </Text>
            <Icons.ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <Icons.UserIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2">
        <Search />
        <Icons.AdjustmentsVerticalIcon size={26} color="#00CCBB" />
      </View>
    </View>
  );
};
