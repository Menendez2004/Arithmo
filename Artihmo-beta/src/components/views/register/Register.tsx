import React from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import RegisterStyles from '../../assets/style/RegisterStyle';
import { RoundedButton } from '../../RoundedButton';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import usesViewRegisterModel from './ViewModel'
import { CustomTexform } from '../../CustomTexform';


export const RegisterScreen = () => {

  const { name, email, lastName, password, confirmPassword, onChange, Register } = usesViewRegisterModel()


  return (
    <View style={RegisterStyles.container}>
            {/*vsita del logo */}



            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={RegisterStyles.form}>

                <Image
                    style={RegisterStyles.burbu}
                    source={require('../../../../assets/image/burbu.png')}
                    />

                <View style={RegisterStyles.logoContainer}>
                    <Image 
                        source={require('../../../../assets/image/user_image.png')}
                        style={RegisterStyles.logoImage}
                    />
                    <Text style={RegisterStyles.logotext}>Seleciona una imagen</Text>
                </View>

                <CustomTexform
                placeholder='Nombres'
                KeyboardType='default'
                image={require('../../../../assets/image/Name.png')}
                property='name'
                onChangeText={onChange}
                value={name}
                />



                <CustomTexform
                placeholder='Apellidos'
                KeyboardType='default'
                image={require('../../../../assets/image/lastname.png')}
                property='lastName'
                onChangeText={onChange}
                value={lastName}
                />



                <CustomTexform
                placeholder='Email'
                KeyboardType='default'
                image={require('../../../../assets/image/email.png')}
                property='email'
                onChangeText={onChange}
                value={email}
                />


                <CustomTexform
                placeholder='Contraseña'
                KeyboardType='default'
                image={require('../../../../assets/image/password.png')}
                property='password'
                onChangeText={onChange}
                value={password}
                secureTextEntry={true}
                />

                <CustomTexform
                placeholder='Confirmar Contraseña'
                KeyboardType='default'
                image={require('../../../../assets/image/confirmpass.png')}
                property='confirmPassword'
                onChangeText={onChange}
                value={confirmPassword}
                secureTextEntry={true}
                />

                <View >
                    <RoundedButton
                      text='CONFIRMAR'
                      onPress={() => Register()}
                    />
                </View>

                <Image
                    style={RegisterStyles.rightBurble}
                    source={require('../../../../assets/image/burbuf.png')}
                  />
            </View>

        </View >
  )
}
