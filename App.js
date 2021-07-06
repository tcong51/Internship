import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {SafeAreaView, View, Text, Image, Button, Alert, DrawerLayoutAndroid,ScrollView} from 'react-native';
import RN from 'react-native-rasa';
const hostAccess = 'http://53a9c736e2c2.ngrok.io'; //from ngrok or SSH
const hostNote = 'http://75f3212808d5.ngrok.io/Application/Chatbot/contentNote.html';// Ip Localhost on the domain Chatbot && hostNote
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
      <Text style={styleTextG}>[ * ] Nội dung chatbot truy cập với các câu hỏi được thiết lập sẵn{"\n"}</Text>
      <Text style={styleTextH}>
        {'    '}- Báo cáo tháng {'1 - 8'} : Là báo cáo năm 2020.{"\n"}
        {'    '}- Cơ sở dữ liệu bị hạn chế.{"\n"}
      </Text> 
      <Text style={styleTextG}>[ * ] Các câu hỏi có thể truy xuất với bot:{"\n"}</Text>
      <Text style={styleTextG}>{'  '}!~ Báo cáo tháng trong năm 2020{"\n"}</Text>
      <Text style={styleTextH}>{'    '}- Cho xem báo cáo tháng 1{"\n"}
      {'    '}- Báo cáo tháng 1{"\n"}
      {'    '}- Cho xem báo cáo tháng 2{"\n"}
      {'    '}- Báo cáo tháng 2{"\n"}
      {'    '}- Cho xem báo cáo tháng 3{"\n"}
      {'    '}- Báo cáo tháng 3{"\n"}
      {'    '}- Cho xem báo cáo tháng 4{"\n"}
      {'    '}- Báo cáo tháng 4{"\n"}
      {'    '}- Cho xem báo cáo tháng 5{"\n"}
      {'    '}- Báo cáo tháng 5{"\n"}
      {'    '}- Cho xem báo cáo tháng 6{"\n"}
      {'    '}- Báo cáo tháng 6{"\n"}
      {'    '}- Cho xem báo cáo tháng 7{"\n"}
      {'    '}- Báo cáo tháng 7 {"\n"}
      {'    '}- Cho xem báo cáo tháng 8{"\n"}
      {'    '}- Báo cáo tháng 8{"\n"}</Text>

      <Text style={styleTextG}>{'  '}!~ Báo cáo quý năm 2019 {'&'} 2020{"\n"}</Text>
      <Text style={styleTextH}>{'    '}- Báo cáo quý 1 năm 2019{"\n"}
      {'    '}- Báo cáo quý 2 năm 2019{"\n"}
      {'    '}- Báo cáo quý 3 năm 2019{"\n"}
      {'    '}- Báo cáo quý 4 năm 2019{"\n"}
      {'    '}- Báo cáo quý 1 năm 2020{"\n"}
      {'    '}- Báo cáo quý 2 năm 2020{"\n"}
      {'    '}- Báo cáo quý 3 năm 2020{"\n"}
      {'    '}- Báo cáo quý 4 năm 2020{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 1 năm 2020{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 2 năm 2020{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 3 năm 2020{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 4 năm 2020{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 1 năm 2019{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 2 năm 2019{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 3 năm 2019{"\n"}
      {'    '}- Đưa tôi xem báo cáo quý 4 năm 2019{"\n"}
      </Text>
      <Text style={styleTextG}>
        {'  '}!~Báo cáo các năm{"\n"}
      </Text>
      <Text style={styleTextH}>
      {'    '}- Báo cáo năm 2015{"\n"}
      {'    '}- Cho tôi xem báo cáo năm 2016{"\n"}
      {'    '}- Báo cáo năm 2016{"\n"}
      {'    '}- Cho tôi xem báo cáo năm 2017{"\n"}
      {'    '}- Báo cáo năm 2017{"\n"}
      {'    '}- Cho tôi xem báo cáo năm 2018{"\n"}
      {'    '}- Báo cáo năm 2018{"\n"}
      {'    '}- Cho tôi xem báo cáo năm 2019{"\n"}
      {'    '}- Báo cáo năm 2019{"\n"}
      {'    '}- Cho tôi xem báo cáo năm 2020{"\n"}
      {'    '}- Báo cáo năm 2020{"\n"}
      </Text>
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
      <Text style={styleText} >Mình là Bot hỗ trợ truy xuất báo cáo!
      </Text>
      <Text style={styleText} > Bạn có muốn xuất báo cáo?</Text>
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