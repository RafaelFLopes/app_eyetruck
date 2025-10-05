import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { View, Image, Text } from "react-native";
import CardAlturaCaminhao from "../../components/cardAlturaCaminhao/cardAlturaCaminhao";
import CardAzul from '../../components/cardAzul/cardAzul';
import { styles } from './styleHome';

import React, { useState } from "react";
import { useDevice } from "../../contexts/DeviceContext";
import { db } from '../../../FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const LogoAzulClaro = require('../../../assets/images/logoAzulClaro.png');
const ImagemEditarPerfil = require('../../../assets/images/imagemEditarPerfil.png');
const ImagemHomeDuvidas = require('../../../assets/images/imagemHomeDuvidas.png');
const LogoLetrasCinza = require('../../../assets/images/logoLetrasCinza.png');

export default function Home() {
  const navigation = useNavigation() as any;
  const EditarAltura = () => { navigation.navigate('EditarAltura') }

  const EditarPerfil = () => { navigation.navigate('EditarPerfil') }

  const { codigo } = useDevice();
  const [alturaCaminhao, setAlturaCaminhao] = useState<string | null>(null);

useFocusEffect(
    React.useCallback(() => {
      if (!codigo) return;

      const fetchData = async () => {
        try {
          const ref = doc(db, "tbl_dispositivos", codigo);
          const snapshot = await getDoc(ref);

          if (snapshot.exists()) {
            const data = snapshot.data();
            setAlturaCaminhao(data.alturaCaminhao?.toString() || null);
          } else {
            setAlturaCaminhao(null);
          }
        } catch (error) {
          setAlturaCaminhao(null);
        }
      };

      fetchData();
    }, [codigo])
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerHome}>
        <Image source={LogoLetrasCinza} style={styles.logoLetrasCinza} resizeMode="contain" />
      </View>
      <CardAlturaCaminhao onPress={EditarAltura} >
        <View style={styles.cardItem}>
          <Image source={LogoAzulClaro} style={styles.logoAzulClaro} resizeMode="contain" />
        </View>
        <View style={styles.cardItem}>
          <View style={styles.tituloCard}>
            <Text style={styles.titulo}>Altura</Text>
            <Text style={styles.altura}>
              {alturaCaminhao ? `${alturaCaminhao}` : '...'}
            </Text>
          </View>
        </View>
      </CardAlturaCaminhao>


      <View style={styles.grupoCardsAzuis}>
        <CardAzul 
          title="Suas informações" 
          onPress={EditarPerfil} 
          imageSource={ImagemEditarPerfil}
        />
        <CardAzul 
          title="Duvidas frequentes" 
          onPress={EditarPerfil} 
          imageSource={ImagemHomeDuvidas} 
        />
      </View>
    </View>
  );
}