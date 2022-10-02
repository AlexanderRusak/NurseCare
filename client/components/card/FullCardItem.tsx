import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {User} from '../../GraphQl/Queries/userQuery';
import {StackNavigation} from '../../interfaces/StackNavigation';
import {CARDSCREEN} from '../../screens/ScreenNames';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';
import {CardInfo} from './CardInfo';
import {Info} from '../ui/Info';

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
        <CardInfo
          header={`${firstName} ${lastName}`}
          position={cv?.secondName}
          phoneNumber={phoneNumber}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info} numberOfLines={6}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
          maiores. Tempore possimus officia repellat aliquid corporis magnam
          itaque tempora illo? Odit unde totam adipisci repudiandae consectetur
          sapiente, deleniti odio veritatis.
        </Text>
        <View style={styles.diplomaInfoContainer}>
          <Info header="Сертификат специалиста" text={cv!.docNumber} />
          <Info header="Дата выдачи" text={cv!.docNumber} />
          <Info header="Организация выдачи" text={cv!.docNumber} />
        </View>
      </View>
      {/*  <View style={styles.shortContainer}>
        <View style={styles.imageContainer}>
         
        </View>
     
      </View>
      <View style={styles.fullCardInfo}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
          maiores. Tempore possimus officia repellat aliquid corporis magnam
          itaque tempora illo? Odit unde totam adipisci repudiandae consectetur
          sapiente, deleniti odio veritatis.
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 2,
    borderColor: mainColor,
  },
  imageContainer: {
    marginTop:10,
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    margin: 10,
    width: '40%',
    height: '100%',
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: mainColor,
    borderRadius: 100,
  },
  infoContainer: {
    margin: 20,
    justifyContent:'center'
  },
  info: {
    fontWeight: '500',
    fontSize:18
  },
  diplomaInfoContainer: {
    marginTop:10
  },
  /*
  icon: {
    alignSelf: 'center',
  },
  shortContainer: {
    flexDirection: 'row',
  },
  fullCardInfo: {
    backgroundColor: 'red',
  }, */
});
