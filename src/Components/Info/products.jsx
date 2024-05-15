import { Container } from "../helpers/Container";
import api from "../../shared/API"
function products() {
    const Products = api.slice(0, 6);
    const firstTwoProducts = api.slice(0, 2);

    return (
        <Container>
            <div className="flex flex-col mt-[62px] ">
                <div className="text-blue-800 font-gilroy text-xs font-medium leading-normal -tracking-tighter text-left uppercase mb-4">
                    <h1>С ЭТИМ ТОВАРОМ МОЖНО КУПИТЬ</h1>
                </div>
                    <div className="flex gap-[10px] sm:gap-[15px]">
                        {Products.map((item, index) => (
                            <div key={index} className="border  hidden md:block  m-auto flex flex-col rounded-lg w-[123px] h-[260px] sm:w-[160px] sm:h-[291px] gap-[8px] ">
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
                    <div className="flex  gap-[10px]  sm:gap-[15px]">
                        {firstTwoProducts.map((item, index) => (
                            <div key={index} className="border block md:hidden   m-auto  flex-col rounded-lg w-[123px] h-[260px] sm:w-[160px] sm:h-[291px] gap-[8px] ">
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
    );
}

export default products;
