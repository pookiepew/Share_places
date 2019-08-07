import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'



const startTabs = () => {

  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? "map-marked-alt" : "map", 30), //* Icon name, iconsize, iconcolor
    Icon.getImageSource(Platform.OS === 'android' ? "share" : "share-square", 30),
    Icon.getImageSource("bars", 30)
  ]).then(sources => {

    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "#69207e"
      },
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "#69207e"
      }
    })
  })
}

export default startTabs