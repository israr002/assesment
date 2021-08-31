import React from 'react';
import {StyleSheet} from 'react-native';
import AppColors from '../../styles/colors';
import Fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 8,
    height: 50,
    backgroundColor: AppColors.BLUE,
    marginVertical: 10,
  },
  buttonFontStyle: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    color: AppColors.WHITE,
  },
});

export default styles;
