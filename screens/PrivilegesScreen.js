import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Container, Content, Grid, Row, Col, Header, Left, Icon, Body, Title, Right } from 'native-base';

export default class PrivilegesScreen extends Component {
    static navigationOptions = {
        title: 'Privileges',

    };

    render() {
        return (
            < Container >
                <Header span style={styles.header}>
                    <Body>
                        <Text style={styles.title}>Privileges</Text>
                    </Body>
                    <Right />
                </Header>
                <Content>

                    <Grid>
                        <Row style={styles.statusbar}>
                            <Col >
                                <Row><Text style={styles.statusName}>McPoints</Text></Row>
                                <Row><Text style={styles.statusValue}>0</Text></Row>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </ Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusbar: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
    ecoupon: {
        flex: 1,
    },
    mcpoint: {
        flex: 2
    },
    statusName: {
        color: '#CF240A',
        fontWeight: '400',
        fontSize: 12
    },
    statusValue: {
        color: '#FEC208',
        fontWeight: '900',
        fontSize: 22
    },
    header: {
        backgroundColor: '#CF240A',

    },
    title: {
        fontSize: 26,
        color: '#FEC208',
        fontWeight: '900'

    }
});