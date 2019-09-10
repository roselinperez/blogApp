import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) =>
            blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>Enter New Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}>
            </TextInput>
            <Text style={styles.label}>Enter New Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(newContent) => setContent(newContent)}>
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        marginBottom: 15
    },
    label: {
        marginLeft: 5,
        fontSize: 20,
        marginBottom: 5
    }
});

export default EditScreen;