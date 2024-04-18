// master-style-sheet.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // HomeScreen styles
    addButton: {
        backgroundColor: 'purple',  
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        width: "40%",
        marginTop: 15,
        marginBottom: 15,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        flex: 0.25,
        height: 40,
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        margin: 8,
        padding: 10,
        backgroundColor: 'pink',
    },
    item: {
        borderWidth: 2,
        borderColor: 'black',
        width: '50%',
        alignSelf: 'center',
        borderStyle: 'solid',
        backgroundColor: 'cyan',
        padding: 5,
        margin: 5,
    },
    itemText: {
        fontSize: 18,
        textAlign: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollArea: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        paddingTop: 16,
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },
    // modal styles
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "blue",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "white",
    },
    modalImage: {
        width: 300,
        height: 200,
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        width: '25%',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    buttonDelete: {
        backgroundColor: '#FF4136',
        padding: 10,
        borderRadius: 20,
        width: '25%',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default styles;
