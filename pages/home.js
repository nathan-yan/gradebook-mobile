import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';

import RecentAssignment from './recentAssignment.js'
import ClassTab from './classTab.js'

import parser from "fast-xml-parser";
import bruhMoment from "../gb.js";

class HomeScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            display: "none"
        }
    }

    constructor(props){
        super(props);

        let studentData = parser.parse(bruhMoment, {
            ignoreAttributes: false
        })

        this.state = {
            studentData: studentData            
        }
    }

    render() {
        return <ScrollView style = {{flex: 1}}>
        <StatusBar translucent = {true} hidden = {true}/>
                <View style = {{flex: 3, height: 220, backgroundColor: "#fff", width: "100%", paddingTop: 20, paddingLeft: 30, borderBottomLeftRadius: 30}}>
                    <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 30, color: "#000"}}>Hello,{"\n"}Nathan</Text>
                    <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 20, color: "#000", marginTop: 20}}>Here are your classes</Text>
                </View>
                
                <View style = {{flex: 1}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {{backgroundColor: "#fff0", width: "100%", marginTop: -50}}>
                        <ClassTab isFirst = {true} background = {"#f18181"}></ClassTab>
                        <ClassTab background = {"#6dc39a"}></ClassTab>
                        <ClassTab background = {"#3d5cff"}></ClassTab>
                        <ClassTab background = {"#e0c49a"}></ClassTab>
                        <ClassTab background = {"#523ab6"}></ClassTab>
                    </ScrollView>
                </View>

                <View style = {{flex: 5, paddingTop: 20, paddingLeft: 30}}>
                    <View style = {{marginBottom: 10}}>
                        <Text style = {{...styles.text, fontSize: 20}}>Recent Assignments</Text>
                    </View>
                    <RecentAssignment color = {"#6dc39a"} textColor = {"#fff"}></RecentAssignment>
                    <RecentAssignment color = {"#3d5cff"} textColor = {"#fff"}></RecentAssignment>
                    <RecentAssignment color = {"#e0c49a"} textColor = {"#fff"}></RecentAssignment>
                    <RecentAssignment color = {"#3d5cff"} textColor = {"#fff"}></RecentAssignment>
                </View>
            </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
      fontFamily: "monospace",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontFamily: "Inter-SemiBold",
      color: "#000"
    },
    instructions: {
      fontFamily: "Inter.var",
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    classTab: {
        width: 90,
        height: 120,
        elevation: 1,
        borderRadius: 10,
        marginRight: 15
    },
    recentAssignments: {
        flex: 1,
        borderRadius: 10
    },
    recentAssignment: {
        width: 200,
        height: 100,
        backgroundColor: "#f9f9f9",
        marginRight: 30,
        borderRadius: 10
    }
  });
  

export default HomeScreen;
