import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import {BoxShadow} from 'react-native-shadow';

class RecentAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const shadowOpt = {
            width: 220,
            height: 120,
            color:"#000",
            border: 20,
            radius: 10,
            opacity:0.03,
            x:-25,
            y:4,
            style:{flexDirection: "column", alignSelf: "flex-end"}
        }

        return <View style = {{flex: 1, flexDirection: "column", marginBottom: 10}}>
                        <View style = {{...styles.recentAssignments, flex: 1, flexDirection: "row"}}>
                            <View style = {{flex: 1, alignItems: "flex-start"}}>
                                <View style = {{alignItems: "center"}}>
                                    <Text style = {{...styles.text, fontSize: 10, paddingBottom: 10,}}>2.3.19</Text>
                                    <View style = {{width: 3, height: 100, backgroundColor: "#f5f5f5"}}></View> 
                                </View>
                            </View>
                            <View style = {{flex: 3}}>
                                <BoxShadow setting = {shadowOpt} > 
                                    <View  style = {{...styles.recentAssignment, flexDirection: "column", alignSelf: "flex-end", backgroundColor: this.props.color, padding: 15}}>
                                        <View style = {{flex: 1, flexDirection: "row"}}>
                                            <Text style = {{...styles.text, color: this.props.textColor, fontSize: 12, flex: 1, paddingRight: 10}} ellipsizeMode = {"tail"} numberOfLines = {2}>Chapter 13 Test</Text>
                                            <Text style = {{...styles.text, color: this.props.textColor, fontSize: 12, flex: 1, paddingLeft: 10, textAlign: "right"}}>Spanish 4</Text>
                                        </View>
                                        <View style = {{flex: 1, flexDirection: "row"}}>
                                            <Text style = {{...styles.text, color: "#AAA", fontSize: 12, flex: 1, paddingRight: 10}} ellipsizeMode = {"tail"} numberOfLines = {1}>Practice and Participation</Text>
                                        </View>
                                        <View style = {{flex: 1, justifyContent: "flex-start", flexDirection: 'row'}}>
                                            <Text style = {{...styles.text, color: this.props.textColor, fontSize: 15, flex: 5}}>32/35 -> 92%</Text>        
                                            <Text style = {{...styles.text, color: "#50CEA8", fontSize: 15, flex: 2}}>+0.15%</Text>        
                                        </View>
                                    </View>
                                </BoxShadow>
                            </View>
                        </View>
                    </View>
    }
}

const styles = StyleSheet.create({  text: {
    fontFamily: "Inter-SemiBold",
    color: "#000"
  },
  recentAssignment: {
        width: 220,
        height: 120,
        marginRight: 30,
        borderRadius: 10
    }})

export default RecentAssignment;