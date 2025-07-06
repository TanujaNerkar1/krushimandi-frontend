import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.header}>Privacy Policy</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.text}>
          Krushimandi respects your privacy and is committed to protecting your personal data. This privacy policy describes how we handle your information.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>2. Data We Collect</Text>
        <Text style={styles.text}>
          We may collect your name, contact information, device info, and usage data to improve our services.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>3. How We Use Your Data</Text>
        <Text style={styles.text}>
          We use your data to personalize your experience, improve features, send important updates, and ensure security.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>4. Sharing Your Data</Text>
        <Text style={styles.text}>
          We do not sell your data. Your information may be shared with trusted third-party services for app functionality only.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>5. Data Security</Text>
        <Text style={styles.text}>
          We implement appropriate security measures to protect your data from unauthorized access or disclosure.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>6. Changes to This Policy</Text>
        <Text style={styles.text}>
          We may update this policy occasionally. Users will be notified of major changes.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>7. Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions, contact us at: support@krushimandi.in
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f3',
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 26,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    color: '#222',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
});
