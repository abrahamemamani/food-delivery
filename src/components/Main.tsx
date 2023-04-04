import React from 'react';
import {View, Categories, ScrollView, FeaturedRow} from 'components';

export const Main = () => {
  return (
    <ScrollView className="bg-white">
      <View className="py-3">
        <Categories />
        <FeaturedRow
          title="Highest rating in town"
          handleAll={() => console.log('View all')}
        />
      </View>
    </ScrollView>
  );
};
