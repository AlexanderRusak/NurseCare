import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';
import {Icon} from '../components/ui/Icon';
import {clearCoordinatesData, Coordinates} from '../context/CoordinatesContext';
import {mainColor} from '../theme/themeConstants';
import {ExpandableSearchMenu} from './ExpandableSearchMenu';
import {SelectLocationComponent} from './SelectLocationComponent';



export const MapMenu = () => {
  const bottomSheet = useRef<BottomSheetRef>(null);
  const {coordinatesData, update} = useContext(Coordinates);

  useEffect(() => {
    !!coordinatesData.coordinates
      ? bottomSheet.current?.show()
      : bottomSheet.current?.hide();
  }, [coordinatesData]);

  const bottomSheetHandler = useCallback(() => {
    bottomSheet.current?.show();
  }, []);



  const bottomSheetCloseHandler = useCallback(
    () => update?.(clearCoordinatesData),
    [],
  );

  return (
    <TouchableOpacity onPress={bottomSheetHandler} style={styles.container}>
      <Icon styles={styles.icon} iconFont="FontAwesome" iconName="search" />
      <BottomSheet
        onCloseFinish={bottomSheetCloseHandler}
        height={coordinatesData.coordinates ? 200 : 400}
        ref={bottomSheet}>
        {coordinatesData.coordinates ? (
          <SelectLocationComponent locationTitle={coordinatesData.title!} />
        ) : (
          <ExpandableSearchMenu />
        )}
      </BottomSheet>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '90%',
    height: '7%',
    position: 'absolute',
    bottom: '5%',
    borderRadius: 25,
    flexDirection: 'row',
    borderColor: mainColor,
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 10,
    color: mainColor,
  },
});
