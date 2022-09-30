import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {User} from '../../GraphQl/Queries/userQuery';
import {StackNavigation} from '../../interfaces/StackNavigation';
import {CARDSCREEN} from '../../screens/ScreenNames';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';
import {CardInfo} from './CardInfo';

interface FullCardItemProps {
  user: User;
}

export const FullCardItem = ({user}: FullCardItemProps) => {
  const [star, setStar] = useState<'star-o' | 'star'>('star-o');
  const {navigate} = useNavigation<StackNavigation>();

  const {birthDate, cv, firstName, lastName, phoneNumber, sex} = user;

  const toggleStarthandler = () => {
    star == 'star' ? setStar('star-o') : setStar('star');
  };

  const moveToFullCard = () => {
    navigate(CARDSCREEN, {
      user: user,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://us.123rf.com/450wm/domenicogelermo/domenicogelermo1909/domenicogelermo190900265/129438391-front-portrait-of-the-woman-with-beauty-face-isolated.jpg?ver=6',
          }}
        />
      {/*   <TouchableOpacity onPress={toggleStarthandler}>
          <Icon
            size={50}
            styles={{
              ...styles.icon,
              color: star === 'star' ? '#F6BE00' : '#000',
            }}
            iconFont="FontAwesome"
            iconName={star}
          />
        </TouchableOpacity> */}
      </View>
      <CardInfo
        header={`${firstName} ${lastName}`}
        position={cv?.secondName}
        diploma={cv?.docNumber}
        info={cv?.info || ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    height: '60%',
    borderWidth: 2,
    borderColor: mainColor,
  },
  imageContainer: {
    width: '45%',
    height:'45%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    margin: 5,
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: mainColor,
    borderRadius: 100,
  },
  icon: {
    alignSelf: 'center',
  },
});
