import product1 from '../../assets/IMGS/png/product1.png'
import go from '../../assets/IMGS/svg/goto.svg'
export default function BedProduct1() {
    return(
        <>
            <div className='flex flex-col items-center sm:flex-row sm:justify-center'>
                <div className='ml-3 flex items-center flex-col gap-2'>
                    <h1 className='text-custom font-gilroy text-24 font-bold leading-custom tracking-tighter text-left uppercase'>Гостиные</h1><br />
                    <p className="text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left">Мини текст описания и преимущества<br />
                        покупки данного направления.</p>
                    <a className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left text-blue-800'>Товары под заказ в наличии: 2030шт</a><br />
                    <span className='text-custom font-inter text-16 font-normal leading-custom tracking-tighter text-left '>Цены от: 42.000р</span><br />
                    <div className='flex items-center justify-center rounded-full  sm:w-2 lg:w-9 lg:h-9 p-1 border border-blue-700'>
                        <img className='lg:w-3 lg:h-3 ' src={go} alt="img" />
                    </div>
                </div>
                <img className='w-[456px] h-[270px] ' src={product1} alt="img" />
            </div>
        </>
    )
}