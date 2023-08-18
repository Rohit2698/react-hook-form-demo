/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {useForm, useWatch} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {UserFormInitalValue, UserFormValidation} from './util';
import CustomTextInput from '../common/fields/CustomTextInput';
import CustomSelect from '../common/fields/CustomSelect';
import CustomeDatePicker from '../common/fields/CustomeDatePicker';
import KeyboardAvoidingWarpper from '../common/component/KeyboardAvoidingWarpper';

const GenderOption = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Other',
    value: 'other',
  },
];
const UserForm = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: UserFormInitalValue,
    resolver: yupResolver(UserFormValidation),
  });

  const selectedGender = useWatch({control, name: 'gender'});

  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <KeyboardAvoidingWarpper>
      <View style={{marginTop: 50, padding: 30}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '900'}}>
            PLEASE COMPLETE YOUR FORM
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <CustomTextInput
            control={control}
            name={'firstName'}
            label={'First Name'}
            error={errors.firstName?.message || ''}
            placeholder="Enter first name"
          />
        </View>
        <View style={{marginTop: 30}}>
          <CustomTextInput
            control={control}
            name={'lastName'}
            label={'Last Name'}
            error={errors.lastName?.message || ''}
            placeholder="Enter last name"
          />
        </View>
        <View style={{marginTop: 30}}>
          <CustomSelect
            control={control}
            options={GenderOption}
            value={GenderOption.find(item => item.value === selectedGender)}
            name={'gender'}
            label={'Gender'}
            error={errors.gender?.message || ''}
            placeholder="Select Gender"
          />
        </View>
        <View style={{marginTop: 30}}>
          <CustomeDatePicker
            control={control}
            name={'dob'}
            label={'Date Of Borth'}
            error={errors.dob?.message || ''}
          />
        </View>
        <View style={{marginTop: 30}}>
          <CustomTextInput
            control={control}
            name={'lastName'}
            label={'Last Name'}
            error={errors.lastName?.message || ''}
            placeholder="Enter last name"
          />
        </View>
        <View style={{marginTop: 30}}>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </KeyboardAvoidingWarpper>
  );
};

export default UserForm;
