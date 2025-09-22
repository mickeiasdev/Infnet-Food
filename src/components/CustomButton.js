import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { baseStyles } from '../constants/styles';

const CustomButton = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[baseStyles.button, style]} onPress={onPress}>
    <Text style={[baseStyles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
