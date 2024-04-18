// ModalDialogue.js

import React from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/master-style-sheet';

// Define the ModalDialogue component with props for item data, visibility, close handler, and delete handler.
export default function ModalDialogue({ item, visible, onClose, onDelete }) {
    return (
        // Modal component to show dynamic content in a slide-in dialog.
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            {/*Container view for centering the modal content.*/}
            <View style={styles.centeredView}>
                {/*Inner view for modal content.*/}
                <View style={styles.modalView}>
                    { /*Display the keyword and URL of the item.*/}
                    <Text style={styles.modalText}>Keyword: {item.keyword}</Text>
                    <Text style={styles.modalText}>URL: {item.url}</Text>
                    {/*Container for buttons.*/}
                    <View style={styles.buttonContainer}>
                        {/*Close button with event handler.*/}
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={onClose}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                        {/*Delete button with event handler.*/}
                        <TouchableOpacity
                            style={styles.buttonDelete}
                            onPress={() => onDelete(item.id)}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
