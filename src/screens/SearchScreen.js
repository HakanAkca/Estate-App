import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-elements';

import fake from './fake.json';

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      items: [],
      tags: [
        {
          name: 'Terrain',
          type: 'Terrain',
          id: 0,
          checked: true,
        },
        {
          name: 'Appartement',
          type: 'Apartment',
          id: 1,
          checked: false,
        },
        {
          name: 'Maison',
          type: 'House',
          id: 2,
          checked: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({items: fake});
  }

  renderItem = ({item, tags}) => {
    return (
      <TouchableOpacity>
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

  onSelectedItemsChange = (selectedItems) => {
    this.setState({selectedItems});
  };

  toggleCheckbox(e) {
    let changedCheckbox = this.state.tags.find((type) => type.name === e.name);
    changedCheckbox.checked = !changedCheckbox.checked;
    let chkboxes = this.state.tags;
    for (let i = 0; i < chkboxes.length; i++) {
      if (chkboxes[i].type === e.name) {
        chkboxes.splice(i, 1, changedCheckbox);
      }
    }
    this.setState({tags: chkboxes});
  }

  render() {
    const {selectedItems, tags, items} = this.state;

    return (
      <SafeAreaView>
        <View style={{flexDirection: 'column'}}>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recherche</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
            {tags.map((res) => {
              return (
                <TouchableOpacity style={{borderWidth: 1, borderColor: 'green',padding: 10, borderRadius: 20, backgroundColor: res.checked ? 'green' : 'white'}} onPress={() => this.toggleCheckbox(res)}>
                  <Text style={{color: res.checked ? 'white' : 'black' }}>{res.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <ScrollView>
            {tags.map((res) =>
              items.map((item) => {
                if (res.type == item.type && res.checked === true) {
                  return (
                    <TouchableOpacity
                      key={item._id}
                      onPress={() =>
                        this.props.navigation.navigate('Details', {item})
                      }>
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
                              {item.balance
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                              €
                            </Text>
                          </View>
                        </View>
                      </Card>
                    </TouchableOpacity>
                  );
                }
              }),
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
