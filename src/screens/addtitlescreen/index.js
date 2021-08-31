import React, {useState, useEffect} from 'react';

import {
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import {RegularIcons, SolidIcons} from 'react-native-fontawesome';
import {useForm, Controller} from 'react-hook-form';
import Input, {ErrorText} from '../../components/Input/index';
import {
  TITLE_FIELD,
  TITLE,
  TITLE_BLANK_VALIDATION_MSG,
  TITLE_REGEX_VALIDATION_MSG,
} from '../../constants/StringConstants';
import {TITLE_REGEX} from '../../constants/ValidationConstants';
import Button from '../../components/Button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUid, incrementCurrentUid} from '../../stores/actions/action';
import {AuthContext} from '../../navigation/context';

const AddData = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();

  const {currentUid} = useSelector(state => state);
  const dispatch = useDispatch();
  const {signOut} = React.useContext(AuthContext);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => onSignOut()}>
        <View style={{marginHorizontal: 15}}>
          <Image
            source={require('../../assets/images/logout.png')}
            style={{height: 20, width: 20}}
          />
        </View>
      </TouchableOpacity>
    ),
  });
  useEffect(() => {
    dispatch(getCurrentUid());
  }, []);

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Added Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const onSignOut = () => {
    Alert.alert(
      'Logout',
      'Do you want to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => signOut(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  const onSubmit = data => {
    database()
      .ref('/items')
      .push({
        uid: currentUid + 1,
        title: data.titleField,
        isSelected: false,
      });
    dispatch(incrementCurrentUid(currentUid + 1));
    showToastWithGravity();
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.loginContainer}>
        <Controller
          name={TITLE_FIELD}
          defaultValue=""
          control={control}
          rules={{
            required: {value: true, message: TITLE_BLANK_VALIDATION_MSG},
            pattern: {
              value: TITLE_REGEX,
              message: TITLE_REGEX_VALIDATION_MSG,
            },
          }}
          render={({onChange, value}) => (
            <Input
              error={errors.titleField}
              errorText={errors?.titleField?.message}
              placeholder={TITLE}
              leftIcon={RegularIcons.user}
              value={value}
              onChangeText={text => onChange(text)}
            />
          )}
        />

        <Button title={'Create'} onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

export default AddData;
