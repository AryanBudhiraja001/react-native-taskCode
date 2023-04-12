



import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,StyleSheet
} from 'react-native';
import {fontSize, metrics } from './theme/theme';
import { colors } from './theme/theme';
import React, { useState } from 'react';

import {
  Table,
  Row,
  Rows,
  Cell,
  TableWrapper,
} from 'react-native-table-component';





export default function FirtScreen({navigation}) {

  
  //state
  const [inputState, setInputState] = useState({
    tabelName: '',
    uniqueName: '',
    columnName: '',
  });

  const [tabelState, setTabelState] = useState({
    tableHead: ['Table Name', 'Unique Name', 'Column Name','User Input'],
    tableData: [],
  });

  const { tabelName, uniqueName, columnName } = inputState;
  const { tableHead, tableData } = tabelState;

  const manualUpdateHandler = () => {
    if (tabelName.length === 0) {
      ToastMsg('Please enter table name');
    } else if (uniqueName.length === 0) {
      ToastMsg('Please enter unique name');
    } else if (columnName.length === 0) {
      ToastMsg('Please enter column name');
    } else {
      let tempArr: any = [...tableData];
      const newArr = [tabelName, uniqueName, columnName,''];
      tempArr.push(newArr);
      setTabelState(prevState => ({
        ...prevState,
        tableData: tempArr,
      }));
      setInputState({
        tabelName: '',
        uniqueName: '',
        columnName: '',
      });
    }
  };

   const element = (data: any, cellIndex: number, index: number) => {
    return (
      <View style={styles.inputView}>
        <TextInput
          value={data}
          placeholder={'_'}
          onChangeText={val => {
            let tempdata: any = [...tableData];
            tempdata[index][cellIndex] = val;
            setTabelState(prevState => ({
              ...prevState,
              tableData: tempdata,
            }));
          }}
          style={styles.textInputStyles}
        />
      </View>
    );
  };

 const onUpdatePress = () => {
    setTabelState(prevState => ({
      ...prevState,
      tableData: tableData,
    }));
  };

  return (
    
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                margin: 20,
              }}>
              <View style={styles.inputContainer}>
                <TextInput
                  value={tabelName}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      tabelName: val,
                    }))
                  }
                  placeholder={'Table Name'}
                  style={styles.input}
                />
              </View>
              <View style={[styles.inputContainer, { marginVertical: 15 }]}>
                <TextInput
                  value={uniqueName}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      uniqueName: val,
                    }))
                  }
                  placeholder={'Unique Name'}
                  style={styles.input}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  value={columnName}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      columnName: val,
                    }))
                  }
                  placeholder={'Column Name'}
                  style={styles.input}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={manualUpdateHandler}>
                <Text style={styles.buttonText}>
                  Add Data 
                </Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }}>
              {tableData.length > 0 && (
                <>
                  <View style={{ marginHorizontal: 20 }}>
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
                          {Array.isArray(rowData) && rowData.map((cellData: any, cellIndex: any) => (
                            <Cell
                              key={cellIndex}
                               data={
                                  cellIndex === 3
                                    ? element(cellData, cellIndex, index)
                                    : cellData
                                }
                              textStyle={styles.tableRowText}
                            />
                          ))}
                        </TableWrapper>
                      ))}
                    </Table>
                  </View>

                  {/* <View
                    style={{
                      marginHorizontal: 20,
                    }}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={onUpdatePress}>
                      <Text style={styles.buttonText}>
                        {LOCAL_STRING.Update}
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                </>
              )}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
  
  );
};








 const styles = StyleSheet.create({
      input: {
     marginTop:20,
     marginHorizontal:10,
     borderTopWidth : 1,
     borderStartWidth:1,
     borderRightWidth: 1,
     borderBottomWidth : 1,
     height: 60,
     fontSize:20,
     paddingStart:10,
     borderColor: colors.LIGHT_GREY,
     borderRadius: 10,  
     backgroundColor: colors.LIGHT_GREY,
 
},
   container: {
    flex: 1,
    //backgroundColor: colors.WHITE,
  },
  inputContainer: {
    backgroundColor: colors.GREY,
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
    color:colors.APP_COLOR,
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
  
    color: colors.BLACK_WITH_OPACIT,
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
  textInputStyles: {
   
    fontSize: fontSize.font10,
    color: colors.DARK_BALCK,
    textAlign: 'center',
  },
  inputView: {
    borderWidth: 1,
    borderColor: colors.BLACK_WITH_OPACIT,
    marginHorizontal: 10,
    marginVertical: 10,
  },


});
