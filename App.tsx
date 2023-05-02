import React from 'react';
import {FlatList,Text,View,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import Module2 from './components/module2';
import Module3 from './components/module3';
import Module1 from './components/module1';
import {TOP_PLACES} from './data/theme';
import Module4 from './components/module4';
import ActivityDetail from './components/ActivityDetail';

const App = () => {
  return (
     <View>
     <View>
     <ActivityDetail/>
     </View>
     </View>
     )
}

export default App;
