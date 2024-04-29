import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import { Container } from "../helpers/Container"
import video from "../../assets/Videos/video.mp4"
import posterImage from "../../assets/IMGS/png/video.png";


function Banner() {
  return (
    <Container>
      <Video autoPlay loop poster={posterImage}>
        <source src={video} type="video/webm" />
      </Video>
    </Container>
  );
}

export default Banner;
