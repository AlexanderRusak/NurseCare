import {Image, StyleSheet, View} from 'react-native';

export const AdvertisementComponentItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageAside}>
          <Image
            source={{
              uri: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
            }}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 20,
    justifyContent: 'flex-start',
    marginTop: 5,
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    width: '95%',
    height: '90%',
    justifyContent:'flex-end',
    backgroundColor:'red',
  },
  imageAside:{
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode:'cover',
    backgroundColor:'red',
    justifyContent:'flex-start'
  },
});
