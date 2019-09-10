import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}>
            </TextInput>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}>
            </TextInput>
            <Button
                title="Add Blog Post"
                onPress={() => {
                    addBlogPost(title,content, () => {
                        navigation.navigate('Index');
                    });
                }}
            />
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

export default CreateScreen;