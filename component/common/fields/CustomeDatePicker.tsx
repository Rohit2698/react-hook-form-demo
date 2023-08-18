/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import {Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

type CustomeDatePickerProps = {
  control: any;
  name: string;
  error?: string;
  label?: string;
};
const CustomeDatePicker: FC<CustomeDatePickerProps> = ({
  control,
  name,
  error,
  label,
}) => {
  const [openPicker, setOpenPicker] = useState(false);

  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({field: {onBlur, onChange, value}}) => (
          <>
            {label && (
              <Text style={{fontSize: 14, color: 'grey', marginBottom: 5}}>
                {label}
              </Text>
            )}
            <TouchableOpacity onPress={() => setOpenPicker(prev => !prev)}>
              <View pointerEvents="none">
                <TextInput
                  style={{
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 10,
                    color: '#000',
                  }}
                  value={value} // Format using date-fns or moment
                  onBlur={onBlur}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
            <DatePicker
              modal
              open={openPicker}
              mode={'date'}
              onConfirm={date => {
                onChange(new Date(date).toString());
                setOpenPicker(false);
              }}
              onCancel={() => setOpenPicker(false)}
              date={value ? new Date(value) : new Date()}
            />
            {error && <Text style={{color: 'red'}}>{error}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default CustomeDatePicker;
