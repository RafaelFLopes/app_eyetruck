import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styleMensagemAlerta';

interface MensagemAlertaProps {
  visible: boolean;
  tipo?: "sucesso" | "erro" | "info";
  titulo?: string;
  mensagem: string;
  onClose: () => void;
}

export default function MensagemAlerta({
  visible,
  tipo = "info",
  titulo,
  mensagem,
  onClose
}: MensagemAlertaProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View
          style={[
            styles.card,
            tipo === "sucesso" && styles.cardSucesso,
            tipo === "erro" && styles.cardErro,
            tipo === "info" && styles.cardInfo,
          ]}
        >

          {titulo && <Text style={styles.titulo}>{titulo}</Text>}
          <Text style={styles.mensagem}>{mensagem}</Text>

          <TouchableOpacity style={styles.botao} onPress={onClose}>
            <Text style={styles.botaoTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
