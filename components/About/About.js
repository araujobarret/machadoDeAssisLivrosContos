import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

class About extends React.Component {
  static navigationOptions = {
    title: 'SOBRE',
  }

  render() {
    return (
      <ScrollView>
        <Text style={style.text}>
          Este aplicativo disponibiliza, gratuitamente, a ficção completa de Machado de Assis, ou seja, todos os romances e
          contos do escritor. Nele, o usuário pode tanto ler, de maneira contínua, cada uma das obras, quanto realizar buscas
          por palavra ou expressão. Por exemplo: pode buscar "tédio" ou, se preferir, "tédio à controvérsia";
          "puberdade" ou "puberdade moral"; "ressaca" ou "olhos de ressaca" – basta digitar a palavra ou expressão
          no campo de busca, sem aspas. O objetivo principal deste aplicativo é oferecer ao leitor machadiano do
          século XXI a possibilidade de ter na palma da mão toda a ficção do autor (incluindo os contos que não foram
          republicados em livro por ele), em edição fidedigna, com o bônus de poder localizar, com rapidez e segurança,
          passagens que lhe sejam especialmente caras.
        </Text>

        <Text style={style.text}>
          <Text style={{fontStyle: 'italic'}}>Machado de Assis ficção</Text> é resultado do projeto de pesquisa
          "Machado de Assis: novos modos de usar", submetido ao Conselho Nacional de Pesquisa e Desenvolvimento (CNPq)
          em 2015 por Marta de Senna, então pesquisadora da Fundação Casa de Rui Barbosa (FCRB), e contemplado com bolsa
          de produtividade em pesquisa. Trata-se do mais recente desdobramento de pesquisa mais ampla em torno da ficção
          de Machado de Assis, iniciada em 2005 e que contou sempre com apoio do CNPq e da FCRB. Os resultados parciais
          dessa pesquisa foram sendo disponibilizados ao longo do tempo no portal{' '}
          <Text style={style.link}>www.machadodeassis.net</Text>,
          construído por Eduardo Pinheiro (FCRB) e com webdesign de Cristina Verdade.
        </Text>

        <Text style={style.text}>
          <Text style={style.subtitle}>Concepção, pesquisa e coordenação:</Text>
          {' '}Marta de Senna.
        </Text>

        <Text style={style.text}>
          <Text style={style.subtitle}>Equipe:</Text>
          {' '}Monique Inocêncio, Alice Ewbank, Marcelo Diego, Camila Abreu, Mariana Barros,
          Karen Nascimento, Victor Heringer, Laíza Verçosa e Maira Moura, bolsistas de Iniciação
          Científica.
        </Text>

        <Text style={style.text}>
          <Text style={style.subtitle}>Desenvolvimento do Aplicativo:</Text>
          {' '}Carlos Alberto de Araújo Barreto.
        </Text>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    margin: 14,
    lineHeight: 42
  },
  subtitle: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue'
  }
});

export default About;
