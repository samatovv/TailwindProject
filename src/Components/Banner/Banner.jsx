import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import { Container } from "../helpers/Container"
import video from "../../assets/Videos/video.mp4"
function Banner() {
  return (
    <Container>
      <Video autoPlay loop
      >
        <source src={video} type="video/webm" />
      </Video>
    </Container>
  );
}
export default Banner;