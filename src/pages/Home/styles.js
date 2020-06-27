import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight+20
  },

  Header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  Title: {
    color: '#002663',
    fontSize: 30,
    marginBottom: 16,
    marginTop: 18,
    marginLeft: 15,
    fontWeight: 'bold'
  },

  Title2: {
    color: '#002663',
    fontSize: 20,
    marginBottom: 13,
    marginTop: 18,
    fontWeight: 'bold'
  },

  Input: {
    marginTop: 10,
    backgroundColor: '#d9d9d9',
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 15,
    borderRadius: 3
  },

  Button: {
    marginTop: 20,
    marginBottom: 22,
    paddingHorizontal: 7,
    paddingVertical: 12,
    backgroundColor: '#3498db',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 3
  },

  ButtonText: {
    fontSize: 25,
    color: '#FFF'
  },

  NamesList: {
    marginTop: 32
  },
});
