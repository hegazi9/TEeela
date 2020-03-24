
import React  , { useState } from 'react';
import {StyleSheet , View  , Text , Button , FlatList , ToastAndroid , Alert } from 'react-native';
import { GiftedListView } from 'react-native-infinite-virtualized-list';

const ProductScreen = props =>   
{
   const [ isLoading , setisLoading ] = useState(true) 
    const [items , setItems] = useState([])
    
    const showProducts = async () => {
      const  response = await fetch('http://staging.teeela.com/rest/en/V1/mobile/products?category_id=363&page_size=20&current_page=1', {
          headers : {
            'country': 'KWD'
          }
      });
      ToastAndroid.showWithGravityAndOffset(
        'Wait a few seconds.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
        );
      const json = await response.json() ; 
      setItems(json);
      console.log(json);
      setisLoading(false);
      
    }
 
 
    return (    
        <View style = {styles.container}>
           <Button  style = {styles.button} title = 'Show Products' onPress = {showProducts}/> 
           <FlatList  data={items}  keyExtractor={(item, index) => index.toString()}
           renderItem={({item}) => 
           <View style = {styles.card}> 
        <Text style={styles.item} >Name : {item.name} </Text>
        <Text style={styles.item} >ID : {item.id} </Text>
        <Text style={styles.item} >Age : {item.age} </Text>
        <Text style={styles.item} >Is_in_stock : {item.is_in_stock} </Text>
        <Text style={styles.item} >Postion : {item.position} </Text>
        <Text style={styles.item} >Product_type : {item.product_type} </Text>
        <Text style={styles.item} >Quatity : {item.qty} </Text>
        <Text style={styles.item} >Sku : {item.sku} </Text>
        <Text style={styles.item} >Price : {item.price} </Text>
        <Text style={styles.item} >Brand_Id  : {item.brand.id} </Text>
        <Text style={styles.item} >Brand_Name  : {item.brand.name} </Text>
        <Text style={styles.item} >International : {item.international} </Text>
        
          </View>
        }/>
           
        </View>
              
    )
        }


const styles = StyleSheet.create({

    container: {  
      flex : 1 ,  borderRadius : 5 , marginTop : 10 , 
      shadowOffset : { width : 0 , height : 2} , shadowRadius : 20  , 
      justifyContent : 'center'  , alignItems : 'center' ,   

    },  
    item: {  
        padding: 5,  
        fontSize: 16, paddingVertical : 5 , color : 'black' , backgroundColor : 'rgba(0,0,0,0.05)',
         textAlign : 'center'
    },  
    card : 
    {
      borderRadius : 15 , backgroundColor : 'white' , margin : 5 ,  
      justifyContent : 'center' , alignItems : 'center' , padding : 10 
    }
});

export default ProductScreen ;
/**
 * 
 *         <Text style={styles.item} >Gender : {item.gender} </Text>
        <Text style={styles.item} >Parent_id : {item.parent_id} </Text>
        <Text style={styles.item} >Parent_sku : {item.parent_sku} </Text>
        <Text style={styles.item} >Special_price : {item.special_price} </Text>

 */