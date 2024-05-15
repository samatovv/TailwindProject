import { Container } from "../helpers/Container";
import Breadcrump from "./Breadcrump"
import img from "../../assets/IMGS/svg/infoImg.svg"
import banner from "../../assets/IMGS/svg/infoBanner.svg"
import img1 from "../../assets/IMGS/svg/Rectangle1.svg"
import img2 from "../../assets/IMGS/svg/Rectangle2.svg"
import img3 from "../../assets/IMGS/svg/Rectangle3.svg"
import img4 from "../../assets/IMGS/svg/Rectangle4.svg"
import img5 from "../../assets/IMGS/svg/Rectangle5.svg"
import img6 from "../../assets/IMGS/svg/Rectangle6.svg"
import img7 from "../../assets/IMGS/svg/Rectangle7.svg"
import img8 from "../../assets/IMGS/svg/Rectangle8.svg"
function info() {
    return (
        <Container>
            <div className="flex flex-wrap mb-[60px]">
                <div className="w-screen md:w-100% lg:w-1/3    ">
                    <img className="w-full h-auto lg:h-[468px] m-auto" src={banner} alt="img" />
                </div>
                <div className="ml-[29px] mr-[66px] flex flex-grow flex-col justify-between lg:w-[400px] md:w-[600px]">
                    <div className="flex flex-col gap-[35px]">
                        <div className="">
                            <Breadcrump />
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <h1 className="text-left uppercase font-bold text-[18px] leading-[127.47%] tracking-[-0.5px] text-[rgb(7,24,40)]">
                                название модели
                            </h1>
                            <p className="text-left text-[#004583] font-inter text-[12px] font-normal leading-[140%] tracking-[0.5px]">
                                Артикул: 34235234523
                            </p>
                        </div>

                        <div className=" flex flex-col gap-[41px]">
                            <div className="flex flex-wrap flex-col gap-[10px]">
                                <div className=" flex gap-[132px] text-[#004583] font-medium">
                                    <h1 className="text-left uppercase text-[14px]  leading-[127.47%] tracking-[-0.5px]  font-gilroy">Размеры</h1>
                                    <h1 className="text-left uppercase text-[14px]  leading-[127.47%] tracking-[-0.5px] font-gilroy">Вес</h1>
                                </div>
                                <div className="flex  gap-[60px]">
                                    <h1 className="text-left text-[rgb(7,24,40)] font-inter text-[16px] font-normal leading-[127.47%] tracking-[-0.5px]">В 2264  Ш 540  Г 352</h1>
                                    <h1 className="text-left text-[rgb(7,24,40)] font-inter text-[16px] font-normal leading-[127.47%] tracking-[-0.5px]">234234кг</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[16px] items-center">
                            <h1 className="text-left sm:block hidden  uppercase text-[14px] font-medium leading-[127.47%] tracking-[-0.5px] text-[#004583] font-gilroy">цвет</h1>
                            <div className="flex  flex-wrap lg:gap-[8px] md:gap-[6px] sm:gap-[4px] gap-[2px]">
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img1} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img2} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img3} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img4} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img5} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img6} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img7} alt="img" />
                                <img className="w-[26px] h-[26px] lg:w-[33px] lg:h-[33px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]" src={img8} alt="img" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="border w-[373px]  h-[1px] lg:block md:block hidden"></div>
                            <div className="flex flex-wrap  items-center gap-[15px]">
                                <div className="flex items-center gap-[3px]">
                                    <h1 className="text-left uppercase font-bold text-[18px] leading-[127.47%] tracking-[-0.5px] text-[rgb(7,24,40)] font-gilroy">Цена:</h1>
                                    <h1 className="text-right uppercase text-[40px] font-medium leading-[127.47%] tracking-[-0.5px] text-[#000000] font-gilroy">62 284 ₽   </h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center gap-[10px] border border-black  w-[127px] h-[67px] rounded-lg">
                                        <p>-</p>
                                        <div className="border h-[29px]  rounded-full"></div>
                                        <p>1</p>
                                        <div className="border h-[29px] rounded-full"></div>
                                        <p>+</p>
                                    </div>
                                    <div className="md:hidden">
                                        <button className="rounded-lg bg-blue-700 text-white w-[147px] sm:w-[199px] h-[67px] text-4xl font-semibold leading-snug tracking-tighter">Купить</button>
                                    </div>
                                </div>
                            </div>
                            <div className="border w-[373px] h-[1px]  rounded-full lg:block md:block hidden"></div>
                        </div>
                    </div>
                    <div className="hidden md:inline mt-[15px]">
                        <button className="rounded-lg bg-blue-700 text-white w-[199px] h-[67px] text-4xl font-semibold leading-snug tracking-tighter">Купить</button>
                    </div>
                </div>
                <div className="flex flex-col md-w-[300px] pt-[79px] w-full justify-center items-center lg:w-[268px] h-[419px]" style={{ backgroundImage: `url(${img})` }}>
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl text-white">РАСCРОЧКА</h1>
                        <h1 className="text-8xl text-white ">БЕЗ %</h1>
                    </div>
                    <button className="w-[194px] h-[40px] flex items-center justify-center text-left font-semibold text-[14px] leading-[127.47%] tracking-[-0.5px] text-[#004583] font-inter bg-white rounded-sm mt-[157px]">Подробное</button>
                </div>
            </div>
        </Container>
    );
}
export default info;