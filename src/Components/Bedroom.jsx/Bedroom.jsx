import { Container } from "../helpers/Container";
import BedProduct1 from "./BedProduct1";
import BedProduct2 from "./BedProduct2";
import BadMenu from "./bedMenu";

export default function Bedroom() {
  return (
    <Container>
      <div className="flex gap-32">
        <div className="hidden md:block lg:block">
          <BadMenu/>
        </div>
        <div>
          <BedProduct1/>
          <BedProduct2/>
          <BedProduct1/>
        </div>
      </div>
    </Container>
  );
}