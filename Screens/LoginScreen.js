
import React , { useState , useReducer, useEffect} from 'react';
import {StyleSheet , View  , Text , Button, TextInput, Alert, ToastAndroid, Keyboard} from 'react-native';
import ProductScreen from './ProductScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {   useSelector , useDispatch} from "react-redux";

function LoginScreen (props)  
{

  const Stack = createStackNavigator();
  const [isemail , setEmail] = useState('');
  const [ispass , setpassword] = useState('');
  
  const dispatch = useDispatch();
  
 // const counter = useSelector(state => state.counter);   
  const user = useSelector(state => state.user); 

  const Log_In = async () => {
try {
  
let collection = 
    { 
        email : isemail ,
        password : ispass
     }
    
    if (collection.email === '' || collection.password === '') {
      ToastAndroid.showWithGravityAndOffset(
        'User Data is missed.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
        );
      
    }
    else 
    {
    
    await fetch('http://staging.teeela.com/rest/en/V1/mobile/login', {
      method: 'post',
      headers: {
                'Accept': 'application/json',
               'Content-Type': 'application/json'
      },
      body: JSON.stringify(collection)  ,
     
   })
   
.then((response) => 
{
  response.json()
  console.log(response);
  if (response.status === 200)
  {
    props.navigation.navigate('ProductScreen');
    ToastAndroid.showWithGravityAndOffset(
      'LogIn Successfully.',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
      );
    }
  else if (response.status === 401)
  { 
    ToastAndroid.showWithGravityAndOffset('LogIn Failed.',ToastAndroid.SHORT,ToastAndroid.BOTTOM,
      25,
      50,
      );
  }

  
}
).catch(( error) => console.error(error));
    Keyboard.dismiss();
  }

} catch (error) {
Alert.alert('Error');  
}    
  
}


  return (

      <View  style = {styles.MainContainer}>
        <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductScreen} />
        </Stack.Navigator>

        <View style = {styles.card}>

        <TextInput style = {styles.input} placeholder = 'Em@il' placeholderTextColor = 'grey'
         placeholderalignSelf = 'center'
         onChangeText = {(value => {
           setEmail(value)
         //  Alert.alert(value)
         })}  
         />
        
        <TextInput style = {styles.input} placeholder = 'PassWord' placeholderTextColor = 'grey' placeholderalignSelf = 'center'
          secureTextEntry = {true} 
          onChangeText = {(value => {
            setpassword(value)
        //    Alert.alert(value)
          })}  
          />
          </View>
        
          <Button title="Login"  onPress={Log_In} />
         
         
          <View style = {styles.card}>
            
        <Text style = {{fontSize : 22 , color : 'red'}}>Redux Test</Text>
          <Text style = {{ margin : 10 }}> Email : {JSON.stringify(user) +isemail}</Text>
          <Text style = {{ margin : 10 }}> Pass : {user+ispass}</Text>
          
          </View>
          <Button title=" Show Redux "  onPress={() =>{
                  dispatch({ type : "INCREMENT" })
                   
        }} ></Button>
          <Button title="  Hide Redux  " onPress={() =>{
                  dispatch({ type : "DECREMENT"})
                 
        }} ></Button>
        </View>
        
      );
    
};
  

const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      alignItems: 'center' , borderRadius : 5 , marginTop : 10 , 
      
    },
   
    input: {  
      height: 40,  width : 300 , borderColor: 'gray', padding : 10 , fontSize : 16 , 
      borderWidth: 1 , margin : 5 , borderRadius : 5 , borderColor : 'grey'
    },

    card : 
    {
      borderRadius : 15 , backgroundColor : 'white' , margin : 25 ,  
      justifyContent : 'center' , alignItems : 'center' , padding : 10 
    }
    
    });
    
export default LoginScreen ;

/*
    
    adb shell input keyevent 82
/*  adb -s <58KRX19109005789> reverse tcp:8081 tcp:8081
Resolve Error --->  $ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
$ cd (path to project/android folder) && gradlew clean && cd .. && react-native run-android
$
     

<Button title="Login"  onPress={() => {
  props.navigation.navigate('ProductScreen');;
}} />

*/
   
