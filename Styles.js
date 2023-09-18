import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  Wtop: {
    flex: 1.1,
    justifyContent: 'flex-end',
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10
  },
  Wcenter: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  Wbottom: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 2
  },
  Ltop: {
    flex: 1.1,
    justifyContent: 'flex-end',
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  //home styles
  Homecontainer:{
flex: 1,
    justifyContent: 'center',
    backgroundColor:'#EDEADE'
  },
  Htop:{
    flex: 0.7,
    borderBottomLeftRadius:22,
    borderBottomRightRadius:22,
    backgroundColor:'white',
  },
  Hcenter:{
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  Hbottom:{
    justifyContent: 'center',
    alignItems:'center',
    },
  containerinput: {
    flex:1,
    flexDirection: "row",
    borderWidth: 0,
    borderRadius: 25,
    elevation: 3,
    backgroundColor:'#393939',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#2C3135",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 5,
    margin: 5,
    marginLeft:8
  }

});