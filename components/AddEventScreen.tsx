import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

const AddEventScreen = ({onAddEvent}: {onAddEvent: (event: any) => void}) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#ff6347');
  const [selectedUnit, setSelectedUnit] = useState('days');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleAddEvent = () => {
    const event = {
      title,
      color,
      date,
      unit: selectedUnit,
    };
    onAddEvent(event);
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodaj Wydarzenie</Text>
      <TextInput
        style={styles.input}
        placeholder="Tytuł wydarzenia"
        value={title}
        onChangeText={setTitle}
      />
      <Text>Wybierz kolor</Text>
      <Picker
        selectedValue={color}
        style={styles.picker}
        onValueChange={(itemValue: React.SetStateAction<string>) =>
          setColor(itemValue)
        }>
        <Picker.Item label="Czerwony" value="#ff6347" />
        <Picker.Item label="Niebieski" value="#1e90ff" />
        <Picker.Item label="Zielony" value="#32cd32" />
        <Picker.Item label="Żółty" value="#ffeb3b" />
      </Picker>
      <Text>Wybierz jednostkę odliczania</Text>
      <Picker
        selectedValue={selectedUnit}
        style={styles.picker}
        onValueChange={(itemValue: React.SetStateAction<string>) =>
          setSelectedUnit(itemValue)
        }>
        <Picker.Item label="Lata" value="years" />
        <Picker.Item label="Dni" value="days" />
        <Picker.Item label="Godziny" value="hours" />
        <Picker.Item label="Minuty" value="minutes" />
        <Picker.Item label="Sekundy" value="seconds" />
      </Picker>
      <Button title="Wybierz datę" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Button title="Dodaj Wydarzenie" onPress={handleAddEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 10,
  },
});

export default AddEventScreen;
