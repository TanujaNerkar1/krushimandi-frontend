import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fruit } from '../types';
import { fruits } from '../data/fruits';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';  // adjust the path if needed

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={styles.profileRow}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.greeting}>
              <Text style={styles.greetingName}>Hi, Arjun</Text>
            </Text>
          </View>
        </TouchableOpacity>


        <Ionicons name="menu" size={24} color="#000" />
      </View>

      <Text style={styles.title}>Explore Fruits and Berries</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#B0B0B0" style={styles.icon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#B0B0B0"
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialCommunityIcons
          name="microphone"
          size={22}
          color="#B0B0B0"
          style={styles.icon}
        />
      </View>

      <FlatList
        data={filteredFruits}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.bgColor }]}
            onPress={() => navigation.navigate('DetailScreen', { fruit: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 18,
    marginRight: 8,
  },
  greeting: {
    fontSize: 16,
    color: '#777',
  },
  greetingName: {
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 22,
    marginBottom: 16,
    marginTop: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 40,
    marginHorizontal: 24,
    marginBottom: 16,
  },
  icon: {
    marginHorizontal: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    color: '#000',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    width: '48%',
    height: 200,
    // backgroundColor: item.bgColor,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#777',
  },
  gridContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 20,
    backgroundColor: '#F9F9F9',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
