import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, Alert, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ContactScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const openDial = () => Linking.openURL('tel:+919876543210');
    const openEmail = () => Linking.openURL('mailto:support@vahak.com');
    const openMaps = () => Linking.openURL('https://maps.google.com/?q=Vahak HQ, Bengaluru');
    const openWhatsApp = () => {
        const phone = '+919876543210';
        const whatsappMessage = 'Hi, I need assistance from the Krushimandi team.';
        Linking.openURL(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`);
    };

    const handleSend = () => {
        
        Alert.alert('Message Sent!');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Contact</Text>
            <Text style={styles.subHeading}>Have questions or feedback? We’re here to help. Send us a message, and we’ll respond within 24 hours.</Text>

            {/* Form Fields */}
            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={[styles.input, styles.messageBox]}
                    placeholder="Leave us a message"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                    numberOfLines={4}
                />
                
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send Message</Text>
                </TouchableOpacity>
            </View>

            {/* Contact Cards */}
            <TouchableOpacity style={styles.card} onPress={openWhatsApp}>
                <FontAwesome name="whatsapp" size={28} color="#4CAF50" />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Live Chat</Text>
                    <Text style={styles.cardText}>Chat with us on WhatsApp</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={openDial}>
                <Ionicons name="call" size={24} color="#4CAF50" />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Call Us</Text>
                    <Text style={styles.cardText}>+91 9876543210</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={openEmail}>
                <MaterialIcons name="email" size={24} color="#4CAF50" />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Email Us</Text>
                    <Text style={styles.cardText}>support@krushimandi.com</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={openMaps}>
                <Ionicons name="location" size={24} color="#4CAF50" />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Visit Us</Text>
                    <Text style={styles.cardText}>Krushimandi HQ, 2nd Floor, Tech Park, Bengaluru</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 26,
        marginBottom: 26,
        color: '#222',
    },
    subHeading: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },
    form: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        marginBottom: 12,
        backgroundColor: '#fafafa',
    },
    messageBox: {
        height: 100,
        textAlignVertical: 'top',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkboxText: {
        fontSize: 13,
        color: '#555',
    },
    link: {
        color: '#2196F3',
        textDecorationLine: 'underline',
    },
    sendButton: {
        backgroundColor: '#C8E6C9',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    cardContent: {
        marginLeft: 12,
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    cardText: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
});

export default ContactScreen;
