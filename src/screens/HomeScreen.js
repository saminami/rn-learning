import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Default content</Text>
            <Button
                title="Go to components demo"
                onPress={() => navigation.navigate('Components')}
            />
            <Button
                title="Go to list demo"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title="Go to image demo"
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title="Go to counter screen"
                onPress={() => navigation.navigate('Counter')}
            />
            <Button
                title="Go to color demo"
                onPress={() => navigation.navigate('Color')}
            />
            <Button
                title="Go to Square demo"
                onPress={() => navigation.navigate('Square')}
            />
            <Button
                title="Go to Text Input demo"
                onPress={() => navigation.navigate('Text')}
            />
            <Button
                title="Go to Box demo"
                onPress={() => navigation.navigate('Box')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
