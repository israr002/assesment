import {StyleSheet} from 'react-native';
import appColors from '../../styles/colors';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  flatlist: {
    flex: 1,
  },
  contentStyles: {
    paddingBottom: 40,
  },
  addTitle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: appColors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTitleContiner: {
    position: 'absolute',
    zIndex:1,
    bottom: 40,
    right: 3,
  },
  inputIcon: {
    tintColor: appColors.WHITE,
    width: 30,
    height: 30,
  },
});

export default styles;
