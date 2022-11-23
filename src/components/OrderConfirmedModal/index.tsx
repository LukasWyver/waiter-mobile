import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OKButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style='light' backgroundColor='#D73035' />

      <Container>
        <CheckCircle />

        <Text
          size={20}
          weight="600"
          color="#fff"
          style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text
          color="#fff"
          opacity={0.9}
          style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OKButton onPress={onOk}>
          <Text color="#D73035" weight="600">OK</Text>
        </OKButton>
      </Container>
    </Modal>
  );
}
