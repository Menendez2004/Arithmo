import React from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import RegisterStyles from '../../assets/style/RegisterStyle';
import { RoundedButton } from '../../RoundedButton';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';


export const RegisterScreen = () => {
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

                <View style={RegisterStyles.imputForm} >
                    <Image 
                      source={require('../../../../assets/image/user.png')}
                      style={RegisterStyles.formIcon1}
                    />
                    <TextInput
                        style={RegisterStyles.texImputForm}
                        placeholder='Nombre'
                        keyboardType='default'
                    />
                </View>

                <View style={RegisterStyles.imputForm} >
                    <Image 
                      source={require('../../../../assets/image/my_user.png')}
                      style={RegisterStyles.formIcon1}
                    />
                    <TextInput
                        style={RegisterStyles.texImputForm}
                        placeholder='apellidos'
                        keyboardType='default'
                    />
                </View>


                
                <View style={RegisterStyles.imputForm} >
                    {/*imagenes de formulario email*/}
                    <Image 
                      source={require('../../../../assets/image/email.png')}
                      style={RegisterStyles.formIcon}
                    />
                    <TextInput
                        style={RegisterStyles.texImputForm}
                        placeholder='Email'
                        keyboardType='email-address'
                    />
                </View>

                {/*ivista del botón de la password*/}
                <View style={RegisterStyles.imputForm} >
                    {/*imagenes de formulario password*/}
                    <Image
                      source={require('../../../../assets/image/Password.png')}
                      style={RegisterStyles.formIconps}
                    />
                    <TextInput
                        style={RegisterStyles.texImputForm}
                        placeholder='password'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={RegisterStyles.imputForm} >
                    {/*imagenes de formulario password*/}
                    <Image
                      source={require('../../../../assets/image/Password.png')}
                      style={RegisterStyles.formIconps}
                    />
                    <TextInput
                        style={RegisterStyles.texImputForm}
                        placeholder='confirmar contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View >
                    <RoundedButton
                      text='CONFIRMAR'
                      onPress={() =>
                      ToastAndroid.show('Hola', ToastAndroid.SHORT)}
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
