import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native';
import AddEventScreen from './AddEventScreen';
import EventCard from './EventCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';

const {WidgetModule} = NativeModules;

import {NavigationProp} from '@react-navigation/native';

const MainScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [events, setEvents] = useState<any[]>([]);
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const storedEvents = await AsyncStorage.getItem('events');
        if (storedEvents) {
          setEvents(JSON.parse(storedEvents));
        }
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    loadEvents();
  }, []);

  const saveEvents = async (newEvents: any[]) => {
    try {
      await AsyncStorage.setItem('events', JSON.stringify(newEvents));
    } catch (error) {
      console.error('Error saving events:', error);
    }
  };

  const handleAddEvent = (event: any) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    saveEvents(updatedEvents);
    setShowAddEvent(false);
  };

  const addWidget = () => {
    WidgetModule.updateWidget(
      events.length > 0 ? events[0].title : 'No events',
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Dodaj Wydarzenie" onPress={() => setShowAddEvent(true)} />
      <Button title="Dodaj Widget" onPress={addWidget} />
      <Button
        title="Ustawienia"
        onPress={() => navigation.navigate('Settings')}
      />
      {showAddEvent && <AddEventScreen onAddEvent={handleAddEvent} />}
      <ScrollView style={styles.eventList}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            color={event.color}
            countdown={`Do wydarzenia pozostało: ${event.unit}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  eventList: {
    marginTop: 20,
  },
});

export default MainScreen;
