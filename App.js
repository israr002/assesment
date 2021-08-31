/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import Store from './src/stores/store';
import {AuthNavigator, HomeNavigator} from './src/navigation/navigator';
import {AuthContext} from './src/navigation/context';
import Loader from './src/components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const initialState = {
    isLoading: true,
    isLoggedIn: false,
    userId: null,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...state,
          isLoading: false,
          userId: action.userId,
          isLoggedIn: action.isLoggedIn,
        };
      case 'SIGN_IN':
        return {
          ...state,
          isLoading: false,
          userId: action.userId,
          isLoggedIn: true,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          isLoading: false,
          userId: null,
          isLoggedIn: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(reducer, initialState);

  const authContext = React.useMemo(
    () => ({
      signIn: async userId => {
        try {
          await AsyncStorage.setItem('userId', userId);
        } catch (err) {
          console.log(err);
        }
        dispatch({type: 'SIGN_IN', userId: userId});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userId');
        } catch (err) {
          console.log(err);
        }
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let id;
      id = null;
      try {
        id = await AsyncStorage.getItem('userId');
      } catch (err) {
        console.log(err);
      }
      dispatch({
        type: 'RESTORE_TOKEN',
        userId: id,
        isLoggedIn: id ? true : false,
      });
    }, 1000);
  }, []);

  return (
    <Provider store={Store}>
      <AuthContext.Provider value={authContext}>
        {loginState.isLoading ? (
          <Loader spinner={true} />
        ) : (
          <NavigationContainer>
            {loginState.isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        )}
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
