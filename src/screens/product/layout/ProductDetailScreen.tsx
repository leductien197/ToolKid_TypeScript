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
import Swiper from 'react-native-swiper'
import Image_slider from '../../../assets/image_product_slider.png'

const { width, height } = Dimensions.get('window');
const scale = width / 375;


const ProductDetailScreen = () => {

    //_________state____________const____________
    const [isLike, setIsLike] = useState(false)
    const [isClickCart, setIsClickCart] = useState(false)
    const [isClickChat, setIsClickChat] = useState(false)
    const [isClickBuyNow, setIsClickBuyNow] = useState(true)

    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvSOQfmwpxJtTJ6wQtP62utsHnVh0fvoLYw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvSOQfmwpxJtTJ6wQtP62utsHnVh0fvoLYw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvSOQfmwpxJtTJ6wQtP62utsHnVh0fvoLYw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvSOQfmwpxJtTJ6wQtP62utsHnVh0fvoLYw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvSOQfmwpxJtTJ6wQtP62utsHnVh0fvoLYw&usqp=CAU',
    ]

    const imgProduct = [
        require('../../../assets/image_product.png'),
        require('../../../assets/image_product.png'),
        require('../../../assets/image_product.png'),
        require('../../../assets/image_product.png'),
    ]

    //___________function_______________function_____________
    const clickLike = () => {
        setIsLike(!isLike)
    }

    const clickCart = () => {
        setIsClickCart(true)
        setIsClickChat(false)
        setIsClickBuyNow(false)
    }
    const clickChat = () => {
        setIsClickCart(false)
        setIsClickChat(true)
        setIsClickBuyNow(false)
    }
    const clickBuyNow = () => {
        setIsClickCart(false)
        setIsClickChat(false)
        setIsClickBuyNow(true)
    }

    return (
        <View style={styles.main}>
            <ScrollView style={{ paddingBottom: 15 * scale }}>
                <View style={{ backgroundColor: '#F1F3F5', width: '100%', marginTop: 15 * scale }}>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 345 * scale, }}>
                        <View style={{ width: 36 * scale, height: 36 * scale, backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 18 * scale, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 24 * scale, height: 24 * scale }} source={require('../../../assets/icon_arrow_left.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 7 * scale, width: 84 * scale, height: 36 * scale, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: 36 * scale, height: 36 * scale, backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 18 * scale, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24 * scale, height: 24 * scale }} source={require('../../../assets/icon_buy.png')} />
                            </View>
                            <View style={{ width: 36 * scale, height: 36 * scale, backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 18 * scale, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24 * scale, height: 24 * scale }} source={require('../../../assets/icon_heart.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: 330 * scale }}>
                    <Swiper
                        style={styles.wrapper}
                        horizontal={true}
                        showsButtons={false}
                    >
                        {
                            images.map((item, index) => {
                                console.log('item', item);

                                <Image source={{ uri: item }} style={{ flex: 1 }} />
                            })
                        }
                    </Swiper>
                </View>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={styles.viewNameProduct}>
                        <Text style={styles.txtNameProduct}>Ultra boost 2021 from adidas</Text>
                        <Image style={{ width: 24 * scale, height: 24 * scale }} source={require('../../../assets/icon_sharing.png')} />
                    </View>
                    <Text style={styles.txtPrice}>2.000.000đ - 2.500.000đ</Text>
                </View>

                {/* <View style={styles.viewLine} /> */}
                <View style={styles.viewStar}>
                    <View style={styles.viewStarContent}>
                        <View style={styles.viewStarContent2}>
                            <Image style={styles.icon_star} source={require('../../../assets/icon_star.png')} />
                            <Text style={styles.txtValue}>4.5</Text>
                            <Text style={styles.txtValue}>(124 đánh giá)</Text>
                            <Text style={styles.txtValue}>|</Text>
                            <Text style={styles.txtValue}>125 đã bán</Text>
                        </View>
                        <Image style={styles.icon_right} source={require('../../../assets/icon_right_product.png')} />
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', marginTop: 1 * scale }}>
                    <View style={styles.viewChoise}>
                        <Text style={styles.txtChoise}>Chọn loại hàng</Text>
                        <Text style={styles.txtChoise2}>(4 màu sắc, 5 kích thước)</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', marginTop: 1 * scale }}>
                    <View style={styles.viewImgProduct}>
                        {/* {
                        imgProduct.map((item, index) => {
                            <Image style={{ width: 58 * scale, height: 58 * scale }} source={item} />
                        })
                    } */}
                        <Image style={{ width: 58 * scale, height: 58 * scale }} source={require('../../../assets/image_product.png')} />
                        <Image style={{ width: 58 * scale, height: 58 * scale }} source={require('../../../assets/image_product.png')} />
                        <Image style={{ width: 58 * scale, height: 58 * scale }} source={require('../../../assets/image_product.png')} />
                        <Image style={{ width: 58 * scale, height: 58 * scale }} source={require('../../../assets/image_product.png')} />
                        <Image style={{ width: 58 * scale, height: 58 * scale }} source={require('../../../assets/image_product.png')} />

                    </View>
                </View>
                <View style={{ backgroundColor: 'white', marginTop: 1 * scale }}>
                    <Text style={[styles.txtTittleDetail, { fontWeight: '500' }]}>Chi tiết sản phẩm</Text>
                    <Text style={[styles.txtTittleDetail, { fontWeight: '400' }]}>Sản phẩm giày thể thao dành cho các bạn nam nữ ưa sự cá tính, mạnh mẽ mà vẫn sành điệu.
                        - Mẫu giày với thiết kế thể thao cực khỏe khoắn,năng động thích hợp chạy bộ,gym...
                        - Với 2 màu sắc cho các bạn lựa chọn cực kì dễ phối đồ, là một item không thể thiếu đối với quần jean.
                    </Text>
                </View>

                <View style={styles.viewDetail}>
                    <Text style={[styles.txtTittleDetail, { fontWeight: '500' }]}>Chi tiết sản phẩm</Text>
                </View>

                {/* cpn product 2 image */}
                <View style={styles.viewProduct}>
                    <View style={styles.viewProductMain}>
                        <View style={styles.viewImage}>
                            <Image style={styles.imgProductDetail} source={require('../../../assets/image_product_detail.png')} />
                            <Image style={styles.imgProductDetail} source={require('../../../assets/image_product_detail.png')} />
                        </View>
                        <View style={styles.viewProductDes}>
                            <Text style={styles.txtTitleDes}>Túi Gucci hàng order chính hãng</Text>
                            <TouchableOpacity onPress={clickLike}>
                                <Image style={{ width: 24 * scale, height: 24 * scale }} source={isLike ? require('../../../assets/icon_heart_red.png') : require('../../../assets/icon_heart_gradient.png')} />

                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewProductDes}>
                            <Text style={styles.txtPriceDes}>250.000đ - 512.000đ</Text>
                            <Text style={styles.txtTotalShell}>Đã bán:142</Text>
                        </View>
                    </View>
                </View>

                {/* cpn product 3 image */}
                <View style={styles.viewProduct3img}>
                    <View style={styles.viewProduct3img_main}>
                        <View style={styles.viewImage3}>
                            <View style={{ flex: 2 / 3 }}>
                                <Image style={{ flex: 1, borderRadius: 5 * scale }} source={require('../../../assets/image_produc3.png')} />
                            </View>
                            <View style={{
                                flex: 1 / 3, justifyContent: 'space-between', alignItems: 'flex-end'
                            }}>
                                < Image resizeMode='cover' style={{ width: 117 * scale, height: 113 * scale, borderRadius: 5 * scale }} source={require('../../../assets/img_product3_1.png')} />
                                <Image resizeMode='cover' style={{ width: 117 * scale, height: 113 * scale, borderRadius: 5 * scale }} source={require('../../../assets/img_product3_1.png')} />
                            </View>
                        </View>
                        <View style={styles.viewProductDes}>
                            <Text style={styles.txtTitleDes}>Quần Louis vuitton</Text>
                            <Image style={{ width: 24 * scale, height: 24 * scale }} source={isLike ? require('../../../assets/icon_heart_red.png') : require('../../../assets/icon_heart_gradient.png')} />
                        </View>
                        <View style={styles.viewProductDes}>
                            <Text style={styles.txtPriceDes}>4.050.000đ</Text>
                            <Text style={styles.txtTotalShell}>Đã bán:142</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ width: "100%", height: 50 * scale, backgroundColor: 'white', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.btnChat_Cart} onPress={clickCart}>
                    <Image style={styles.iconChat_Cart} source={require('../../../assets/icon_cart_bottom.png')} />
                </TouchableOpacity>
                <Image source={require('../../../assets/line_bottom.png')} style={{ alignSelf: 'center', width: 1 * scale, height: 28 * scale }} />
                <TouchableOpacity style={styles.btnChat_Cart} onPress={clickChat}>
                    <Image style={styles.iconChat_Cart} source={require('../../../assets/icon_chat_bottom.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBuyNow} onPress={clickBuyNow}>
                    <Text style={styles.txtBuyNow}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#F1F3F5',
    },
    wrapper: {
        backgroundColor: '#F1F3F5',
        height: 375 * scale,
    },
    viewNameProduct: {
        flexDirection: 'row',
        width: 345 * scale,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14 * scale,
        backgroundColor: 'white',
    },
    txtNameProduct: {
        fontWeight: '500',
        fontSize: 16 * scale,
        color: '#262626',
        fontStyle: 'normal',
        lineHeight: 24 * scale,
    },
    txtPrice: {
        fontWeight: '500',
        fontSize: 16 * scale,
        color: '#F03E3E',
        fontStyle: 'normal',
        lineHeight: 24 * scale,
        marginTop: 12 * scale,
        marginLeft: 15 * scale
    },
    viewLine: {
        borderWidth: 1 * scale,
        borderColor: '#F1F3F5',
        width: '100%',
        marginTop: 12 * scale,
    },
    viewStar: {
        width: '100%',
        height: 40 * scale,
        marginTop: 1 * scale,
        borderColor: '#F1F3F5',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    viewStarContent: {
        width: 345 * scale,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    viewStarContent2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon_right: { width: 20 * scale, height: 20 * scale },
    icon_star: { width: 18 * scale, height: 18 * scale, marginRight: 4 * scale },
    txtValue: {
        fontSize: 14 * scale,
        lineHeight: 22 * scale,
        color: '#595959',
        fontWeight: '400',
        fontStyle: 'normal',
        padding: 4 * scale
    },
    viewChoise: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 335 * scale,
        alignSelf: 'center',
        marginTop: 12 * scale
    },
    txtChoise: {
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        color: '#595959',
        fontWeight: '500',
        fontStyle: 'normal',
    },
    txtChoise2: {
        fontSize: 14 * scale,
        lineHeight: 22 * scale,
        color: '#69747E',
        fontWeight: '400',
        fontStyle: 'normal',
        marginLeft: 10 * scale,
    },
    viewImgProduct: {
        marginTop: 16 * scale,
        flexDirection: 'row',
        width: 335 * scale,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 16 * scale,
    },
    txtTittleDetail: {
        marginLeft: 20 * scale,
        marginTop: 12 * scale,
        fontStyle: 'normal',
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        color: '#595959',
    },
    viewDetail: {
        height: 50 * scale,
        // backgroundColor: '#F1F3F5',
        width: '100%',
        marginTop: 16 * scale,
        justifyContent: 'flex-start',
    },
    viewProduct: {
        width: '100%',
        height: 267 * scale,
        marginTop: 12 * scale,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewProductMain: {
        width: 345 * scale,
        height: 245 * scale,
        alignSelf: 'center',
    },
    viewImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    imgProductDetail: {
        width: 171 * scale,
        height: 171 * scale,
        borderRadius: 5 * scale,
    },
    viewProductDes: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10 * scale,
        flexDirection: 'row',
    },
    txtTitleDes: {
        fontStyle: 'normal',
        fontSize: 18 * scale,
        lineHeight: 24 * scale,
        color: '#373E50',
        fontWeight: '400',
    },
    txtPriceDes: {
        fontStyle: 'normal',
        fontSize: 18 * scale,
        lineHeight: 24 * scale,
        color: '#E84343',
        fontWeight: '400',
    },
    txtTotalShell: {
        fontStyle: 'normal',
        fontSize: 16 * scale,
        lineHeight: 22 * scale,
        color: '#69747E',
        fontWeight: '400',
    },
    viewProduct3img: {
        width: 375 * scale,
        height: 325 * scale,
        backgroundColor: 'white',
        marginTop: 10 * scale,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewProduct3img_main: {
        width: 345 * scale,
        height: 305 * scale,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    viewImage3: {
        width: '100%',
        height: 229 * scale,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtBuyNow: {
        fontStyle: 'normal',
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    btnChat_Cart: {
        width: 94 * scale,
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBuyNow: {
        width: 187 * scale,
        height: '100%',
        backgroundColor: '#F03E3E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconChat_Cart: { width: 28 * scale, height: 28 * scale }
})
