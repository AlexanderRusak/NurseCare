import React, { useRef } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { BottomSheet, BottomSheetRef } from 'react-native-sheet';
import {Icon} from '../components/ui/Icon';
import {mainColor} from '../theme/themeConstants';
import {ExpandableSearchMenu} from './ExpandableSearchMenu';

interface MapMenuProps {}

export const MapMenu = ({}: MapMenuProps) => {

  const bottomSheet = useRef<BottomSheetRef>(null);

  return (
    <TouchableOpacity  onPress={() => bottomSheet.current?.show()} style={styles.container}>
      <Icon styles={styles.icon} iconFont="FontAwesome" iconName="search" />
      <BottomSheet height={400} ref={bottomSheet}>
        <ExpandableSearchMenu/>
      </BottomSheet>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    height: '7%',
    position: 'absolute',
    bottom: '5%',
    borderRadius: 25,
    flexDirection: 'row',
    borderColor: mainColor,
    borderWidth: 2,
    backgroundColor:'#fff'
  },
  icon: {
    marginLeft: 10,
    color: mainColor,
  },
});
