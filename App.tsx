/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import UserForm from './component/useForm/UserForm';

/**
 * We are going to install package i.e  react-hook-form and yup(Validations) (DOne)
 * We are going to initialise our form using react-hook-form (Textfield(DOne), Select(Done) and Datepicker(Done))
 * We are going to create a common component for all these field.(Done)
 * We are going to learn KeyboardAvoid.(Done)
 * At last we are able to get all the values.
 */

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <UserForm />
    </SafeAreaView>
  );
}

export default App;
