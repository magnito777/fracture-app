import * as React from "react";
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Layout() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('index')}
            />
            <Tabs>
                <Tabs.Screen
                    name="form"
                    options={{
                        title: 'Form',
                        tabBarIcon: () => <AntDesign name="form" size={24} color="black" />
                    }}
                />
                <Tabs.Screen
                    name="data"
                    options={{
                        title: 'Data',
                        tabBarIcon: () => <Feather name="database" size={24} color="black" />
                    }}
                />
                <Tabs.Screen
                    name="about"
                    options={{
                        title: 'About',
                        tabBarIcon: () => <FontAwesome6 name="contact-card" size={24} color="black" />
                    }}
                />
            </Tabs>
        </View>
    );
}