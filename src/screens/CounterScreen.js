import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_count':
            return { ...state, counter: action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({
                        type: 'change_count',
                        payload: counter + 1
                    });
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({
                        type: 'change_count',
                        payload: counter - 1
                    });
                }}
            />
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
