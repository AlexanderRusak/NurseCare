import {Image, StyleSheet, Text, View} from 'react-native';

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
        <Text numberOfLines={8} style={styles.textStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release.
        </Text>
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
    padding: 5,
    display: 'flex',
    width: '95%',
    height: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageAside: {
    width: '50%',
    height: '100%',
  },
  textStyle: {
    width: '50%',
    overflow: 'scroll',
    paddingHorizontal: 5,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    borderRadius: 5,
  },
});
