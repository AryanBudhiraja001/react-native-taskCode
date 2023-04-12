
import { colors ,fontFamily, fontSize, metrics} from './theme/theme';


import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,StyleSheet
} from 'react-native';
import React, {useState} from 'react';

import {
  Table,
  Row,
  Rows,
  Cell,
  TableWrapper,
} from 'react-native-table-component';




export default function SecondScren({navigation}) {
  //state
  const [inputState, setInputState] = useState({
    webSiteUrl: '',
  });

  const [tabelState, setTabelState] = useState({
    tableHead: ['Website', 'Status'],
    tableData: [],
  });

  const {webSiteUrl} = inputState;
  const {tableHead, tableData} = tabelState;

  const manualUpdateHandler = () => {
    if (webSiteUrl.length === 0) {
      ToastMsg('Please enter website url');
    } else {


      let tempArr: any = [...tableData];

       var expression =  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 
        var regex = new RegExp(expression); 
     //const newArr=[];
        if(webSiteUrl.match(regex)){
           const newArr = [webSiteUrl, 'SUCCESS'];
               tempArr.push(newArr);

        }else{
          const  newArr = [webSiteUrl, 'FAILURE'];
             tempArr.push(newArr);
        }
        //return url.match(regex) ? true : false;
     
     
      setTabelState(prevState => ({
        ...prevState,
        tableData: tempArr,
      }));
      setInputState({
        webSiteUrl: '',
      });
    }
  };

  return (
   
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                margin: 20,
              }}>
              <View style={styles.inputContainer}>
                <TextInput
                  value={webSiteUrl}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      webSiteUrl: val,
                    }))
                  }
                  placeholder={'Enter website here to be monitored'}
                  style={styles.inputText}
                />
              </View>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={manualUpdateHandler}>
                <Text style={styles.buttonText}>Add Website</Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{flex: 1}}>
              {tableData.length > 0 && (
                
                  <View style={{marginHorizontal: 20}}>
                    <Table
                      borderStyle={{
                        borderWidth: 1,
                        borderColor: colors.BLACK_WITH_OPACIT,
                      }}>
                      <Row
                        data={tableHead}
                        style={styles.head}
                        textStyle={styles.text}
                      />
                      {tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.row}>
                          {Array.isArray(rowData) &&
                            rowData.map((cellData: any, cellIndex: any) => (
                              <Cell
                                key={cellIndex}
                                data={cellData}
                                textStyle={styles.tableRowText}
                              />
                            ))}
                        </TableWrapper>
                      ))}
                    </Table>
                  </View>
                
              )}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  inputContainer: {
  
    borderRadius: 5,
    padding: 0,
  },
  inputText: {
    paddingHorizontal: 15,
    
    fontSize: fontSize.font14,
    color: colors.DARK_BALCK,
    width: metrics.screenWidth - 0,
  },
  buttonContainer: {
    color: colors.PURPLE,
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
   
    color: colors.PURPLE,
    fontSize: fontSize.font14,
  },

  head: {
    height: 60,
    backgroundColor: colors.WHITE,
    textAlign: 'center',
  },
  text: {
    margin: 6,
 
    fontSize: fontSize.font10,
    color: colors.DARK_BALCK,
  },
  tableRowText: {
   
    fontSize: fontSize.font10,
    color: colors.DARK_BALCK,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },
  statusButton: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 5,
  },
  statusButtonText: {
  
    fontSize: fontSize.font12,
    color: colors.PURPLE,
  },
});