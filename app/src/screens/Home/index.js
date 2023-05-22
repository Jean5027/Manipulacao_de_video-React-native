import { View, ActivityIndicator, useWindowDimensions} from "react-native";
import { useCallback, useState } from "react";
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { VIDEO_HEIGHT, styles, SCREEN_SPACE } from "./styles";


export function Home(){

    const [videoready, setVideoReady] = useState(false);

    const { width } = useWindowDimensions();
    const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

    const onFullScreenChange = useCallback((isFullScreen) => {
        if (isFullScreen){
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }else{
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    },[]);

    return(
        <View style={styles.container}>

            <View style={styles.player}>
                <YoutubeIframe
                videoId="K_8yRH2KPVo"
                width={VIDEO_WIDTH}
                height={videoready ? VIDEO_HEIGHT : 0}
                onReady={() => setVideoReady(true)}
                onFullScreenChange={onFullScreenChange}
                />

                {!videoready && <ActivityIndicator color="red"/>}
            </View>

        </View>
    )
}