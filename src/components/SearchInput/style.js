import {StyleSheet} from 'react-native';
import appColors from '../../styles/colors';
const styles = StyleSheet.create({
    searchTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "rgba(0,0,0,0.5)",
        borderWidth:1,
        borderRadius:8,
      },
      searchTitleInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      },
      searchIcon: {
        fontSize: 20,
        color: "rgba(0,0,0,0.5)",
        padding: 10,
      },
      closeIcon: {
        fontSize: 20,
        color: "rgba(0,0,0,0.5)",
        padding: 10,
      },
      profileInput: {
        flex: 1,
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        color: "rgba(0,0,0,0.5)",
        paddingLeft: 15,
        marginVertical: 5,
      },
});

export default styles;
