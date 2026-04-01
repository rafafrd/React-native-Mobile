import { Pressable, StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Produtos">;
// Props serve para tipar componentes, assim o navigation pega o rootstackparamlist.
// NativeStackScreenProps serve para tipar telas, assim trabalha em formato de pilha
export default function Produtos({ navigation }: Props) {
  const [qtd1, setQtd1] = useState(1);
  const [qtd2, setQtd2] = useState(1);
  const [qtd3, setQtd3] = useState(1);
  const [qtd4, setQtd4] = useState(1);
  const [qtd5, setQtd5] = useState(1);
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Produtos</Text>
        <View style={styles.linha}>
        {/* <Text style={styles.subtitulo}>
          Tablet - Samsung Galaxy Tab S7 - R$ 2.499,00
        </Text>
        <Text style={styles.subtitulo}>
          Teclado - Logitech K380 - R$ 299,00
        </Text>
        <Text style={styles.subtitulo}>
          Fone de Ouvido - Sony WH - R$ 1.499,00
        </Text>
        <Text style={styles.subtitulo}>  
          Mouse - Razer DeathAdder V2 - R$ 399,00
        </Text>
        <Text style={styles.subtitulo}>
          Monitor - LG UltraFine 4K - R$ 3.999,00
        </Text> */}
        {/* fazendo blocos com texto e contador em baixo simulando uma loja com 5 produtos */}
          <View style={styles.cardProduto}>
            <Image source={require("../../../assets/tablet.jpg")} style={styles.img} />
            <Text style={styles.subtitulo}>
              Tablet - Samsung Galaxy Tab S7 - R$ 2.499,00
            </Text>
            <View style={styles.contador}>
              <Button title="-" onPress={() => setQtd1(qtd1 > 1 ? qtd1 - 1 : 1)} />
              <Text style={styles.subtitulo}>{qtd1}</Text>
              <Button title="+" onPress={() => setQtd1(qtd1 + 1)} />
            </View>
          </View>
          <View style={styles.cardProduto}>
              <Image source={require("../../../assets/teclado.jpg")} style={styles.img} />
            <Text style={styles.subtitulo}>
              Teclado - Logitech K380 - R$ 299,00
            </Text>
            <View style={styles.contador}>
              <Button title="-" onPress={() => setQtd2(qtd2 > 1 ? qtd2 - 1 : 1)} />
              <Text style={styles.subtitulo}>{qtd2}</Text>
              <Button title="+" onPress={() => setQtd2(qtd2 + 1)} />
            </View>
          </View>
          {/* a partir daqui as imagens estao ficando na esqueda, quebrando o bloco, como corrigir */}
          <View style={styles.cardProduto}>
            <Image source={require("../../../assets/fone.jpg")} style={styles.img} />
            <Text style={styles.subtitulo}>
              Fone de Ouvido - Sony WH - R$ 1.499,00
            </Text>
            <View style={styles.contador}>
              <Button title="-" onPress={() => setQtd3(qtd3 > 1 ? qtd3 - 1 : 1)} />
              <Text style={styles.subtitulo}>{qtd3}</Text>
              <Button title="+" onPress={() => setQtd3(qtd3 + 1)} />
            </View>
          </View>
          <View style={styles.cardProduto}>
            <Image source={require("../../../assets/mouse.jpg")} style={styles.img} />
            <Text style={styles.subtitulo}>
              Mouse - Razer Viper v3 Pro - R$ 1.199,00
            </Text>
            <View style={styles.contador}>
              <Button title="-" onPress={() => setQtd4(qtd4 > 1 ? qtd4 - 1 : 1)} />
              <Text style={styles.subtitulo}>{qtd4}</Text>
              <Button title="+" onPress={() => setQtd4(qtd4 + 1)} />
            </View>
          </View>
          <View style={styles.cardProduto}>
            <Image source={require("../../../assets/monitor.jpg")} style={styles.img} />
            <Text style={styles.subtitulo}>
              Monitor - LG UltraFine 4K - R$ 3.999,00
            </Text>
            <View style={styles.contador}>
              <Button title="-" onPress={() => setQtd5(qtd5 > 1 ? qtd5 - 1 : 1)} />
              <Text style={styles.subtitulo}>{qtd5}</Text>
              <Button title="+" onPress={() => setQtd5(qtd5 + 1)} />
            </View>
          </View>
        </View>
      </View>

      <Pressable style={[styles.botao, styles.botaoAtual]}>
        <Text style={styles.botaoTexto}>Voce esta em Produtos</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, styles.botaoSecundario]}
        onPress={() => navigation.navigate("Contato")}
      >
        <Text style={styles.botaoTexto}>Ir para Contato</Text>
      </Pressable>
      <Pressable
        style={[styles.botao, styles.botaoSecundario]}
        onPress={() => alert("Produto adicionado ao carrinho!")}
      >
        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
      </Pressable>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  cardProduto: {
    // blco apenas com texto, e contador de quantidade
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    padding: 15,
    borderColor: "1px solid #000000",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  img:{
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  contador: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    marginBottom: 20,
    margin: 5,
  },
  botao: {
    backgroundColor: "#00236d",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  btnContador: {
    backgroundColor: "#0f766e",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 10,
  },
  botaoAtual: {
    backgroundColor: "#334155",
  },
  botaoSecundario: {
    backgroundColor: "#0f766e",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linha: {
    flexDirection: "column",
    alignItems: "center"}
});
