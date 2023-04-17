import React, {useState} from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from '../../assets/style/Styles';
import { RoundedButton } from '../../RoundedButton';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';


export const HomeScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                
                <View style={styles.imputForm} >
                    {/*imagenes de formulario email*/}
                    <Image source={require('../../../../assets/image/email.png')}
                        style={styles.formIcon} />

                    <TextInput
                        style={styles.texImputForm}
                        placeholder='Email'
                        keyboardType='email-address'
                        value={email}
                        onChangeText ={text => setEmail(text)}
                    />
                </View>

                {/*ivista del botón de la password*/}
                <View style={styles.imputForm} >
                    {/*imagenes de formulario password*/}
                    <Image source={require('../../../../assets/image/Password.png')}
                        style={styles.formIcon1} />

                    <TextInput
                        style={styles.texImputForm}
                        placeholder='password'
                        keyboardType='default'
                        secureTextEntry={true}
                        value={password}
                        onChangeText ={text => setPassword(text)}
                    />
                </View>

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
