import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    ImageBackground,
    StatusBar
} from 'react-native';
import { SCREEN_NAME } from '../../../navigation/ScreenName';


const { width, height } = Dimensions.get('window');
const scale = width / 375;


const LoginScreen = (props) => {

    const [showPassword, setShowPassword] = useState(false)
    const [state, setState] = useState({
        phone: '',
        password: ''
    })
    const [formError, setFormError] = useState({
        phoneError: '',
        passwordError: '',
    })


    //________function________
    const onLogin = () => {

    }
    const onRegister = () => {
        props.navigation.navigate(SCREEN_NAME.RegisterScreen)
    }

    const onForgot = () => {
        props.navigation.navigate(SCREEN_NAME.ForgotPasswordScreen)
    }

    return (
        <ImageBackground style={styles.main} source={require('../../../assets/background.png')}>
            <Image style={styles.imageLogin} source={require('../../../assets/image_login.png')} />
            <Text style={styles.txtLogin}>Đăng nhập</Text>
            <View style={styles.content}>
                <View style={styles.viewName}>
                    <View style={{ flexDirection: 'row', flex: 1 / 3 }}>
                        <Text style={styles.txtField}>Họ tên:</Text>
                        <Text style={styles.txtIconRed}>*</Text>
                    </View>
                    {/* <View style={{ flex: 2 / 3 }}>
                        {formError.nameError === '' ? null : <Text style={styles.txtError}>{formError.nameError}</Text>}
                    </View> */}
                </View>

                <View style={styles.viewTextInput}>
                    <Image style={styles.iconName} source={require('../../../assets/icon_name.png')} />
                    <TextInput
                        style={styles.txtInput}
                        placeholder='Nhập họ Tên'
                        placeholderTextColor='#8C8C8C'
                        value={state.name}
                        onChangeText={(name) => setState({ ...state, name })} />
                </View>
                <View style={styles.viewLine} />
                <View>
                    <View style={styles.viewName2}>
                        <Text style={styles.txtField}>Mật khẩu:</Text>
                        <Text style={styles.txtIconRed}>*</Text>
                        {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
                    </View>

                    <View style={styles.viewTextInput}>
                        <Image style={styles.iconLock} source={require('../../../assets/icon_lock.png')} />
                        <TextInput
                            style={styles.txtInputPassWord}
                            placeholder='Nhập mật khẩu'
                            placeholderTextColor='#8C8C8C'
                            value={state.password}
                            secureTextEntry={!showPassword}
                            onChangeText={(password) => setState({ ...state, password })} />
                        <TouchableOpacity style={styles.btnShow} onPress={() => setShowPassword(!showPassword)}>
                            <Image style={styles.iconShow} source={require('../../../assets/icon_show_password.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewLine} />
                </View>
                <Text onPress={() => onForgot()} style={styles.txtForgotPass}>Quên mật khẩu ?</Text>
                <TouchableOpacity style={styles.btnRegister} onPress={() => onLogin()}>
                    <Text style={styles.txtRegister}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={styles.txtOr}>hoặc</Text>
                <TouchableOpacity style={styles.btnRegister2} onPress={() => onRegister()}>
                    <Text style={styles.txtRegister2}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >

    )
};

export default LoginScreen

const styles = StyleSheet.create({

    main: { flex: 1 },
    content: {
        flex: 1,
        paddingHorizontal: 40 * scale,
    },
    txtLogin: {
        fontWeight: '600',
        fontSize: 20 * scale,
        lineHeight: 24 * scale,
        color: '#262626',
        textAlign: 'center',
        marginTop: 5 * scale
    },
    viewName: {
        marginTop: 25 * scale,
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    txtField: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13 * scale,
        lineHeight: 18 * scale,
        color: '#262626',
    },
    txtOr: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15 * scale,
        lineHeight: 20 * scale,
        color: '#262626',
        alignSelf: 'center',
        marginTop: 16 * scale
    },
    txtError: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 * scale,
        lineHeight: 22 * scale,
        color: 'red',
        marginLeft: 35 * scale
    },
    txtIconRed: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 * scale,
        lineHeight: 22 * scale,
        color: '#F03E3E',
        marginLeft: 4 * scale,
    },
    viewTextInput: {
        // marginTop: 4 * scale,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    iconName: {
        width: 16 * scale,
        height: 18 * scale,
    },
    txtInput: {
        marginLeft: 15 * scale,
        // backgroundColor: 'red',
        width: 250 * scale,
    },
    txtInputPassWord: {
        marginLeft: 15 * scale,
        width: 246 * scale,
    },
    viewLine: {
        borderWidth: 1 * scale,
        borderColor: '#1290CC',
        width: 295 * scale,
        // marginTop: 7 * scale
    },
    btnRegister: {
        width: 290 * scale,
        height: 50 * scale,
        backgroundColor: '#F03E3E',
        borderRadius: 50 * scale,
        marginTop: 40 * scale,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // marginBottom: 30 * scale,
    },
    btnRegister2: {
        width: 290 * scale,
        height: 50 * scale,
        borderRadius: 50 * scale,
        marginTop: 16 * scale,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1 * scale,
        borderColor: '#F03E3E',
    },
    txtRegister: {
        fontSize: 16 * scale,
        fontWeight: '600',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#FAFAFA',
        lineHeight: 21 * scale,

    },
    txtRegister2: {
        fontSize: 16 * scale,
        lineHeight: 21 * scale,
        fontWeight: '600',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#F03E3E',
    },
    viewName2: {
        marginTop: 16 * scale,
        flexDirection: 'row',
    },
    btnShow: {
        width: 24 * scale,
        height: 24 * scale,
    },
    iconLock: {
        width: 16 * scale,
        height: 20 * scale,
    },
    txtForgotPass: {
        fontSize: 15 * scale,
        fontWeight: '400',
        lineHeight: 20 * scale,
        alignSelf: 'flex-end',
        color: '#F03E3E',
        marginTop: 16 * scale,
    },
    imageLogin: {
        alignSelf: 'center'
    },
})
