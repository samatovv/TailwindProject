import { Container } from "../helpers/Container";
import oclock from "../../assets/IMGS/svg/oclock.svg"
import compas from "../../assets/IMGS/svg/compas.svg"
function Nomer() {
  return (
    <Container>
      <div className=''>
                    <div className=' sm:hidden  flex font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right'>
                        <img src={oclock} alt="img" />
                        <p>Пн-Пт с 10:00 до 20:00<br />
                            Сб-Вс с 10:00 до 19:00</p>
                    </div>
                    <div className='flex font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right'>
                        <img src={compas} alt="img" />
                        <a>Наши салоны</a>
                    </div>
                </div>
    </Container>
  );
}

export default Nomer;
