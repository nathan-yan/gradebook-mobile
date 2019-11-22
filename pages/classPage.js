import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';

import RecentAssignment from './recentAssignment.js'

import parser from "fast-xml-parser";
import bruhMoment from "../gb.js";

class ClassPage extends Component {
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
            studentData: studentData,
            scrolledPast: false
        }
    }

    stickyElement = (e) => {
        if (e.nativeEvent.contentOffset.y > 110 && !this.state.scrolledPast){
            this.setState({
                scrolledPast: true
            })
        }else if (e.nativeEvent.contentOffset.y <= 110 && this.state.scrolledPast){
            this.setState({
                scrolledPast: false
            })
        }
    }

    render() {
        return <View style = {{flex: 1}}>
    
        
        <ScrollView style = {{flex: 1, marginTop: this.state.scrolledPast ? 0 : 0}} onScroll = {this.stickyElement}>
        <StatusBar translucent = {true} hidden = {true}/>
                <View style = {{flex: 1.5, height: 110, backgroundColor: "#6dc39a", width: "100%", paddingTop: 20, paddingLeft: 30, borderBottomLeftRadius: 0}}>
                    <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 30, color: "#fff", width: "70%", flex: 1}} ellipsizeMode = {"tail"} numberOfLines = {2}>Advanced Calculus</Text>
                </View>

                  <View style = {{flex: 1.5, height: 110, backgroundColor: "#6dc39a", width: "100%", paddingTop: 20, paddingLeft: 30, borderBottomLeftRadius: 0}}>
                    <View style = {{justifyContent: "flex-end", flex: 1, paddingBottom: 25, paddingTop: 15}}>
                        <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 30, color: "#fff", marginTop: 10}}>94.2% -> A</Text>
                        <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 20, color: "#fff"}}>Projected: 92.5% -> A</Text>
                    </View>
                </View>


                <View style = {{flex: 5}}>
                    <View style = {{paddingTop: 20, paddingLeft: 30}}>
                        <View style = {{marginBottom: 10}}>
                            <Text style = {{...styles.text, fontSize: 20}}>Assignments</Text>
                        </View>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                        <RecentAssignment color = {"#fff"} textColor = {"#000"}></RecentAssignment>
                    </View>
                </View>
                
              
            </ScrollView>
            
            {this.state.scrolledPast ?  <View style = {{flex: 1.5, height: 110, position: "absolute", top: 0, backgroundColor: "#6dc39a", width: "100%", paddingTop: 20, paddingLeft: 30, borderBottomLeftRadius: 0}}>
                    <View style = {{justifyContent: "flex-end", flex: 1, paddingBottom: 25, paddingTop: 15}}>
                        <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 30, color: "#fff", marginTop: 10}}>94.2% -> A</Text>
                        <Text style = {{...styles.text, fontFamily: "Inter-SemiBold", fontSize: 20, color: "#fff"}}>Projected: 92.5% -> A</Text>
                    </View>
                </View> : null}
            </View>
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
  

export default ClassPage;
