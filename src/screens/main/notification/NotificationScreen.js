import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from '../../../component/header/Header';
import Title from '../../../component/title/Title';
import { FlatList } from 'react-native-gesture-handler';

export default function NotificationScreen({ navigation, route }) {
  const todayNotify = route.params.today;

  const yesterdayNotify = route.params.yesterday;

  return (
    <View style={styles.container}>
      <Title title={'Notifications'} back={() => navigation.goBack()} />
      <View style={styles.topTextContainer}>
        <Text style={styles.lastText}>Last 30 Days</Text>
        <Text style={styles.allText}>All Marks As Read</Text>
      </View>
      <View>
        <Text style={styles.todayText}>Today</Text>
      </View>
      <View>
        <FlatList
          data={todayNotify}
          renderItem={({ item }) => {
            return (
              <View style={styles.sectionContainer}>
                <View>
                  <Image source={item.image} style={styles.img} />
                </View>
                <View>
                  <Text style={styles.lastText}>{item.title}</Text>
                  <Text style={styles.dayText}>{item.time}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <Text style={styles.todayText}>Yesterday</Text>
      </View>
      <View>
        <FlatList
          data={yesterdayNotify}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.sectionContainer}>
                  <View>
                    <Image source={item.image} style={styles.img} />
                  </View>
                  <View>
                    <Text style={styles.lastText}>{item.title}</Text>
                    <Text style={styles.dayText}>{item.time}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>See More</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 25,
    position: 'relative',
  },
  lastText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  allText: {
    color: 'red',
    fontSize: 19,
    fontWeight: 'bold',
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  todayText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    gap: 15,
    paddingVertical: 23,
    paddingHorizontal: 35,
    marginVertical: 15,
  },
  img: {
    width: 30,
    height: 30,
  },
  dayText: {
    fontSize: 15,
  },
  bottomContainer: {
    width: '115%',
    position: 'absolute',
    bottom: 10,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
