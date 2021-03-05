import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar }  from 'react-native-elements'

const CustomListitem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri:
                        //"https://cenup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                        "https://pixabay.com/illustrations/child-avatar-icon-flat-design-red-1837375/",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" >
                    ABC
                </ListItem.Subtitle >
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListitem

const styles = StyleSheet.create({})
