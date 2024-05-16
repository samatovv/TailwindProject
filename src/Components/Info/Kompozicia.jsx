import { Container } from "../helpers/Container";
import api from "../../shared/API"

function Kompozicia() {

    return (
        <Container >
            <div>
                <h1 className="text-blue-800 ml-[20px] font-gilroy text-xs font-medium leading-normal -tracking-tighter text-left uppercase">
                    СОСТАВ КОМПОЗИЦИИ
                </h1>
                <div className="flex flex-wrap  gap-[10px]  sm:gap-[15px]">
                    {api.map((item, index) => (
                        <div key={index} className="border  m-auto flex flex-col rounded-lg w-[123px] h-[260px] sm:w-[160px] sm:h-[291px] gap-[8px] shadow-[0_10px_52px_-8px_rgba(0,0,0,0.27)]  ">
                            <img className="w-[164px] h-[164px]" src={item.img} alt="img" />
                            <h1 className="text-center text-[16px] text-blue-800 font-normal leading-[127.47%] tracking-[-0.5px] text-custom-blue font-inter">
                                {item.name}
                            </h1>
                            <div className="flex items-center justify-center gap-2 text-center text-[10px] font-light leading-[127.47%] tracking-[-0.5px] text-custom-dark-blue font-inter">
                                <p>в {item.height}</p>
                                <p>ш {item.width}</p>
                                <p>г {item.depth}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-gray-400">Цвет Дуб</p>
                                <div className="flex gap-[1px]">
                                    {
                                        item.imgs.map((image, imgIndex) => (
                                            <img className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]" key={imgIndex} src={image} alt="img" />
                                        ))}
                                </div>
                            </div>
                            <div className="text-center text-[18px] font-bold leading-[127.47%] tracking-[-0.5px] text-custom-dark-blue font-gilroy uppercase">
                                <p>{item.price}$</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>

    )
}
export default Kompozicia;