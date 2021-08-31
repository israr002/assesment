/*
 *          COPYRIGHT (c) 2021
 *          HONEYWELL INC.,
 *          ALL RIGHTS RESERVED
 *
 * This software is a copyrighted work and/or information protected as a trade secret.
 * Legal rights of Honeywell Inc. in this software is distinct from ownership of any medium
 * in which the software is embodied. Copyright or trade secret notices included must be
 * reproduced in any copies authorized by Honeywell Inc.
 *
 */

import {StyleSheet} from 'react-native';
import appColors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  touchableOpacity: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 10,
    shadowColor: appColors.WHITE,
    backgroundColor: appColors.WHITE,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 7.5,
    borderColor: '#ccc',
    alignItems: 'center',
    borderWidth: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardDetails: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
  },
  nameText: {
    color: appColors.BLUE,
  },

  MultiContainer: {
    height: 100,
    borderRadius: 9,
  },
  checkBox: {
    height: 20,
    width: 20,
    borderColor: appColors.BLUE,
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  selectedCheckBox: {
    backgroundColor: appColors.BLUE,
  },
  tick: {tintColor: appColors.WHITE, width: 10, height: 10},
});
export default styles;
