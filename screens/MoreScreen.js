import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import aboutApp from '../mock-data/aboutApp'
import moreMenu from '../mock-data/moreMenu'
import { Container, Header, Content, List, ListItem, Body, Icon, Left, Right } from 'native-base';


export default class MoreScreen extends Component {
  static navigationOptions = {
    title: 'More',
  };
  renderItem = (item) => {
    return (
      <ListItem noBorder >
        <Left>
          <Text>{item.name}</Text>
        </Left>
        <Right>
          <Ionicons name="ios-arrow-forward" size={12} />
        </Right>
      </ListItem>
    )
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body >
            <Text style={styles.title}>McDonald's</Text>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>About McThai</Text>
            </ListItem>
            <FlatList
              data={moreMenu}
              renderItem={({ item }) => this.renderItem(item)}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `${item}_${index}`}
            />

            <ListItem itemDivider>
              <Text>About McDonald's App</Text>
            </ListItem>
            <FlatList
              data={aboutApp}
              renderItem={({ item }) => this.renderItem(item)}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `${item}_${index}`}
            />

          </List>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#CF240A',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 26,
    color: '#FEC208',
    fontWeight: '900',
    marginTop: 24

  }

});