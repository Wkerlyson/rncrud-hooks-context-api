import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import UsersContext from '../context/UsersContext';

export default ({ route, navigation }) => {
    //console.warn(Object.keys(props.route.params))

    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UsersContext);

    return (
        <SafeAreaView style={style.form}>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Nome'
                value={user.name}
                style={style.input}
            />
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder='E-mail'
                value={user.email}
                style={style.input}
                keyboardType='email-address'
            />
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder='URL do avatar'
                value={user.avatarUrl}
                style={style.input}
            />
            <Button
                color='#13054c'
                title='Salvar'
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 45,
        paddingLeft: 10,
        color: '#424242',
        borderColor: '#e0e0e0',
        backgroundColor: '#eeeeee',
        borderRadius: 3,
        borderWidth: 1,
        marginBottom: 12
    },
}) 