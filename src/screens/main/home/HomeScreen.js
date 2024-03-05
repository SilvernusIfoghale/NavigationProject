import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  const detailsWomen = [
    {
      id: 1,
      img: require('../../../../assets/images/lady-dress.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      title: 'Women T-Shirt',
      info: ' Women T-Shirt is a style of fabric shirt named after the T-shap of its body and sleeves. Traditional, it has short sleeves and a round neckless, known as acrew neck, which lack a collar.',
      price: '$341',
    },
  ];

  const detailsMen = [
    {
      id: 1,
      img: require('../../../../assets/images/man-shirt.png'),
      icon: require('../../../../assets/images/favourite-red.png'),
      title: 'Men T-Shirt',
      info: ' Men T-Shirt is a style of fabric shirt named after the T-shap of its body and sleeves. Traditional, it has short sleeves and a round neckless, known as acrew neck, which lack a collar.',
      price: '$233',
    },
  ];

  const notificationToday = [
    {
      id: 1,
      title: 'Special Offer',
      time: 'Today 10:30 PM',
      image: require('../../../../assets/images/icon-notification.png'),
    },
  ];
  const notificationYesterday = [
    {
      id: 1,
      title: 'Special Offer',
      time: 'Yesterday 10:30 PM',
      image: require('../../../../assets/images/icon-notification.png'),
    },
    {
      id: 2,
      title: 'Special Offer',
      time: 'Yesterday 10:30 PM',
      image: require('../../../../assets/images/icon-notification.png'),
    },
    {
      id: 3,
      title: 'Special Offer',
      time: 'Yesterday 10:30 PM',
      image: require('../../../../assets/images/icon-notification.png'),
    },
    {
      id: 4,
      title: 'Special Offer',
      time: 'Yesterday 10:30 PM',
      image: require('../../../../assets/images/icon-notification.png'),
    },
  ];

  const dataFile = [
    {
      id: 1,
      text: 'All',
    },
    {
      id: 2,
      text: "Men's",
    },
    {
      id: 3,
      text: 'Women',
    },
    {
      id: 4,
      text: 'Children',
    },
    {
      id: 5,
      text: 'Unisex',
    },
    {
      id: 6,
      text: 'Beddings',
    },
    {
      id: 7,
      text: 'Gifts',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text style={styles.welcome}>Welcome back!</Text>
          <Text style={styles.name}>Aleena shaheen</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('NotificationScreen', {
              today: notificationToday,
              yesterday: notificationYesterday,
            })
          }
        >
          <View style={styles.imgContainer}>
            <Image
              source={require('../../../../assets/images/notification.png')}
              style={styles.img}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../../../assets/images/search.png')}
          style={styles.iconImg}
        />

        <TextInput placeholder="Search" style={styles.textInput} />
        <Image
          source={require('../../../../assets/images/icon-mic.png')}
          style={styles.iconImg}
        />
      </View>
      <View style={styles.redContainer}>
        <View>
          <Text style={styles.textShop}>
            Shop with Us! Get 50% off on items
          </Text>
          <Text style={styles.shopBtn}>Shop Now</Text>
        </View>
        <View>
          <Image
            source={require('../../../../assets/images/lady-top.png')}
            style={styles.imgRedBox}
          />
        </View>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={dataFile}
          renderItem={({ item }) => {
            return (
              <View style={styles.option}>
                <Text style={styles.optionText}>{item.text}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.picContainer}>
        <View>
          <View style={styles.imgManContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Description', { eachDetails: detailsMen })
              }
            >
              <Image
                source={require('../../../../assets/images/man-shirt.png')}
                style={styles.imgMan}
              />
            </TouchableOpacity>
            <View style={styles.imgIconContainer}>
              <Image
                source={require('../../../../assets/images/favourite-red.png')}
                style={styles.imgIcon}
              />
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.titleText}>Men T-Shirt</Text>
            <Text style={styles.priceText}>$233</Text>
          </View>
        </View>
        <View>
          <View style={styles.imgManContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Description', {
                  eachDetails: detailsWomen,
                })
              }
            >
              <Image
                source={require('../../../../assets/images/lady-dress.png')}
                style={styles.imgMan}
              />
            </TouchableOpacity>
            <View style={styles.imgIconContainer}>
              <Image
                source={require('../../../../assets/images/favourite-gray.png')}
                style={styles.imgIcon}
              />
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.titleText}>Women T-Shirt</Text>
            <Text style={styles.priceText}>$341</Text>
          </View>
        </View>
      </View>
      <View style={styles.imgBottomContainer}>
        <Image
          source={require('../../../../assets/images/star-red.png')}
          style={styles.imgBottom}
        />
        <Image
          source={require('../../../../assets/images/wishlist.png')}
          style={styles.imgBottom}
        />
        <Image
          source={require('../../../../assets/images/star-red.png')}
          style={styles.imgBottom}
        />
        <Image
          source={require('../../../../assets/images/wishlist.png')}
          style={styles.imgBottom}
        />
      </View>
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
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  imgContainer: {
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    backgroundColor: 'lightgray',
    padding: 13,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconImg: {
    marginHorizontal: 10,
    width: 28,
    height: 28,
  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '70%',
    paddingHorizontal: 10,
  },
  redContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 25,
    padding: 15,
    justifyContent: 'space-between',
  },
  textShop: {
    width: 160,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 10,
    lineHeight: 35,
  },
  shopBtn: {
    backgroundColor: 'lightgray',
    width: 120,
    fontSize: 18,
    padding: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  imgRedBox: {
    width: 120,
    height: 150,
  },
  option: {
    padding: 3,
  },
  optionText: {
    padding: 10,
    paddingHorizontal: 23,
    borderRadius: 28,
    backgroundColor: 'lightgray',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatlist: {
    position: 'absolute',
    bottom: 270,
    right: 0,
    left: 0,
  },
  imgManContainer: {
    marginTop: 70,
    backgroundColor: 'lightgray',
    width: 155,
  },
  imgMan: {
    height: 185,
    width: 140,
  },

  priceContainer: {
    width: 155,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  picContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 10,
  },
  imgIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  imgIcon: {
    width: 23,
    height: 23,
  },
  imgBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
  imgBottom: {
    width: 25,
    height: 25,
  },
});
