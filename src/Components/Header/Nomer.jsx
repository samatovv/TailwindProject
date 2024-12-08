import { Container } from "../helpers/Container";
import phone from "../../assets/IMGS/svg/phone.svg"
function Nomer() {
    return (
        <Container>
            <div className='flex font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right gap-2'>
                <p className=''>Отдел продаж:</p>
                <img className='w-3 h-3 p' src={phone} alt="img" />
                <p>8 (495) 664-54-57<br />
                    8 (495) 664-54-57</p>
            </div>
            <div className='flex font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right gap-2'>
                <p>Звонки по Росии:</p>
                <img className='w-3 h-3 align-center justify-center ' src={phone} alt="img" />
                <p>8-800-000-00-00<br />
                    Бесплатно</p>
            </div>
        </Container>
    );
}

export default Nomer;
