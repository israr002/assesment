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
import React from 'react';
import {View, Image, TouchableOpacity, Text, Checkbox} from 'react-native';
import styles from './styles';
import {CARD_TEST_ID} from '../../constants/TestId';

const TitleCard = props => {
  const {data, onPress, multipleSelection, isSelected} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={CARD_TEST_ID}
        testID={CARD_TEST_ID}
        style={[
          styles.touchableOpacity,
          multipleSelection && styles.MultiContainer,
        ]}
        onPress={onPress}>
        <View style={styles.cardContainer}>
          <View
            style={[styles.checkBox, isSelected && styles.selectedCheckBox]}>
            {isSelected && (
              <Image
                style={styles.tick}
                source={require('../../assets/images/tick.png')}
              />
            )}
          </View>
          <Text style={styles.nameText}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const areEqual = (prevProps, nextProps) => {
  const { isSelected } = nextProps;
  const { isSelected: prevIsSelected } = prevProps;
  
   return  isSelected === prevIsSelected;

};

export default React.memo(TitleCard, areEqual);

