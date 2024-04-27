import {DefaultPlayer as Video} from 'react-html5video'

function Banner() {
  return (
    <Video autoPlay loop
    >
        <source src="https://youtu.be/nLQ-9vfEjUI?si=Zs4lB29HmQSYBX10" type="video/webm"/>
    </Video>
  );
}

export default Banner;
