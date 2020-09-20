import * as React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <Button onPress={() => navigation.navigate('Detail')}>
                    <Text>Detail Stack</Text>
                </Button>
            </Content>
        </Container>
    );
};

export default HomeScreen;
