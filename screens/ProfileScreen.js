import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { List, ListItem, Left, Right, Icon, Row, Grid, Container, Content, Col, Text } from 'native-base';


export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerTintColor: '#FEC208',
        headerStyle: {
            backgroundColor: '#CF240A',
            height: 80
        },
    };

    render() {
        let IconComponent = Ionicons;

        return (
            < Container >
                <Content>
                    <Grid>
                        <Row style={styles.statusbar}>
                            <Col size={20}>
                                <Row><Text>E - Coupon</Text></Row>
                                <Row><Text>0</Text></Row>
                            </Col>
                            <Col size={60}>
                                <Row><Text>McPoints</Text></Row>
                                <Row><Text>0</Text></Row>
                            </Col>
                            <Col size={20}>
                                <IconComponent name={`ios-mail`} size={25} color={'#000000'} />
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container >
            // <View style={styles.container}>
            // <View style={styles.statusbar}>
            //         <View style={styles.ecoupon}>
            //             <Text style={styles.statusName}> E - Coupon</Text>
            //             <Text style={styles.statusValue}> 0 </Text>
            //         </View>
            //         <View style={styles.mcpoint}>
            //             <Text style={styles.statusName}> McPoint</Text>
            //             <Text style={styles.statusValue}> 0 </Text>
            //         </View>
            //         <View style={styles.message}>
            //             <IconComponent name={`ios-mail`} size={25} color={'#000000'} />

            //         </View>
            //     </View> 

            // </View>
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
        // flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 5,
        height: 40
    },
    ecoupon: {
        flex: 1,
    },
    mcpoint: {
        flex: 2
    },
    statusName: {
        color: '#CF240A',
        fontWeight: '600',
        fontSize: 14
    },
    statusValue: {
        color: '#FEC208',
        fontWeight: '900',
        fontSize: 22
    },
    message: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5
    },
    list: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'stretch',

        backgroundColor: 'grey',

    }
});