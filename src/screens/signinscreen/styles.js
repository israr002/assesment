import React from 'react';
import { StyleSheet } from 'react-native';
import appColors from '../../styles/colors';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: appColors.WHITE,
  },


  authTextContainer: {
    paddingVertical: 3,
    alignItems: 'center'
  },
  authText: {
    color: appColors.BLUE
  }
});

export default styles;
