import {View, Text, TextInput, TextInputProps} from 'react-native';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';

type CustomTextInputprops = {
  control: any;
  name: string;
  error?: string;
  label?: string;
} & TextInputProps;

const CustomTextInput: FC<CustomTextInputprops> = ({
  control,
  name,
  error,
  label,
  ...rest
}) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            {label && (
              <Text style={{fontSize: 14, color: 'grey', marginBottom: 5}}>
                {label}
              </Text>
            )}
            <TextInput
              value={value}
              style={{borderColor: 'black', borderWidth: 2, borderRadius: 10}}
              onChangeText={onChange}
              autoCapitalize="none"
              onBlur={onBlur}
              {...rest}
            />
          </>
        )}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
