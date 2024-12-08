import { Container } from "../helpers/Container";
import BedProduct1 from "./BedProduct1";
import BedProduct2 from "./BedProduct2";
import FadeMenu from "./bedMenu";

export default function Bedroom() {
  return (
    <Container>
      <div className="bedroom-container flex gap-32">
        <FadeMenu/>
        <div>
          <BedProduct1/>
          <BedProduct2/>
        </div>
      </div>
    </Container>
  );
}