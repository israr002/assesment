import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, TouchableOpacity, Image, Alert} from 'react-native';
import styles from './styles';
import SearchInput from '../../components/SearchInput';
import TitleCard from '../../components/TitleCard';
import database from '@react-native-firebase/database';
import {ADD_ICON_TEST_ID} from '../../constants/TestId';
import {getListData, setListData} from '../../stores/actions/action';
import {useDispatch, useSelector} from 'react-redux';
import {AuthContext} from '../../navigation/context';

const HomeScreen = ({navigation}) => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const {listData, fullData} = useSelector(state => state);
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
    dispatch(getListData());
  }, []);

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

  const filterData = text => {
    setSearchText(text);
    const data = fullData.filter(item => {
      return item.title.match(new RegExp(text, 'i'));
    });
    dispatch(setListData(data));
  };

  const onPressCard = async data => {
    const ref = database().ref('/items');
    ref
      .orderByChild('uid')
      .equalTo(data.uid)
      .on('child_added', function (snapshot) {
        console.log('snapshot', snapshot.key);
        ref.child(snapshot.key).update({isSelected: !data.isSelected});
      });
  };

  const titleItem = ({item, index}) => {
    return (
      <View key={index}>
        <TitleCard
          data={item}
          onPress={() => onPressCard(item)}
          isSelected={item.isSelected}
        />
      </View>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <SearchInput searchValue={searchText} filterData={filterData} />
      <FlatList
        renderItem={titleItem}
        keyExtractor={keyExtractor}
        data={listData}
        style={styles.flatList}
        contentContainerStyle={styles.contentStyles}
        initialNumToRender={10}
        maxToRenderPerBatch={30}
        updateCellsBatchingPeriod={70}
        windowSize={30}
      />
      <TouchableOpacity
        accessibilityLabel={ADD_ICON_TEST_ID}
        testID={ADD_ICON_TEST_ID}
        style={styles.addTitleContiner}
        onPress={() => navigation.navigate('Addtitle')}>
        <View style={styles.addTitle}>
          <Image
            style={styles.inputIcon}
            source={require('../../assets/images/plus.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
