import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import styles from './style';
const SearchInput = props => {
  const {searchValue, filterData} = props;
  return (
    <View style={styles.searchTitle}>
      <View style={styles.searchTitleInfo}>
        <FontAwesome icon={SolidIcons.search} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(0,0,0,0.5)"
          style={styles.profileInput}
          value={searchValue}
          onChangeText={data => {
            filterData(data);
          }}
        />
        <TouchableOpacity
          style={styles.closeBtn}
            onPress={() => filterData('')}
        >
          <FontAwesome icon={SolidIcons.times} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
