import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Title from '../../../component/title/Title';

export default function ProfileScreen({ navigation }) {
  const dataFile = [
    {
      id: 1,
      title: 'Order History',
      image: require('../../../../assets/images/red-clock.png'),
      btn: require('../../../../assets/images/right-forward.png'),
    },
    {
      id: 2,
      title: 'Personal Details',
      image: require('../../../../assets/images/red-male.png'),
      btn: require('../../../../assets/images/right-forward.png'),
    },
    {
      id: 3,
      title: 'Address',
      image: require('../../../../assets/images/red-address.png'),
      btn: require('../../../../assets/images/right-forward.png'),
    },
    {
      id: 4,
      title: 'Payment Method',
      image: require('../../../../assets/images/red-payment.png'),
      btn: require('../../../../assets/images/right-forward.png'),
    },
    {
      id: 5,
      title: 'Help',
      image: require('../../../../assets/images/red-help.png'),
      btn: require('../../../../assets/images/right-forward.png'),
    },
    {
      id: 6,
      title: 'Logout',
      image: require('../../../../assets/images/red-logout.png'),
      btn: require('../../../../assets/images/right-forward.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Title title={'Profile'} back={() => navigation.goBack()} />
      <View style={styles.imgProfileContainer}>
        <Image
          source={require('../../../../assets/images/user-1.png')}
          style={styles.imgProfile}
        />
      </View>
      <View>
        <Text style={styles.nameText}>Aleena Shaheen</Text>
        <Text style={styles.mailText}>Shaheenaleena@gmail.com</Text>
      </View>

      <FlatList
        data={dataFile}
        renderItem={({ item }) => {
          return (
            <View style={styles.allContainer}>
              <View style={styles.mainContainer}>
                <View style={styles.iconImagesContainer}>
                  <Image source={item.image} style={styles.iconImages} />
                </View>
                <View>
                  <Text style={styles.mainText}>{item.title}</Text>
                </View>
              </View>
              <View>
                <Image source={item.btn} style={styles.rightArrow} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  imgProfileContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  imgProfile: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 4,
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mailText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
  allContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 10,
  },
  iconImagesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 55,
    borderRadius: 20,
    backgroundColor: 'lightgray',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconImages: {
    width: 25,
    height: 25,
  },
  rightArrow: {
    width: 25,
    height: 25,
  },
});
