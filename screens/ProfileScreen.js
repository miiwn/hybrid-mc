import React, { Component } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { List, ListItem, Header, Left, Right, Icon, Row, Grid, Container, Content, Col, Text } from 'native-base';


export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerTintColor: '#FEC208',
        headerStyle: {
            backgroundColor: '#CF240A',
            height: 80
        },
    };

    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }

    renderHeader = () => {
        const { login } = this.state;
        if (login) {
            return (
                <Header span style={styles.header}>
                    <Left style={styles.profileColumnName}>
                        <Text style={styles.profileName}>Vipatip Thanunpraditkul</Text>
                    </Left>
                    <Right style={styles.profileColumnPic}>
                        <Image
                            style={styles.profilePic}
                            source={require('../images/profileThumbnail.png')}
                        />
                    </Right>
                </Header>
            )
        }
        return (
            <Header span style={styles.header}>
                <Left style={styles.profileColumnName}>
                    <Text style={styles.profileName}>Vipatip Thanunpraditkul</Text>
                </Left>
                <Right style={styles.profileColumnPic}>
                    <Image
                        style={styles.profilePic}
                        source={require('../images/profileThumbnail.png')}
                    />
                </Right>
            </Header>
        )
    }
    render() {
        let profile;
        if (this.props.navigation.state.params) {
            profile = this.props.navigation.state.params.profile
        }
        return (
            < Container >
                <Header span style={styles.header}>
                    <Left style={styles.profileColumnName}>
                        {profile ?
                            <Text style={styles.profileName}>{profile.name}</Text> :
                            <Text style={styles.profileName} onPress={() => this.props.navigation.navigate('Login')}
                                title="Dismiss">Login / Sign Up</Text>}
                    </Left>
                    <Right style={styles.profileColumnPic}>
                        {profile ? <Image
                            style={styles.profilePic}
                            source={profile.images}
                        /> : null}
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row style={styles.statusbar}>
                            <Col size={20}>
                                <Row><Text style={styles.statusName}>E - Coupon</Text></Row>
                                <Row><Text style={styles.statusValue}>0</Text></Row>
                            </Col>
                            <Col size={70}>
                                <Row><Text style={styles.statusName}>McPoints</Text></Row>
                                <Row><Text style={styles.statusValue}>0</Text></Row>
                            </Col>
                            <Col size={10} style={styles.message}>
                                <Feather name={`mail`} size={25} color={'#000000'} />
                            </Col>
                        </Row>
                    </Grid>
                    <List style={styles.menu}>
                        <ListItem noBorder noIndent>
                            <FontAwesome style={styles.listIcon} name={`vcard-o`} size={14} color={'#000000'} />
                            <Text>Personal Information </Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <FontAwesome style={styles.listIcon} name={`heart-o`} size={14} color={'#000000'} />
                            <Text>Favourite Menu</Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <Feather style={styles.listIcon} name={`list`} size={16} color={'#000000'} />

                            <Text>Order History</Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <SimpleLineIcons style={styles.listIcon} name={`wallet`} size={16} color={'#000000'} />
                            <Text>My Wallet</Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <FontAwesome style={styles.listIcon} name={`history`} size={16} color={'#000000'} />
                            <Text>McPoints History</Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <FontAwesome style={styles.listIcon} name={`location-arrow`} size={16} color={'#000000'} />
                            <Text>My address</Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <FontAwesome style={styles.listIcon} name={`credit-card`} size={16} color={'#000000'} />
                            <Text>My Credit Cards</Text>
                        </ListItem>
                        <ListItem noBorder noIndent>
                            <Feather style={styles.listIcon} name={`settings`} size={14} color={'#000000'} />
                            <Text>Setting</Text>
                        </ListItem>
                    </List>
                </Content >
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
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 34,
        paddingBottom: 8,
        backgroundColor: 'rgb(185,0,23)',
        height: 100
    },
    profileColumnName: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    profileColumnPic: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profileName: {
        fontSize: 26,
        color: '#FEC208',
        fontWeight: '900'
    },
    profilePic: {
        width: 55,
        height: 55,
        borderRadius: 28,
    },
    statusbar: {
        // flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        paddingVertical: 8,
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
    message: {
        justifyContent: 'center',
        marginRight: 5
    },
    menu: {
        flex: 4,
        backgroundColor: '#f9f9f9',

    },
    listIcon: {
        marginRight: 10
    }
});