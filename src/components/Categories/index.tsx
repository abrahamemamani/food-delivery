import React from 'react';
import {FlatList} from 'react-native';
import {Category, CategoryProps, View} from 'components';

const data: CategoryProps[] = [
  {
    id: '1',
    name: 'Burger',
    src: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1679367759/food-delivery/PNGs/burger_jvwnw6.png',
  },
  {
    id: '2',
    name: 'Pizza',
    src: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1679367556/food-delivery/PNGs/pizza_jc9oor.png',
  },
  {
    id: '3',
    name: 'Sushi',
    src: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1679367758/food-delivery/PNGs/sushi_no1kto.png',
  },
  {
    id: '4',
    name: 'Potatoes',
    src: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1679367758/food-delivery/PNGs/potatoes_snv2if.png',
  },
  {
    id: '5',
    name: 'Donuts',
    src: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1679367760/food-delivery/PNGs/donuts_yfxwzb.png',
  },
  {
    id: '6',
    name: 'Hot Dogs',
    src: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1679367761/food-delivery/PNGs/hotdog_f67q66.png',
  },
];

const ItemSeparatorComponent = () => <View className="w-4" />;

export const Categories = (): JSX.Element => {
  return (
    <View className="mx-4">
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <Category category={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
