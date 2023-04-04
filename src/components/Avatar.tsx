import React from 'react';
import {Image} from 'components';

export const Avatar = () => {
  return (
    <Image
      className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      source={{uri: 'https://links.papareact.com/wru'}}
    />
  );
};
