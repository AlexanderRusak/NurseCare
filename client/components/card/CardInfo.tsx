import {useCallback} from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '../ui/Icon';

interface CardInfoProps {
  header: string;
  info?: string;
  position?: string;
  diploma?: string;
  phoneNumber?: string;
}

export const CardInfo = ({
  header,
  info,
  diploma,
  position,
  phoneNumber,
}: CardInfoProps) => {
  const linkingHandler = useCallback(() => {
    Linking.openURL(`tel:${phoneNumber}`);
  }, [phoneNumber]);

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.header}>
        {header}
      </Text>
      <Text style={styles.position}>{position}</Text>
      <Text numberOfLines={3} style={styles.info}>
        {info || 'Вывод из запоя'}
      </Text>
      {!!diploma ? (
        <View style={styles.diplomaContainer}>
          <Text>Диплом:</Text>
          <Text style={styles.diploma}> {diploma}</Text>
        </View>
      ) : null}
      {!!phoneNumber ? (
        <TouchableOpacity
          onPress={linkingHandler}
          style={styles.phoneContainer}>
          <Text>Контакты:</Text>
          <Text style={styles.phone}> {phoneNumber}</Text>
          <Icon iconFont="FontAwesome" iconName="phone" styles={styles.icon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: '55%',
  },
  header: {
    fontWeight: '500',
    fontSize: 20,
  },
  position: {
    marginTop: 2,
    fontWeight: '600',
    fontSize: 24,
  },
  info: {
    marginTop: 5,
    fontSize: 18,
  },
  diploma: {
    fontWeight: '600',
  },
  diplomaContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  phoneContainer: {
    height: 30,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    color: 'green',
    margin: 5,
    fontSize: 20,
  },
  phone: {
    fontWeight: '600',
    color: 'green',
  },
});
