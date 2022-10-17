import React, {useCallback, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Coordinates} from '../context/CoordinatesContext';
import {dangerMainColor, mainColor} from '../theme/themeConstants';

interface SelectLocationComponentProps {
  locationTitle: string;
}

export const SelectLocationComponent = ({
  locationTitle,
}: SelectLocationComponentProps) => {
  const {update} = useContext(Coordinates);

  const cancelButtonHandler = useCallback(() => {
    update?.({
      coordinates: null,
      title: null,
    });
  }, []);

  return (
    <>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{locationTitle}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Save</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={cancelButtonHandler}
          style={{...styles.buttonContainer, ...styles.buttonCancelContainer}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  locationContainer:{
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  location:{
    fontSize:18
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },
  buttonContainer: {
    marginTop: 10,
    alignSelf: 'center',
    width: '40%',
    height: 50,
    padding: 10,
    backgroundColor: mainColor,
    borderRadius: 25,
  },
  buttonCancelContainer: {
    backgroundColor: dangerMainColor,
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
