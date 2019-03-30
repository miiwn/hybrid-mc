import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class PrivilegesScreen extends Component {
    static navigationOptions = {
        title: 'Privileges',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> Detail Screen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});