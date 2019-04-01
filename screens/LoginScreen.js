import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../mock-data/Profile'
import { Container, Button, Header, Content, List, ListItem, Body, Icon, Left, Right, Grid, Row, Col } from 'native-base';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'LoginPage',
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Grid>
                        <Row>
                            <Col size={100} style={styles.close} onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="ios-close" size={42} color={'#FFFFFF'} />
                            </Col>
                        </Row>

                        <Row style={styles.row}>
                            <Image
                                style={styles.logo}
                                source={require('../images/frenchfries.png')}
                            />
                        </Row>

                    </Grid>
                    <Button block danger style={styles.button} onPress={() => this.props.navigation.navigate('Profile', { profile: Profile })} >
                        <Ionicons name="logo-facebook" size={18} color={'#FFFFFF'} />
                        <Text style={styles.buttonText}> LOGIN WITH FACEBOOK</Text>
                    </Button>
                    <Row style={styles.row}>
                        <Text style={styles.buttonText} >Or you can login or sign up by email </Text>
                    </Row>
                    <Row>
                        <Col>
                            <Button block danger style={styles.button}>
                                <Text style={styles.buttonText}> LOGIN </Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button block danger style={styles.button}>
                                <Text style={styles.buttonText}> SIGN UP </Text>
                            </Button>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Text style={styles.buttonText} >By creating an account, you agree to McDonald's</Text>
                    </Row>
                    <Row style={styles.row}>

                        <Text style={styles.term} >Term of Use</Text>
                    </Row>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgb(185,0,23)',
    },
    header: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 26,
        color: '#FEC208',
        fontWeight: '900',
        marginTop: 24

    },
    row: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
        width: 240,
        height: 240,
    },
    buttonText: {
        fontWeight: '900',
        color: '#FFFFFF'
    },
    button: {
        margin: 20,
        backgroundColor: 'rgb(208,2,27)',
        elevation: 0,
        borderRadius: 8

    },
    close: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 20,
        marginRight: 16
    },
    term: {
        color: '#FEC208',
        fontWeight: '900',
    }

});