import product1 from "../../assets/IMGS/png/product1.png"
import product2 from "../../assets/IMGS/png/product2.png"
import product3 from "../../assets/IMGS/png/product3.png"
import product4 from "../../assets/IMGS/png/product4.png"
import product5 from "../../assets/IMGS/png/product5.png"
import go from "../../assets/IMGS/svg/goto.svg"
import { Container } from "../helpers/Container"

function Menu() {
    return (
        <>
            <Container>
                <div className='lg:flex lg:flex-wrap'>
                    <div className='flex flex-col items-center sm:flex-row sm:justify-center'>
                        <img className='w-[300px] ' src={product1} alt="img" />
                        <div className='ml-5 mr-5 flex items-center flex-col '>
                            <h1 className='text-custom font-gilroy text-24 font-bold leading-custom tracking-tighter text-left uppercase'>Гостиные</h1><br />
                            <p className="text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left">Мини текст описания и преимущества<br />
                                покупки данного направления.</p>
                            <a className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left text-blue-800'>Товары под заказ в наличии: 2030шт</a><br />
                            <span className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left '>Цены от: 42.000р</span><br />
                            <div className='flex items-center justify-center rounded-full  sm:w-2 lg:w-9 lg:h-9 p-1 border border-blue-700'>
                                <img className='lg:w-3 lg:h-3 ' src={go} alt="img" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center sm:flex-row sm:justify-center'>
                        <img className='w-[300px] ' src={product2} alt="img" />
                        <div className='ml-5 mr-5 flex items-center flex-col '>
                            <h1 className='text-custom font-gilroy text-24 font-bold leading-custom tracking-tighter text-left uppercase'>Гостиные</h1><br />
                            <p className="text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left">Мини текст описания и преимущества<br />
                                покупки данного направления.</p>
                            <a className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left text-blue-800'>Товары под заказ в наличии: 2030шт</a><br />
                            <span className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left '>Цены от: 42.000р</span><br />
                            <div className='flex items-center justify-center rounded-full  sm:w-2 lg:w-9 lg:h-9 p-1 border border-blue-700'>
                                <img className='lg:w-3 lg:h-3 ' src={go} alt="img" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center sm:flex-row sm:justify-center'>
                        <div className='ml-5 mr-5 flex items-center flex-col '>
                            <h1 className='text-custom font-gilroy text-24 font-bold leading-custom tracking-tighter text-left uppercase'>Гостиные</h1><br />
                            <p className="text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left">Мини текст описания и преимущества<br />
                                покупки данного направления.</p>
                            <a className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left text-blue-800'>Товары под заказ в наличии: 2030шт</a><br />
                            <span className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left '>Цены от: 42.000р</span><br />
                            <div className='flex items-center justify-center rounded-full  sm:w-2 lg:w-9 lg:h-9 p-1 border border-blue-700'>
                                <img className='lg:w-3 lg:h-3 ' src={go} alt="img" />
                            </div>
                        </div>
                        <img className='w-[300px] ' src={product3} alt="img" />

                    </div>

                    <div className='flex flex-col items-center sm:flex-row sm:justify-center'>
                        <div className='ml-5 mr-5 flex items-center flex-col '>
                            <h1 className='text-custom font-gilroy text-24 font-bold leading-custom tracking-tighter text-left uppercase'>Гостиные</h1><br />
                            <p className="text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left">Мини текст описания и преимущества<br />
                                покупки данного направления.</p>
                            <a className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left text-blue-800'>Товары под заказ в наличии: 2030шт</a><br />
                            <span className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left '>Цены от: 42.000р</span><br />
                            <div className='flex items-center justify-center rounded-full  sm:w-2 lg:w-9 lg:h-9 p-1 border border-blue-700'>
                                <img className='lg:w-3 lg:h-3 ' src={go} alt="img" />
                            </div>
                        </div>
                        <img className='w-[300px] ' src={product4} alt="img" />

                    </div>

                    <div className='flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-4'>
                        <img className='lg:w-[900px] lg:h-[321px] md:w-[280px] md:h-[277px] sm:w-[160px] sm:h-[157px] xs:w-[150px] xs:h-[147px]' src={product5} alt="img" />
                        <div className='lg:w-[360px] lg:h-[321px] md:w-[280px] md:h-[277px] sm:w-[160px] sm:h-[157px] xs:w-[150px] xs:h-[147px]  flex justify-center flex-col gap-2 p-2 mt-10'>
                            <h1 className='text-custom font-gilroy text-24 font-bold leading-custom tracking-tighter text-left uppercase'>Гостиные</h1><br />
                            <p className="text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left">Мини текст описания и преимущества<br />
                                покупки данного направления.</p>
                            <a className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left text-blue-800'>Товары под заказ в наличии: 2030шт</a><br />
                            <span className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left '>Цены от: 42.000р</span><br />
                            <div className='flex items-center justify-center rounded-full lg:w-9 lg:h-9 p-1 border border-blue-700'>
                                <img className='w-3 h-3' src={go} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Menu;
