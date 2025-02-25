import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type EventCardProps = {
  title: string;
  color: string;
  countdown: string;
};

const EventCard = ({title, color, countdown}: EventCardProps) => {
  return (
    <View style={[styles.card, {backgroundColor: color}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.countdown}>{countdown}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countdown: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default EventCard;
