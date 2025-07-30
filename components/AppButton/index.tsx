// components/AppButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle; // Permite passar estilos adicionais para o container do botão
  textStyle?: TextStyle; // Permite passar estilos adicionais para o texto do botão
}

const AppButton: React.FC<AppButtonProps> = ({ 
  title, 
  onPress, 
  disabled = false, 
  loading = false, 
  style, 
  textStyle 
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={disabled || loading} // Desabilita se estiver disabled OU loading
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#fff" /> // Mostra um spinner se estiver carregando
      ) : (
        <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#887447', // Cor de fundo padrão
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: '#a3a3a3', // Cor para o botão desabilitado
    opacity: 0.7, // Opacidade
  },
  buttonText: {
    color: '#fff', // Cor do texto padrão
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextDisabled: {
    color: '#e0e0e0', // Cor do texto quando o botão está desabilitado
  },
});

export default AppButton;