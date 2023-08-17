import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const contentShow = ({ params }) => {
    // const text = `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis <p>et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </p>magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, <p>quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>`
  return (
    <View style={{ padding: 10 }}>
        <Text style={styles.articleTitle}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit */}
            {params.postData.title}
        </Text>
        <Text style={styles.articleContent}>
            {params.postData.content.replace(/<p>/g,"").replace(/<\/p>/g,"\n\n")}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    articleTitle: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: '300',
        color: "#444444"
    },
    articleContent: {
        fontSize: 18,
        color: "#444444"
    }
})


export default contentShow