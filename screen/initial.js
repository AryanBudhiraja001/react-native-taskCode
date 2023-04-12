import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'



export default function InitialScreen({navigation}) {
 
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                
               <TouchableOpacity  style={{backgroundColor:'#808080',padding:10,marginBottom:10}} onPress={()=> navigation.navigate("firstscreen")}>
              <Text>First Task</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{backgroundColor:'#808080',padding:10,}} onPress={()=> navigation.navigate("secondscreen")}>
              <Text>Second Task</Text>
            </TouchableOpacity>
            </View>
        )
    }



