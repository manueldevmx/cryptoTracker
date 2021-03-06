import  React, {Component } from 'react';
import {View, Image, Text, StyleSheet, SectionList} from 'react-native'
import Colors from '../../res/colors'

class CoinDetailScreen extends Component {

    state = {
        coin:{}
    }
    getSymbolIcon = (name) => {
      if (nameid) {
        
        const symbol = nameid.toLowerCase().replace(" ", "-");

        return `https://c1.coinlore.com/img/25x25/${nameid}.png`
    }
};
    getSections = (coin) => {

        const sections = [
          {
            title: "Market cap",
            data: [coin.market_cap_usd]
          },
          {
            title: "Volume 24h",
            data: [coin.volume24]
          },
          {
            title: "Change 24h",
            data: [coin.percent_change_24h]
          }
        ];
    
        return sections;
    }


    componentDidMount() {
        const {coin} = this.props.route.params;
        this.props.navigation.setOptions({title: coin.symbol})
        this.setState({coin})
    } 

    render(){
        const {coin} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image style={styles.iconImg} source={{uri: this.getSymbolIcon(coin.name)}}></Image>
                    <Text style={styles.titleText}>
                        {coin.name}
                    </Text>
                </View >
                <SectionList 
                    sections={this.getSections(coin)} 
                    keyExtractor={(item,index) => item+index} 
                    renderItem={({item}) => 
                    <View style={styles.sectionItem}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                    } 
                    renderSectionHeader={({section: {title}}) =>
                    <View style={styles.sectionHeader}> 
                        <Text style={styles.sectionText}>{title}</Text>
                    </View>
                    } 
                    />
            </View>
        )
    }
}
export default CoinDetailScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.charade,
    },
    subHeader: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      padding: 16,
      flexDirection: 'row',
    },
    titleText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      marginLeft: 8,
    },
    iconImg: {
      height: 25,
      width: 25,
    },
    sectionHeader: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      padding: 8,
    },
    sectionItem: {
      padding: 8,
    },
    itemText: {
      color: '#fff',
      fontSize: 14,
    },
    sectionText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });