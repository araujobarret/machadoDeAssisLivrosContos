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
          <Text style={style.subtitle}>Concepção e pesquisa:</Text>
          {' '}Marta de Senna, coordenadora{'\n'}
          <Text style={style.subtitle}>Equipe:</Text>
          {' '}Monique Inocêncio, Alice Ewbank, Marcelo Diego, Camila Abreu, Mariana Barros,
          Karen Nascimento, Victor Heringer, Laíza Verçosa e Maira Moura, bolsistas de Iniciação
          Científica.{'\n'}
          <Text style={style.subtitle}>Desenvolvimento do Aplicativo:</Text>
          {' '}Carlos Alberto de Araújo Barreto{'\n'}
        </Text>

        <Text style={style.text}>
          Este aplicativo é resultado do projeto de pesquisa "Machado de Assis: novos modos de usar",
          contemplado com bolsa de produtividade em pesquisa. Foi submetido ao Conselho Nacional
          de Pesquisa e Desenvolvimento (CNPq) em 2015 por Marta de Senna, então pesquisadora da
          Fundação Casa de Rui Barbosa (FCRB).
        </Text>

        <Text style={style.text}>
          Na verdade, é o mais recente desdobramento de uma pesquisa bem mais ampla em torno da
          ficção de Machado de Assis. Essa pesquisa teve início em 2005 (sempre com apoio do CNPq e
          da FCRB) e seus resultados parciais foram sendo disponibilizados ao longo do tempo em{' '}
          <Text style={style.link}>www.machadodeassis.net</Text>{' '}(sítio originalmente desenvolvido por Eduardo Pinheiro, colega da
          FCRB, com webdesign de Cristina Verdade).
        </Text>

        <Text style={style.text}>
          Neste App, o usuário encontrará toda a ficção de Machado de Assis (romances e contos), com
          ferramenta de busca de palavras ou expressões. Assim, pode-se buscar "tédio" ou, se se
          preferir, "tédio à controvérsia"; "puberdade" ou "puberdade moral"; "ressaca" ou "olhos de
          ressaca". Note-se que a busca é sempre feita sem o uso de aspas.
          O objetivo principal é oferecer ao leitor machadiano do século XXI a possibilidade de ter na
          palma da mão toda a ficção do autor, com o bônus de poder localizar, com rapidez e
          segurança, passagens que lhe sejam especialmente caras.
        </Text>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    margin: 12,
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
