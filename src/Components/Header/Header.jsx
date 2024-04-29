
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/IMGS/png/Logo.png"
import oclock from "../../assets/IMGS/svg/oclock.svg"
import compas from "../../assets/IMGS/svg/compas.svg"
import phone from "../../assets/IMGS/svg/phone.svg"
import input from "../../assets/IMGS/svg/input.svg"
import x from "../../assets/IMGS/svg/x.svg"
import { Container } from '../helpers/Container';
function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Container>
            <div className='mx-auto w-1440px h-152px'>
            <div className='flex  items-center justify-around'>
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

                <div className=' w-185 h-92px'>
                    <Link to="/">
                        <img src={Logo} alt="img" />
                    </Link>
                </div>
                <div className=' xl:block sm: hidden md:block'>
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
                </div>

                <div className='space-y-1 md:hidden cursor-pointer  '>
                    <div className='items-start max-w-screen-lg px-4 '>
                        <div className='flex items-start justify-between'>
                            <div className='flex items-center space-x-4'>
                                <div className='md:hidden cursor-pointer' onClick={openModal}>
                                    <img className='w-[28px] h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        {isModalOpen && (
                            <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
                                <div className='bg-white rounded-lg p-6 w-80 h-96'>
                                    <div className='flex space-between items-center '>
                                        <div className='flex'>
                                            <img className='w-[12px]  h-[12px] mr-[5px]' src={compas} alt="img" />
                                            <a className='text-blue-700 font-inter text-xs font-normal leading-[127.47%] tracking-tighter tracking-tighter underline'>Наши салоны</a>
                                        </div>
                                        <div className=' w-[93px] h-[46px]'>
                                            <img src={Logo} alt="img" />
                                        </div>
                                        <img className=" top-0 right-0 cursor-pointer w-6 h-6 p-1 " src={x} onClick={closeModal} />
                                    </div>

                                    <div className=''>
                                        <div className='flex items-center justify-center mt-[29px] mx-auto font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right'>
                                            <img src={oclock} alt="img" />
                                            <p>Пн-Пт с 10:00 до 20:00<br />
                                                Сб-Вс с 10:00 до 19:00</p>
                                        </div>
                                        <div className='flex items-center justify-center mt-[18px] font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right'>
                                            <img src={compas} alt="img" />
                                            <a>Наши салоны</a>
                                        </div>
                                        <div className='border-solid w-[324px] bg-red-300'></div>
                                    </div>
                                    <div className=' xl:block sm: hidden md:block'>
                                        <div className=' font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right gap-2'>
                                            <p className=''>Отдел продаж:</p>
                                            <img className='w-3 h-3 p' src={phone} alt="img" />
                                            <p>8 (495) 664-54-57<br />
                                                8 (495) 664-54-57</p>
                                        </div>
                                        <div className=' font-inter text-base font-normal leading-[127.47%] tracking-tighter text-right gap-2'>
                                            <p>Звонки по Росии:</p>
                                            <img className='w-3 h-3 align-center justify-center ' src={phone} alt="img" />
                                            <p>8-800-000-00-00<br />
                                                Бесплатно</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className=' w-1440px border border-solid border-gray-300 mt-5 mb-5'></div>
            <div className='hidden mb-6 md:flex items-center justify-around font-inter text-base font-bold leading-[127.47%] tracking-tighter text-left  list-none'>
                {/* <li className='hover:text-gray-500'> */}
                    <div>
                        <form className="w-[160px] h-[49px] mx-auto">
                            <select id="countries" className="sm:hidden text-black">
                                <option value="liu">Каталог</option>
                                <option value="liu">Новинки</option>
                                <option value="US">Гостинные</option>
                                <option value="CA">Прихожие</option>
                                <option value="FR">Спальни</option>
                            </select>
                        </form>
                    </div>
                {/* </li> */}
                <li className='hover:text-gray-500'>
                    <Link to="onas">О нас</Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link to="model">3D-моделирование</Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link to="pokupatel">Покупателю</Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link to="dostavka">Доставка и оплата</Link>
                </li>
                <div className='flex border-box border border-solid border-blue-700 rounded-full w-330 h-35 pl-2'>
                    <input type="text" placeholder="Поиск по сайту..." />
                    <img src={input} alt="img" />
                </div>
            </div>
            <div className='flex md:hidden cursor-pointer w-[100%] justify-between mt-[100px]'>
                <div>
                    <form className="w-[160px] h-[49px] mx-auto">
                        <select id="countries" className="text-sm block p-2.5 w-full h-full dark:bg-red-700 dark:placeholder-red-400 dark:text-white">
                            <option value="liu">Каталог</option>
                            <option value="liu">Новинки</option>
                            <option value="US">Гостинные</option>
                            <option value="CA">Прихожие</option>
                            <option value="FR">Спальни</option>
                        </select>
                    </form>
                </div>
                <div className='flex items-center  justify-evanly border border-solid border-blue-700 background-blue w-[160px] h-[49px]  '>
                    <input className='text-white font-inter text-xs font-normal leading-[127.47%] tracking-tighter tracking-tighter text-left' type="text" placeholder="Поиск по сайту..." />
                    <img className="bg-white w-13[px] h-[13px]" src={input} alt="img" />
                </div>
            </div>
        </div >
            </Container>
        </>
    
    );
}
export default Header;