import strelka from '../../assets/Abdurahman/svg/strelka.svg'
import down from '../../assets/Abdurahman/svg/down.svg'
import rass from '../../assets/Abdurahman/svg/rass.svg'

export default function BedMenu() {
    return(
        <>
        <div className=''>
            <div className='shadow-lg flex flex-col gap-5 w-[268px] h-[438px]' >
                <div className='flex items-center justify-between p-2'>
                    <p>Новинки</p>
                    <img src={strelka} alt="" />
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p>Гостиные</p>
                    <img src={strelka} alt="" />
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p>Прихожие</p>
                    <img src={strelka} alt="" />
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p>Спальни</p>
                    <img src={strelka} alt="" />
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p>Детские</p>
                    <img src={strelka} alt="" />
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p>Кровати</p>
                    <img src={strelka} alt="" />
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p>Матрасы</p>
                    <img src={strelka} alt="" />
                </div>
            </div>
            <button className='w-[268px] h-[51px] bg-[rgb(0, 69, 131)] flex items-center justify-center rounded-sm bg-blue-900 text-white mt-3'>
                <p>Скачать Каталог</p>
                <img src={down}/>
            </button>
            <div
                className="bg-cover bg-center relative h-[380px] w-[268px] mt-[37px]"
                style={{ backgroundImage: `url(${rass})` }}>
                    <div className='p-8 absolute'>
                        <p className='text-[46px] text-white'>Рассрочка</p>
                        <p className='text-[62px] text-white'>Без %</p>
                    </div>
                    <button className='w-[194px] h-[40px] bg-white rounded-sm my-80 mx-9'>Подронее</button>
            </div>
        </div>
        </>
    );
}