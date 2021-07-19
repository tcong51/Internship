import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {SafeAreaView, View, Text, Image, Button, Alert, DrawerLayoutAndroid,ScrollView} from 'react-native';
import RN from 'react-native-rasa';
const hostAccess = 'http://474532b659ee.ngrok.io'; //from ngrok or SSH
const hostNote = 'https://drive.google.com/file/d/1fw0a3Qz2pNi8j2P9_xQssk0t1fqkC6fN/view?usp=sharing';// Ip Localhost on the domain Chatbot && hostNote
const styleImg = {
  padding: 5 ,
  width:100,
  height:100,
};
const styleText = {
  color: 'blue',
  fontSize: 15,
  fontWeight: 'bold'
};
const styleSafeAreaView={
    flex: 1,
    backgroundColor: '#fff',
    color:'white',
    justifyContent: 'center',
  
  };
const styleView= {
    alignItems: 'center',
   
  };
  Alert.style={
    color:'red'
  };
//---------------------------------------------------
const changeVisibilityStatus = () =>(
  Alert.alert(
    "Accessibility is restricted",
    "Please, swipe right!")
  );
const styleButtonNavigationView = {
    alignItems: 'bottom'
  };
const textScrollView={
    padding: 20,
  };
const styleTextF={
    alignItems: 'center'
  };
const styleScrollView= {
    backgroundColor: '#CEE3F6'
  };
const styleTextG={
    color: 'blue'
  };
const styleTextH ={
    color: '#5F4C0B'
  };
const Please ={
    color: 'blue'
  };
const styleCopy={
    backgroundColor: '#CEE3F6',
    color: '#CEE3F6'
};


const navigationView = () => (
  <ScrollView style={styleScrollView}>
      <Text></Text>
      <Button title="Hạn chế"/>
      <Text style={textScrollView}>
      <Text style={styleTextG}>[ * ] Cơ sở dữ liệu bị hạn chế. {"\n"}</Text>
      <Text style={styleTextG}>[ * ] Bot hỗ trợ truy xuất các báo cáo:{"\n"}</Text>
      <Text style={styleTextG}>{'  '}!~ Báo cáo các tháng {"\n"}</Text>
        <Text style={styleTextH}>
        {'    '}- Tháng 1 {"\n"}
        {'    '}- Tháng 2 {"\n"}
        {'    '}- Tháng 3 {"\n"}
        {'    '}- Tháng 4 {"\n"}
        {'    '}- Tháng 5 {"\n"}
        {'    '}- Tháng 6 {"\n"}
        {'    '}- Tháng 7 {"\n"}
        {'    '}- Tháng 8 {"\n"}
        {'    '}- Tháng 9 {"\n"}
        {'    '}- Tháng 10 {"\n"}
        {'    '}- Tháng 11 {"\n"}
        {'    '}- Tháng 12 {"\n"}
        </Text>
      <Text style={styleTextG}>{'  '}!~ Báo cáo các quý {"\n"}</Text>
        <Text style={styleTextH}>
        {'    '}- Quý 1 {"\n"}
        {'    '}- Quý 2 {"\n"}
        {'    '}- Quý 3 {"\n"}
        {'    '}- Quý 4 {"\n"}
        </Text>
      <Text style={styleTextG}>{'  '}!~Báo cáo các năm{"\n"}</Text>
        <Text style={styleTextH}>{'    '}- 2019 {"\n"}
        {'    '}- 2020 {"\n"}
        {'    '}- 2021 {"\n"}
        </Text>
      <Text style={styleTextG}>[ * ] Gợi ý các câu truy vấn:{"\n"}</Text>
      <Text style={styleTextG}>{'  '}!~ Báo cáo tháng {"\n"}</Text>
        <Text style={styleTextH}>
        {'    '}- Cho xem báo cáo tháng 1 {"\n"}
        {'    '}{'    '}+  Năm 2020 {"\n"}
        {'    '}- Cho xem báo cáo tháng 1 năm 2019 {"\n"} 
        {'    '}... {"\n"} 
        </Text>
      <Text style={styleTextG}>{'  '}!~ Báo cáo quý {"\n"}</Text>
        <Text style={styleTextH}>
        {'    '}- Cho xem báo cáo quý 1 năm 2020 {"\n"}
        {'    '}- Cho xem báo cáo quý 2 năm 2021 {"\n"}
        {'    '}... {"\n"} 
        </Text>
      <Text style={styleTextG}>{'  '}!~ Báo cáo năm {"\n"}</Text>
        <Text style={styleTextH}>
        {'    '}- Cho xem báo cáo năm 2020 {"\n"}
        {'    '}- Cho xem báo cáo năm 2021 {"\n"}</Text>
        {'    '}... {"\n"} 
        </Text>
      <View style={styleTextF}>
        <Text style={Please}>---Xin lỗi vì sự bất tiện này---</Text>
      </View>
      <Button style={styleButtonNavigationView}
          title="Xem thêm"
          onPress={() =>  WebBrowser.openBrowserAsync(hostNote)}
        />
      <View style={styleTextF}>
      <Text onPress={() =>  WebBrowser.openBrowserAsync('https://github.com/tcong51/Internship')}>{'\n'}Copyright © 2021 by Do Thanh Cong {'\n'}</Text>
       </View> 
    </ScrollView>
);

export default function App() {
  changeVisibilityStatus() // chỉnh style
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  return ( 
    
  <> 
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
    
    <StatusBar barStyle="dark-content" />
     <View style={styleView} >
     
    <Image style={styleImg} source={require('./assets/chat.png')}  />
      <Text style={styleText} >Em là Bot hỗ trợ truy xuất báo cáo!
      </Text>
      <Text style={styleText} > Anh/chị có muốn xuất báo cáo?</Text>
      {/* <Button title="Note Content" onPress={() =>changeVisibilityStatus() }/> */}
    </View> 

    <SafeAreaView style={styleSafeAreaView}>
      <RN  
        host={hostAccess}
        onSendMessFailed={(error) => console.log(error)}
        emptyResponseMessage="Sorry, I don't understand"
        onEmptyResponse={() => console.log('Handle with your custom action')}
      />
      
    </SafeAreaView>
    </DrawerLayoutAndroid>
  </>

);
}