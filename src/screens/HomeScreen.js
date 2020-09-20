import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import fake from './fake.json';

export default class HomeScreen extends React.Component {
  renderItem = ({item}) => {
    console.log(item)
    return (
      <TouchableOpacity key={item._id} onPress={() => this.props.navigation.navigate('Details', {item})}>
        <Card>
          <Card.Title>{item.company}</Card.Title>
          <Card.Divider />
          <View key={item._id}>
            <Image
              style={{height: 150, width: '100%'}}
              resizeMode="cover"
              source={{uri: item.picture}}
            />
            <View style={{marginTop: 10}}>
              <Text>{item.city}</Text>
              <Text>
                {item.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                €
              </Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center', margin: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nos biens</Text>
        </View>
        <FlatList
          data={fake}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{paddingBottom: 10}}
        />
      </SafeAreaView>
    );
  }
}
