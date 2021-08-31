import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-fontawesome';

const Input = props => {
  const {leftIcon, rightIcon, errorText} = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrap}>
        {leftIcon && (
          <View style={[styles.inputIconWrap]}>
            <FontAwesome style={styles.inputIcon} icon={leftIcon} />
          </View>
        )}
        <TextInput
          placeholderTextColor="#999"
          style={[
            styles.inputField,
            {
              paddingLeft: leftIcon ? 50 : 10,
            },
          ]}
          {...props}
        />
        {rightIcon && (
          <View style={[styles.inputIconWrap, styles.rightIcon]}>
            <FontAwesome
              onPress={props.onRighIconClick}
              style={styles.inputIcon}
              icon={rightIcon}
            />
          </View>
        )}
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
