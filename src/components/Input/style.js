import {StyleSheet} from 'react-native';
import appColors from '../../styles/colors';
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  inputWrap: {
    position: 'relative',
    borderColor: appColors.BLACK40,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },

  inputIconWrap: {
    position: 'absolute',
    zIndex: 9,
    top: '27%',
    width: 20,
    height: 20,
    marginLeft: 20,
  },

  inputIcon: {
    color: appColors.BLACK,
    fontSize: 17.5,
    width: 22,
    height: 22,
  },
  rightIcon: {right: 15},

  inputField: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    color: appColors.BLACK,
    textAlignVertical: 'top',
  },
  errorText: {color: '#CA0814'},
});

export default styles;
