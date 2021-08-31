import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

export const TextButton = props => {
  const defaultStyle = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.buttonStyle, {...defaultStyle}]}
      onPress={props.onPress}>
      <Text style={styles.buttonFontStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
