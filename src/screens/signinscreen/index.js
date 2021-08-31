import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import { RegularIcons, SolidIcons } from 'react-native-fontawesome';
import { useForm, Controller } from 'react-hook-form';
import Input, { ErrorText } from '../../components/Input/index';
import {
  EMAIL_ID,
  EMAIL_FIELD,
  EMAIL_BLANK_VALIDATION_MSG,
  EMAIL_REGEX_VALIDATION_MSG,
  PASSWORD,
  PASSWORD_FIELD,
  PASSWORD_BLANK_VALIDATION_MSG,
  PASSWORD_REGEX_VALIDATION_MSG,
} from '../../constants/StringConstants';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../constants/ValidationConstants';
import auth from '@react-native-firebase/auth';
import Button from '../../components/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/context';

const SignInScreen = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(true)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();
  const { signIn } = React.useContext(AuthContext)

  const onSubmit = data => {
    if (alreadyRegistered) {
      auth()
      .signInWithEmailAndPassword(data.emailField, data.passwordField)
      .then(function (user) {
        signIn(data.emailField)
      })
      .catch(error => {
        console.log(error)
      });
    } else {
      auth()
        .createUserWithEmailAndPassword(data.emailField, data.passwordField)
        .then(function (user) {
          signIn(data.emailField)
        })
        .catch(error => {
          console.log(error)
        });
    }
  };
  const toggleAuth = () => {
    setAlreadyRegistered(!alreadyRegistered)
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.loginContainer}>
        <Controller
          name={EMAIL_FIELD}
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: EMAIL_BLANK_VALIDATION_MSG },
            pattern: {
              value: EMAIL_REGEX,
              message: EMAIL_REGEX_VALIDATION_MSG,
            },
          }}
          render={({ onChange, value }) => (
            <Input
              error={errors.emailField}
              errorText={errors?.emailField?.message}
              placeholder={EMAIL_ID}
              leftIcon={RegularIcons.envelope}
              value={value}
              onChangeText={text => onChange(text)}
            />
          )}
        />

        <Controller
          name={PASSWORD_FIELD}
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: PASSWORD_BLANK_VALIDATION_MSG },
            pattern: {
              value: PASSWORD_REGEX,
              message: PASSWORD_REGEX_VALIDATION_MSG,
            },
          }}
          render={({ onChange, value }) => (
            <Input
              error={errors.passwordField}
              errorText={errors?.passwordField?.message}
              placeholder={PASSWORD}
              leftIcon={SolidIcons.lock}
              rightIcon={SolidIcons.eyeSlash}
              rightIcon={
                passwordVisibility ? SolidIcons.eye : SolidIcons.eyeSlash
              }
              secureTextEntry={!passwordVisibility}
              value={value}
              onChangeText={text => onChange(text)}
              onRighIconClick={() => setPasswordVisibility(!passwordVisibility)}
            />
          )}
        />

        <Button title={alreadyRegistered ? 'Sign-In' : 'Sign-Up'} onPress={handleSubmit(onSubmit)} />
        <TouchableOpacity onPress={toggleAuth} style={styles.authTextContainer}>
          <Text style = {styles.authText}>
            {alreadyRegistered ? 'New User ? Click here to Sign Up' :  'Already Registered? Click here to to login'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignInScreen;
