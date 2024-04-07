import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dataFile } from '../../../component/data/Data';
import { detailsMen } from '../../../component/data/Data';
import { detailsWomen } from '../../../component/data/Data';
import { notificationToday } from '../../../component/data/Data';
import { notificationYesterday } from '../../../component/data/Data';

export default function HomeScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('All');
  const [selectedImg, setSelectedImg] = useState(true);
  const [selectedImg1, setSelectedImg1] = useState('');
  const [products, setProducts] = useState([]);

  const GetProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    GetProducts();
  }, []);

  const handleFavorite = (id) => {
    if (selectedImg1 == id) {
      setSelectedImg1('');
    } else {
      setSelectedImg1(id);
    }
  };

  const footerRender = () => {
    return <View style={{ marginBottom: 150 }}></View>;
  };

  const RenderHeader = () => {
    return (
      <>
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
                <TouchableOpacity onPress={() => setSelectedOption(item.text)}>
                  <View style={styles.option}>
                    <Text
                      style={[
                        styles.optionText,
                        {
                          backgroundColor:
                            selectedOption == item.text ? 'red' : 'lightgray',
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </>
    );
  };

  const choices = [
    {
      id: 1,
      img: require('../../../../assets/images/man-shirt.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$233',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 2,
      img: require('../../../../assets/images/lady-dress.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$341',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 3,
      img: require('../../../../assets/images/man-shirt.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$233',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 4,
      img: require('../../../../assets/images/lady-dress.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$341',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 5,
      img: require('../../../../assets/images/man-shirt.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$233',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 6,
      img: require('../../../../assets/images/lady-dress.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$341',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 7,
      img: require('../../../../assets/images/man-shirt.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$233',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 8,
      img: require('../../../../assets/images/lady-dress.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$341',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 9,
      img: require('../../../../assets/images/man-shirt.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$233',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
    },
    {
      id: 10,
      img: require('../../../../assets/images/lady-dress.png'),
      icon: require('../../../../assets/images/favourite-gray.png'),
      gender: 'Men T-Shirt',
      price: '$341',
      starIcon: require('../../../../assets/images/star-red.png'),
      wishlistIcon: require('../../../../assets/images/wishlist.png'),
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
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => {
            return (
              <View>
                {/* <Image
                  source={{ uri: item.image }}
                  style={{ width: 50, height: 50 }}
                /> */}
                {/* <Text>{item.price} </Text> */}
                {/* <Text>{console.log(item.image)} </Text> */}
                {/* <Text>{item.title} </Text> */}
              </View>
            );
          }}
        />
      </View>

      <View style={styles.picContainer}>
        <FlatList
          ListHeaderComponent={RenderHeader}
          ListFooterComponent={footerRender}
          showsVerticalScrollIndicator={false}
          data={choices}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.imgManContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Description', {
                        eachDetails: detailsWomen,
                      })
                    }
                  >
                    <Image source={item.img} style={styles.imgMan} />
                  </TouchableOpacity>
                  <View style={styles.imgIconContainer}>
                    {selectedImg1 == item.id ? (
                      <TouchableOpacity
                        onPress={() => {
                          handleFavorite(item.id);
                        }}
                      >
                        <Image
                          source={item.icon}
                          style={[styles.imgIcon, { tintColor: 'red' }]}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          handleFavorite(item.id);
                        }}
                      >
                        <Image
                          source={item.icon}
                          style={[styles.imgIcon, { tintColor: 'gray' }]}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.titleText}>{item.gender}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
                <View style={styles.imgBottomContainer}>
                  <Image source={item.starIcon} style={styles.imgBottom} />
                  <Image source={item.wishlistIcon} style={styles.imgBottom} />
                </View>
              </View>
            );
          }}
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
    // position: 'absolute',
    // bottom: 350,
    // right: 0,
    // left: 0,
  },
  imgManContainer: {
    marginTop: 20,
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
    // marginBottom: -35,
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
