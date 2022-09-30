import {StyleSheet, Text, View} from 'react-native';

interface CardInfoProps {
  header: string;
  info: string;
  position?: string;
  diploma?: string;
}

export const CardInfo = ({header, info, diploma, position}: CardInfoProps) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.header}>
        {header}
      </Text>
      <Text style={styles.position}>{position}</Text>
      <Text numberOfLines={3} style={styles.info}>
        {info}
      </Text>
      <View style={styles.diplomaContainer}>
        <Text>Диплом:</Text>
        <Text style={styles.diploma}> {diploma}</Text>
      </View>
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
  diplomaContainer:{
    marginTop: 5,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  }
});
