/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {OptionType} from './type';
import SelectDropdown from 'react-native-select-dropdown';
import {selectStyles} from './style';

type CustomSelctProps = {
  options: OptionType[];
  control: any;
  name: string;
  error?: string;
  label?: string;
  placeholder?: string;
  value?: OptionType;
};
const CustomSelect: FC<CustomSelctProps> = ({
  control,
  name,
  options,
  error,
  label,
  placeholder,
  value,
}) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange}}) => (
          <>
            {label && (
              <Text style={{fontSize: 14, color: 'grey', marginBottom: 5}}>
                {label}
              </Text>
            )}
            <SelectDropdown
              data={options}
              defaultValue={value}
              onSelect={(selctedItem: OptionType) => {
                onChange(selctedItem.value);
              }}
              buttonStyle={selectStyles.dropdown3BtnStyle}
              renderCustomizedButtonChild={(selctedItem: OptionType) => {
                return (
                  <View style={selectStyles.dropdown3RowChildStyle}>
                    <Text style={selectStyles.dropdown3BtnTxt}>
                      {selctedItem
                        ? selctedItem.label
                        : placeholder || 'Select'}
                    </Text>
                  </View>
                );
              }}
              dropdownStyle={selectStyles.dropdown3DropdownStyle}
              rowStyle={selectStyles.dropdown3RowStyle}
              renderCustomizedRowChild={(item: OptionType) => {
                return (
                  <View style={selectStyles.dropdown3RowChildStyle}>
                    <Text>{item.label}</Text>
                  </View>
                );
              }}
            />
            {error && <Text style={{color: 'red'}}>{error}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default CustomSelect;
