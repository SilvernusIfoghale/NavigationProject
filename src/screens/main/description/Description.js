import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Title from '../../../component/title/Title';
import Star from '../../../component/redStar/Star';

export default function Description({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <View>
          <Title back={() => navigation.goBack()} />
        </View>
        <View style={styles.imgIconContainer}>
          <Image
            source={require('../../../../assets/images/favourite-red.png')}
            style={styles.redIcon}
          />
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../assets/images/lady-dress.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.headSection}>
          <View>
            <Text style={styles.womenText}>Women T-Shirt</Text>
          </View>
          <View>
            <View style={styles.starContainer}>
              <Star />
              <Star />
              <Star />
              <Star />
            </View>

            <Text style={styles.reviewText}>2038 Reviews</Text>
          </View>
        </View>
        <View>
          <Text style={styles.selectText}>Select your Size</Text>
        </View>
        <View style={styles.selectWrapper}>
          <View style={styles.sizeContainer}>
            <View style={styles.selectContainer}>
              <Text style={styles.textSize}>S</Text>
            </View>
            <View style={styles.mContainer}>
              <Text style={styles.textSize}>M</Text>
            </View>
            <View style={styles.selectContainer}>
              <Text style={styles.textSize}>L</Text>
            </View>
            <View style={styles.selectContainer}>
              <Text style={styles.textSize}>XL</Text>
            </View>
          </View>
          <View>
            <View style={styles.selectContainerLast}>
              <Text style={styles.textIncr}>-</Text>
              <Text style={styles.textIncr}>2</Text>
              <Text style={styles.textIncr}>+</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.womenText}>Description</Text>
          <Text style={styles.desText}>
            T-Shirt is a style of fabric shirt named after the T-shap of its
            body and sleeves. Traditional, it has short sleeves and a round
            neckless, known as acrew neck, which lack a collar.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.priceText}>$341</Text>
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Shop Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgContainer: {
    backgroundColor: 'lightgray',
    borderBottomRightRadius: 55,
    borderBottomLeftRadius: 50,
    height: 380,
    width: '100%',
  },
  img: {
    height: 380,
    width: '90%',
  },
  topNav: {
    position: 'absolute',
    top: 35,
    paddingHorizontal: 20,
    flexDirection: 'row',
    zIndex: 1,
  },
  imgIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    right: 30,
  },
  redIcon: {
    width: 30,
    height: 30,
  },
  bodyContainer: {
    paddingTop: 20,
    paddingHorizontal: 30,
    height: '100%',
    width: '100%',
  },
  headSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  starContainer: {
    flexDirection: 'row',
  },
  womenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 17,
    padding: 7,
  },
  selectText: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  selectWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  selectContainer: {
    backgroundColor: 'lightgray',
    width: 44,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
  },
  mContainer: {
    backgroundColor: 'red',
    width: 44,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  selectContainerLast: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    width: 90,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
  },
  textSize: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textIncr: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 16,
  },
  desText: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 20,
  },
  bottomContainer: {
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },

  btnContainer: {
    backgroundColor: 'red',
    // width: 250,
    // height: 50,
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
