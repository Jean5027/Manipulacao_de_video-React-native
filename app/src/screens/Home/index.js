import { View, Text } from "react-native";
import YoutubeIframe from 'react-native-youtube-iframe';

import { VIDEO_HEIGHT, styles } from "./styles";

export function Home(){
    return(
        <View style={styles.container}>
            <YoutubeIframe
            videoId="K_8yRH2KPVo"
            height={VIDEO_HEIGHT}

            />
        </View>
    )
}