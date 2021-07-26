import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREEN_NAME } from '../../../navigation/ScreenName';
import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window');
const scale = width / 375;
const ForgotPasswordScreen = (props) => {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [showModal, setShowModal] = useState(false)
    function validateType(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validateEmail = () => {
        let emailError = ''
        if (email === "") {
            emailError = "Hãy nhập email !"
        } else if (validateType(email) === false) {
            emailError = "Email sai !"
        } else {
            emailError = ""
        }
        setEmailError(emailError)
        if (emailError === "") {
            return true
        } else {
            return false
        }
    }

    const onSent = () => {
        if (validateEmail()) {
            setShowModal(true)
        }
    }

    const onGoToLogin = () => {
        function loadFirst() {
            // await setShowModal(false)
            props.navigation.navigate(SCREEN_NAME.LoginScreen)
        }
        loadFirst()
    }

    const clickModal = () => {
        setShowModal(!showModal)
    }
    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <View style={styles.viewHeader}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image
                            style={styles.icon_back}
                            source={require('../../../assets/icon_back_black.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.register}>Quên mật khẩu</Text>
                    <View></View>
                </View>
                <Text style={styles.txtDescription}>Vui lòng nhập email bạn đã đăng ký</Text>

                <View>
                    <View style={styles.viewName2}>
                        <Text style={styles.txtField}>Email:</Text>
                        <Text style={styles.txtIconRed}>*</Text>
                        {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
                    </View>

                    <View style={styles.viewTextInput}>
                        <Image style={styles.iconName} source={require('../../../assets/icon_message.png')} />
                        <TextInput
                            style={styles.txtInput}
                            placeholder='Nhập email'
                            placeholderTextColor='#8C8C8C'
                            value={email}
                            onChangeText={(email) => setEmail(email)} />
                    </View>
                    <View style={styles.viewLine} />
                </View>

                <View style={styles.viewLine} />
                {emailError == "" ? null : <Text style={styles.txtError}>{emailError}</Text>}

                <TouchableOpacity style={styles.btnRegister}
                    onPress={onSent}
                >
                    <Text style={styles.txtRegister}>Gửi</Text>
                </TouchableOpacity>
            </View>

            <Modal isVisible={showModal} onBackdropPress={clickModal} style={{ alignSelf: 'center' }}>
                <View style={styles.modal}>
                    <Image style={styles.imgModalSent} source={require('../../../assets/icon_email.png')} />
                    <Text style={styles.txtModalNoti}>Thông báo</Text>
                    <Text style={styles.txtModalDescription}>Mật khẩu mới đã được gửi vào email của bạn, vui lòng kiểm tra email và đăng nhập bằng mật khẩu mới</Text>
                    <TouchableOpacity style={styles.btnModal} onPress={() => props.navigation.navigate(SCREEN_NAME.LoginScreen)}>
                        <Text style={styles.txtBtnModal}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20 * scale,
    },
    icon_back: {
        width: 6 * scale,
        height: 12 * scale,
        // marginTop: 25 * scale,
    },
    register: {
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 18 * scale,
        lineHeight: 26 * scale,
        // position: 'absolute',
        // alignSelf: 'center',
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10 * scale,
    },
    txtDescription: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16 * scale,
        lineHeight: 22 * scale,
        textAlign: 'center',
        marginTop: 50 * scale,
    },
    viewName2: {
        marginTop: 50 * scale,
        flexDirection: 'row',
    },
    txtField: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 * scale,
        lineHeight: 22 * scale,
        color: '#262626',
    },
    txtError: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 * scale,
        lineHeight: 22 * scale,
        color: 'red',
        marginTop: 15 * scale
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
        width: 20 * scale,
        height: 20 * scale,
    },
    viewLine: {
        borderWidth: 1 * scale,
        borderColor: '#BFBFBF',
        width: 335 * scale,
        // marginTop: 7 * scale
    },
    btnRegister: {
        width: 310 * scale,
        height: 45 * scale,
        backgroundColor: '#E84343',
        borderRadius: 50 * scale,
        marginTop: 40 * scale,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 30 * scale
    },
    txtRegister: {
        fontSize: 16 * scale,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#FAFAFA'
    },
    modal: {
        width: 335 * scale,
        height: 312 * scale,
        borderRadius: 16 * scale,
        backgroundColor: 'white',
        position: 'absolute',
        shadowOpacity: 0.5,
        shadowColor: '#000000',
        alignSelf: 'center',
    },
    imgModalSent: {
        width: 83 * scale,
        height: 56 * scale,
        marginTop: 33 * scale,
        alignSelf: 'center',
    },
    txtModalNoti: {
        fontSize: 20 * scale,
        lineHeight: 28 * scale,
        fontWeight: '600',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#373E50',
        marginTop: 22 * scale,
    },
    txtModalDescription: {
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#373E50',
        marginTop: 8 * scale,
    },
    btnModal: {
        width: 159 * scale,
        height: 40 * scale,
        backgroundColor: '#E84343',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16 * scale,
        borderRadius: 50 * scale
    },
    txtBtnModal: {
        fontSize: 16 * scale,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#FAFAFA',
    },
    txtInput: {
        marginLeft: 15 * scale,
        // backgroundColor: 'red',
        width: 300 * scale,
    },
})
