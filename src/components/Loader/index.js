import React from 'react';
import { ActivityIndicator, StyleSheet, View, Dimensions,Text } from 'react-native';
import appColors from '../../styles/colors';
import styles from './style';

const Loader = (props) => {
  const { spinner } = props
  return (
    <>
      {spinner && 
        <View style={[styles.container]}>
          <ActivityIndicator
            animating={spinner}
            size="large"
            color={appColors.BLUE}
          />
      </View>}
    </>
  );
}

export default Loader
