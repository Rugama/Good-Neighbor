import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../action/post';

//POST LIST

const PostList = () => {
  const dispatch = useDispatch();
  const deleteCurrent = (key) => dispatch(deletePost(key))
  const posts = useSelector(state => state.reducer.list)
  console.log(posts)
  var timeStamp = Date().toLocaleString()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donation and Request Listing</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={(data) => (
          <View>
            <Text style={styles.items}>
              Type: {data.item.post.type} {'\n'}
                Name: {data.item.post.name} {'\n'}
                City: {data.item.post.city} {'\n'}
                State: {data.item.post.state} {'\n'}
                Email: {data.item.post.email} {'\n'}
                Item Description: {data.item.post.description} 
            </Text>
            <Text style={styles.timeStamp}>Posted on: {data.item.post.timeStamp}</Text>
          </View>
        )  
      }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373d',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  items: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  timeStamp: {
    color: 'white',
    fontSize: 10,
  }



});
export default PostList;