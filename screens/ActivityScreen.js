import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ActivitySuggestions } from '../components';


const ActivityScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ padding: 10 }} >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Activity</Text>
      </View>
      <ScrollView style={{ margin: 10 }} >
        <View>
          <Text style={{ fontWeight: '500' }} >Today</Text>
        </View>
        <View>
          <ActivitySuggestions />
        </View>
      </ScrollView>
    </View>
  )
}


export default ActivityScreen;
