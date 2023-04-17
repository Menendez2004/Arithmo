import React, {useState} from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from '../../assets/style/Styles';
import { RoundedButton } from '../../RoundedButton';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTexform } from '../../CustomTexform';


export const HomeScreen = () => {
    
    const { email, password, onChange } = useViewModel()

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


    return (
        //Etiqueta view funciona como uina columna
        //vista main, contenedor de todo
        <View style={styles.container}>
            {/*vsita del logo */}



            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={styles.form}>
                <Text style={styles.formText}>Login</Text>

                <Image
                    style={styles.burbu}
                    source={require('../../../../assets/image/burbu.png')} />

                <View style={styles.logoContainer}>
                    <Image source={require('../../../../assets/image/icons.png')}
                        style={styles.logoImage} />
                </View>

                
                <CustomTexform
                image={require('../../../../assets/image/email.png')}
                placeholder='correo electronico'
                KeyboardType='email-address'
                property='email'
                onChangeText={onChange}
                value={email}
                />

                {/*ivista del botón de la password*/}
                <CustomTexform
                image={require('../../../../assets/image/password.png')}
                placeholder='Contraseña'
                KeyboardType='default'
                property='password'
                onChangeText={onChange}
                value={password}
                />

                <View >
                    <RoundedButton text='ENTRAR' onPress={ () =>{
                        console.log('Email. ' + email);
                        console.log('Pass: ' + password)
                    }} />
                </View>

                <View style={styles.formRegister}>
                    <Text>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterTex} >Registrate</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.rightBurble}
                    source={require('../../../../assets/image/burbuf.png')} />
            </View>

        </View >
    );
}
