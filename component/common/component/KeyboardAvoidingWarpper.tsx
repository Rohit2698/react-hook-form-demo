import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {FC} from 'react';

type KeyboardAvoidingWarpperProps = {
  children: JSX.Element;
};
const KeyboardAvoidingWarpper: FC<KeyboardAvoidingWarpperProps> = ({
  children,
}) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWarpper;
