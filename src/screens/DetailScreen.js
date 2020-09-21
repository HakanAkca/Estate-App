import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-elements';
import fake from './fake.json';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.route.params.item,
    };
  }

  render() {
    const {item} = this.state;
    return (
      <SafeAreaView>
        <View>
          <Image
            style={{height: 250, width: Dimensions.get('window').width}}
            source={{uri: item.picture}}
          />
          <View style={{margin: 10}}>
            <Text style={{marginBottom: 10, fontSize: 18, fontWeight: 'bold'}}>
              {item.company}
            </Text>
            <Text style={{marginBottom: 10}}>Ville: {item.city}</Text>
            <Text style={{marginBottom: 10}}>M²: {item.company}</Text>
            <Text style={{marginBottom: 10}}>Contact: {item.company}</Text>
            <Text style={{textAlign: 'justify'}}>
              {item.about}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
