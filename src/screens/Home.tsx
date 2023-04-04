import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Main, Header} from 'components';
import {useLayoutEffect} from 'react';

export const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
    </SafeAreaView>
  );
};
