import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import {BoxShadow} from 'react-native-shadow';

class ClassTab extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const shadowOpt = {
            width: 90,
            height: 120,
            color:"#000",
            border: 10,
            radius: 10,
            opacity:0.04,
            x:0,
            y:4,
            style:{flexDirection: "row", alignSelf: "flex-end", marginRight: 15, marginLeft: this.props.isFirst ? 30 : 0, marginBottom: 15}
        }

        return <BoxShadow setting = {shadowOpt}>
             <View style = {{...styles.classTab, backgroundColor: this.props.background}}>
                <Text style = {{...styles.text, color: "#fff", fontSize: 12}}>Adv. Calculus</Text>
                <Text style = {{...styles.text, color: "#fff", fontSize: 20}}>92.5%</Text>
            </View>
            </BoxShadow>
    }
}

const styles = StyleSheet.create({  text: {
    fontFamily: "Inter-SemiBold",
    color: "#000"
  },
  classTab: {
    width: 90,
    height: 120,
    elevation: 1,
    borderRadius: 10,
    padding: 10, 
    flex: 1,
    flexDirection: "column"
    }})

export default ClassTab;