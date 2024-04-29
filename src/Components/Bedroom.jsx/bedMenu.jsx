import strelka from '../../assets/Abdurahman/svg/strelka.svg'

export default function BedMenu() {
    return(
        <>
        <div className='shadow-lg flex flex-col gap-7 ' >
            <div className='flex items-center gap-10 '>
                <p>Новинки</p>
                <img src={strelka} alt="" />
            </div>
            <div className='flex items-center gap-9'>
                <p>Гостиные</p>
                <img src={strelka} alt="" />
            </div>
            <div className='flex items-center gap-7'>
                <p>Прихожие</p>
                <img src={strelka} alt="" />
            </div>
            <div className='flex items-center gap-10'>
                <p>Спальни</p>
                <img src={strelka} alt="" />
            </div>
            <div className='flex items-center gap-11'>
                <p>Детские</p>
                <img src={strelka} alt="" />
            </div>
            <div className='flex items-center gap-10'>
                <p>Кровати</p>
                <img src={strelka} alt="" />
            </div>
            <div className='flex items-center gap-9'>
                <p>Матрасы</p>
                <img src={strelka} alt="" />
            </div>
        </div>
        </>
    );
}