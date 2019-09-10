import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);
    
    const blogPost = state.find((blogPost) =>
            blogPost.id === id
    );

    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}} 
            onSubmit ={(title, content) => {
                editBlogPost(id, title, content, ()=> navigation.pop());
        }}/>
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