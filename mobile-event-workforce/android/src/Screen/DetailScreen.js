import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
} from 'native-base';

// import styles from '../Assets/styles';

class DetailScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={styles.spasi} />
                    <Button full rounded warning>
                        <Text style={styles.textButton}>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    spasi: {
        paddingVertical: '5%',
    },
    textButton: {
        color: '#fff',
    },
});

export default DetailScreen;
