import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



const promotion = [
  { key: 1, image: 'https://i.pinimg.com/originals/55/61/29/5561297eabf2a8e7734650970c300bdb.jpg' },
  { key: 2, image: 'https://www.promotiontoyou.com/wp-content/uploads/2015/11/53-mcdonald-810x810.jpg' },
  { key: 3, image: 'https://www.promotiontoyou.com/wp-content/uploads/2018/12/Big-mac-50th-anniversary.jpg' }

]
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#FEC208',
    headerStyle: {
      backgroundColor: '#CF240A',
      height: 80
    },
  };
  renderItem = (item) => {
    const img = item.image
    return (
      <Card style={styles.promotionCard}>
        <CardItem style={styles.promotionItem} cardBody>
          <Image source={{ uri: img }} style={styles.promotionImage} />
        </CardItem>
      </Card>
    )
  }
  keyExtractor = (item) => {
    return item.image
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.promotion}>
            <FlatList
              data={promotion}
              renderItem={({ item }) => this.renderItem(item)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              initialScrollIndex={1}
              keyExtractor={(item, index) => `${item}_${index}`}
            />
          </View>

          <View style={styles.buttonGroup}>
            <Card transparent style={styles.mainCard}
            >
              <CardItem header button
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.mainCardItem}>

                <Text style={styles.mainText}> McDelivery Order</Text>
              </CardItem>
            </Card>
            <View style={styles.cardContainer}>
              <Card transparent style={styles.card}
                onPress={() => this.props.navigation.navigate('Detail')}
              >
                <CardItem header button style={styles.cardItem}>
                  <Image source={require('../images/orderhistory.png')} style={styles.iconImage} />
                  <Text style={styles.textCard}> Order History</Text>
                </CardItem>
              </Card>
              <Card transparent style={styles.card}
                onPress={() => this.props.navigation.navigate('Detail')}
              >
                <CardItem header button style={styles.cardItem}>
                  <Image source={require('../images/orderhistory.png')} style={styles.iconImage} />
                  <Text style={styles.textCard}> My Wallet</Text>
                </CardItem>
              </Card>
            </View>
            <Card transparent style={styles.cardRow}
              onPress={() => this.props.navigation.navigate('Detail')}
            >
              <CardItem header button style={styles.cardItem}>
                <Image source={require('../images/catering.png')} style={styles.iconImage} />
                <Text style={styles.textCard}> Catering Service</Text>
              </CardItem>
            </Card>
          </View>
          <View style={styles.privileges}>
            <Text style={styles.title}> Privileges </Text>

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  promotion: {
    height: 310,
    justifyContent: 'center',
    alignItems: 'center'
  },
  promotionCard: {
    width: 300,
    height: 300,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'transparent',
  },
  promotionItem: {
    borderRadius: 5
  },
  promotionImage: {
    height: 300,
    width: 300,
    borderRadius: 5
  },
  buttonGroup: {
    flex: 2,
    flexDirection: 'column'
  },
  cardContainer: {
    flexDirection: 'row'
  },
  card: {
    width: 180,
    backgroundColor: '#000000',
    borderRadius: 5,

  },
  cardRow: {
    backgroundColor: '#000000',
    borderRadius: 5,
  },
  cardItem: {
    backgroundColor: 'transparent',
    flexDirection: "row",
    justifyContent: "center"
  },
  textCard: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  mainCard: {
    backgroundColor: '#CF240A',
    borderRadius: 5,
  },
  mainCardItem: {
    backgroundColor: 'transparent',
    height: 80,
    flexDirection: "row",
    justifyContent: "center"
  },
  mainText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 20,

  },
  iconImage: {
    width: 25,
    height: 25,
  },
  privileges: {

    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }

});


