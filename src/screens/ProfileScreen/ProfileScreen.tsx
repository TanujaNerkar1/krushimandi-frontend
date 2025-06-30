import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Linking } from 'react-native'; // Ensure this is imported
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.screenTitle}>Profile</Text>


      <View style={styles.profileBox}>
        <Image
          source={require('../../../assets/profile.jpg')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Arjun Bahadur</Text>
          <Text style={styles.lastLogin}>Last Login: April 12, 2023</Text>
        </View>
      </View>

      <View style={styles.settingsSection}>

        <View style={styles.topBoxContainer}>
          <TouchableOpacity style={styles.topBox}>
            <Ionicons name="crown-outline" size={24} color="#2E7D32" />
            <Text style={styles.topBoxText}>Manage membership</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBox}>
            <Ionicons name="trophy-outline" size={24} color="#2E7D32" />
            <Text style={styles.topBoxText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>


        {[
          { icon: 'cog', text: 'Settings' },
          { icon: 'info-circle', text: 'Help guide' },
          { icon: 'thumbs-o-up', text: 'Rate us on Play Store' },
          { icon: 'file-text-o', text: 'Terms & Conditions' },
          { icon: 'shield', text: 'Privacy Policy' },
          { icon: 'headphones', text: 'Contact Krushimandi Team' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionRow}>
            <View style={styles.iconWrapper}>
              <FontAwesome name={item.icon} size={20} color="#000" />
            </View>
            <Text style={styles.optionText}>{item.text}</Text>
            <Ionicons name="chevron-forward" size={20} color="#777" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        ))}


        <View style={styles.footer}>
          <View style={styles.socialIcons}>
            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => Linking.openURL('https://x.com/krushimandi?t=MpwAOndTGNhpmH69CuITtA&s=09')}
            >
              <FontAwesome5 name="twitter" size={22} color="#1DA1F2" />
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => Linking.openURL('https://www.facebook.com')}
            >
              <FontAwesome5 name="facebook-f" size={22} color="#1877F2" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => Linking.openURL('https://www.instagram.com/krushimandi?igsh=ZXpuZmZ1dGJkOXU5')}
            >
              <FontAwesome5 name="instagram" size={22} color="#C13584" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => Linking.openURL('https://youtube.com/@krushimandi?si=XREGlmY9a7ZVBl6E')}
            >
              <FontAwesome5 name="youtube" size={22} color="#FF0000" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton}>
            <MaterialCommunityIcons name="power" size={22} color="#D11A2A" />
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            App Version 3.15.2  •  Made with <Text style={{ color: 'red' }}>❤️</Text> in India
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F5F2',
  },
  profileBox: {
    backgroundColor: '#81C784',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastLogin: {
    color: '#D8EAD9',
    fontSize: 12,
    marginTop: 4,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 30,
    color: '#000',
  },
  settingsSection: {
    marginTop: 16,
  },
  topBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  topBox: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
  },
  topBoxText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 16,
    borderRadius: 10,
    marginVertical: 6,
  },
  iconWrapper: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 20,
    marginRight: 16,
  },
  optionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1D1D1D',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 30,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,

  },
  socialIcon: {
    backgroundColor: '#DCE6DA',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#D11A2A',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  logoutText: {
    color: '#D11A2A',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  footerText: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
});
