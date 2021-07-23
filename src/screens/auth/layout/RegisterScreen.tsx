import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../../store';
import { requestUserThunk } from '../slice/RegisterSlice'

const { width, height } = Dimensions.get('window');
const scale = width / 375;


const RegisterScreen = () => {
  const appDispatch = useAppDispatch()
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    code: '',
    password: '',
    confirm_password: '',
  })

  const [formError, setFormError] = useState({
    nameError: '',
    phoneError: '',
    emailError: '',
    passwordError: '',
    confirm_passwordError: ''
  })

  function validateEmail(email) {
    // console.log('validateEmail: ', email)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const valiDateForm = () => {
    let formFetch = {}
    if (state.name == '') {
      formFetch.nameError = 'Hãy nhập tên !'
    } else {
      formFetch.nameError = ""
    }

    if (state.phone === "") {
      formFetch.phoneError = 'Hãy nhập số điện thoại !'
    } else if (state.phone.length <= 9) {
      formFetch.phoneError = 'Số điện thoại sai !'
    } else if (state.phone.length >= 15) {
      formFetch.phoneError = 'Sô điện thoại sai !'
    } else {
      formFetch.phoneError = ""
    }

    if (state.email == "") {
      formFetch.emailError = 'Hãy nhập email!'
    } else if (validateEmail(state.email) === false) {
      formFetch.emailError = 'Email is wrong !'
    } else {
      formFetch.emailError = ""
    }

    if (state.password == "") {
      formFetch.passwordError = "Hãy nhập mật khẩu !"
    } else if (state.password.length < 6) {
      formFetch.passwordError = "Mật khẩu cần lớn hơn 6 kí tự"
    } else {
      formFetch.passwordError = ""
    }

    if (state.confirm_password == "") {
      formFetch.confirm_passwordError = "Xác nhận lại mật khẩu !"
    } else if (state.confirm_password !== state.password) {
      formFetch.confirm_passwordError = "Sai mật khẩu !"
    } else {
      formFetch.confirm_passwordError = ""
    }

    setFormError({ ...formError, ...formFetch })
    if (formFetch.nameError == "" && formFetch.phoneError == "" && formFetch.emailError == "" && formFetch.passwordError == "" && formFetch.confirm_passwordError == "") {
      return true
    } else {
      return false
    }
  }

  const onRegister = () => {
    if (valiDateForm() === true) {
      let body = {
        name: state.name,
        phone: state.phone,
        email: state.email,
        code: state.code,
        password: state.password,
        confirm_password: state.confirm_password,
      }
      appDispatch(requestUserThunk)(body)
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.content}>

          <View style={styles.viewHeader}>
            <TouchableOpacity>
              <Image
                style={styles.icon_back}
                source={require('../../../assets/icon_back_black.png')}
              />
            </TouchableOpacity>
            <Text style={styles.register}>Đăng ký</Text>
          </View>

          <View style={styles.viewAvatar}>
            <Image style={styles.avatar} source={require('../../../assets/image_avatar.png')} />
            <TouchableOpacity style={styles.btnCamera}>
              <Image style={styles.camera} source={require('../../../assets/icon_camera_avatar.png')} />
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.viewName}>
              <Text style={styles.txtField}>Họ tên:</Text>
              <Text style={styles.txtIconRed}>*</Text>
              {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
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
          </View>
          <View>
            <View style={styles.viewName2}>
              <Text style={styles.txtField}>Số điện thoại:</Text>
              <Text style={styles.txtIconRed}>*</Text>
              {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
            </View>

            <View style={styles.viewTextInput}>
              <Image style={styles.iconName} source={require('../../../assets/icon_name.png')} />
              <TextInput
                style={styles.txtInput}
                placeholder='Nhập số điện thoại'
                placeholderTextColor='#8C8C8C'
                value={state.phone}
                onChangeText={(phone) => setState({ ...state, phone })} />
            </View>
            <View style={styles.viewLine} />
          </View>
          <View>
            <View style={styles.viewName2}>
              <Text style={styles.txtField}>Email:</Text>
              <Text style={styles.txtIconRed}>*</Text>
              {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
            </View>

            <View style={styles.viewTextInput}>
              <Image style={styles.iconName} source={require('../../../assets/icon_name.png')} />
              <TextInput
                style={styles.txtInput}
                placeholder='Nhập email'
                placeholderTextColor='#8C8C8C'
                value={state.email}
                onChangeText={(email) => setState({ ...state, email })} />
            </View>
            <View style={styles.viewLine} />
          </View>
          <View>
            <View style={styles.viewName2}>
              <Text style={styles.txtField}>Mã giới thiệu:</Text>
              {/* <Text style={styles.txtIconRed}>*</Text> */}
              {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
            </View>

            <View style={styles.viewTextInput}>
              <Image style={styles.iconName} source={require('../../../assets/icon_name.png')} />
              <TextInput
                style={styles.txtInput}
                placeholder='Nhập mã giới thiệu'
                placeholderTextColor='#8C8C8C'
                value={state.code}
                onChangeText={(code) => setState({ ...state, code })} />
            </View>
            <View style={styles.viewLine} />
          </View>
          <View>
            <View style={styles.viewName2}>
              <Text style={styles.txtField}>Mật khẩu:</Text>
              <Text style={styles.txtIconRed}>*</Text>
              {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
            </View>

            <View style={styles.viewTextInput}>
              <Image style={styles.iconName} source={require('../../../assets/icon_name.png')} />
              <TextInput
                style={styles.txtInput}
                placeholder='Nhập mật khẩu'
                placeholderTextColor='#8C8C8C'
                value={state.password}
                onChangeText={(password) => setState({ ...state, password })} />
            </View>
            <View style={styles.viewLine} />
          </View>
          <View>
            <View style={styles.viewName2}>
              <Text style={styles.txtField}>Xác nhận mật khẩu:</Text>
              <Text style={styles.txtIconRed}>*</Text>
              {/* <Image style={styles.icon_require} source={require('../../../assets/icon_require_red.png')} /> */}
            </View>

            <View style={styles.viewTextInput}>
              <Image style={styles.iconName} source={require('../../../assets/icon_name.png')} />
              <TextInput
                style={styles.txtInput}
                placeholder='Xác nhận mật khẩu'
                placeholderTextColor='#8C8C8C'
                value={state.confirm_password}
                onChangeText={(confirm_password) => setState({ ...state, confirm_password })} />
            </View>
            <View style={styles.viewLine} />
          </View>

          <TouchableOpacity style={styles.btnRegister} onPress={() => onRegister()}>
            <Text style={styles.txtRegister}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewName: {
    marginTop: 25 * scale,
    flexDirection: 'row',
    // backgroundColor: 'yellow'
  },
  viewName2: {
    marginTop: 16 * scale,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20 * scale,
    // paddingTop: 25 * scale,
    // backgroundColor: 'rgba(100,100,100,0.3)'
  },
  icon_back: {
    width: 6 * scale,
    height: 12 * scale,
  },
  register: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 18 * scale,
    lineHeight: 26 * scale,
    marginLeft: 116 * scale,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAvatar: {
    alignSelf: 'center',
    marginTop: 25 * scale,
    width: 100 * scale,
    height: 100 * scale,
    borderRadius: 50 * scale,
    justifyContent: 'flex-end',
  },
  camera: {
    width: 26 * scale,
    height: 26 * scale,
  },
  avatar: {
    width: 100 * scale,
    height: 100 * scale,
    borderRadius: 50 * scale,
  },
  btnCamera: {
    width: 26 * scale,
    height: 26 * scale,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  txtField: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14 * scale,
    lineHeight: 22 * scale,
    color: '#262626',
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
    marginTop: 10 * scale,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconName: {
    width: 20 * scale,
    height: 20 * scale,
  },
  txtInput: {
    marginLeft: 15 * scale,
    // backgroundColor: 'red',
    width: 300 * scale,
  },
  viewLine: {
    borderWidth: 1 * scale,
    borderColor: '#BFBFBF',
    width: 335 * scale,
    marginTop: 7 * scale
  },
  btnRegister: {
    width: 295 * scale,
    height: 45 * scale,
    backgroundColor: '#F03E3E',
    borderRadius: 10 * scale,
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
});
