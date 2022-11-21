import { useState } from 'react';
import { Overlay, ModalBody, Form, Header, Input, OverlayWithoutFeedback, } from './styles';
import { Modal, TouchableOpacity } from 'react-native';
import { isAndroid } from '../../utils/isAndroid';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();

  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade">
      <OverlayWithoutFeedback onPress={onClose}>
        <Overlay behavior={isAndroid ? 'height' : 'padding'}>
          <ModalBody>
            <Header>
              <Text weight='600'>Informe a mesa</Text>

              <TouchableOpacity onPress={onClose}>
                <Close color='#666' />
              </TouchableOpacity>
            </Header>

            <Form>
              <Input
                placeholder='Número da mesa'
                placeholderTextColor="#666"
                keyboardType='number-pad'
                onChangeText={setTable}
              />

              <Button onPress={handleSave} disabled={table.length === 0}>
                Salvar
              </Button>
            </Form>
          </ModalBody>
        </Overlay>
      </OverlayWithoutFeedback>
    </Modal>
  );
}
