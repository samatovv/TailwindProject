

import Footer1 from "../../assets/IMGS/svg/footer_img.svg"
import Footer2 from "../../assets/IMGS/svg/footer_img2.svg"
import { Container } from "../helpers/Container";
function Footer() {
  return (
    <Container>
      <footer className="bg-white bg-gray-250">
        <div className='  border border-solid border-gray-300 mt-5 mb-5'></div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase custom-dark': 'rgb(7, 24, 40)">О компании</h2>
                <ul className="text-gray-500 dark:text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline bg-customGray">Производство</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline bg-customGray">Награды</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Сертификаты </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase custom-dark': 'rgb(7, 24, 40)">Покупателю</h2>
                <ul className="text-gray-500 dark:text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Как сделать заказ</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Рекомендации по сборке</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Договор публичной оферты</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase custom-dark': 'rgb(7, 24, 40)">Полезная информация</h2>
                <ul className="text-gray-500 dark:text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">Всё о фасадах</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Всё о фурнитуре</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Всё о ЛДСП </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase custom-dark': 'rgb(7, 24, 40)">3D-моделирование</h2>
                <ul className="text-gray-500 dark:text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Запустить онлайн,
                      от 2 Мбит/с</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Скачать на компьютер,
                      606 Мб</a>
                  </li>
                </ul>
              </div>
              <div className=' flex flex-col gap-2 items-center text-blue-700 font-inter font-bold text-xl leading-loose tracking-wider text-center'>
                <div className='bg-customBlue'>Рассрочка</div>
                <div className='w-[212px] border border-solid border-1 border-rgb-231-230-230'></div>
                <div>Гарантия </div>
                <div className='w-[212px] border border-solid border-1 border-rgb-231-230-230'></div>
                <div>Контакты</div>
              </div>
              <div className='flex flex-wrap items-center justify-between'>
                <img src={Footer1} alt="img" className="object-cover h-auto w-full md:w-auto" />
                <img src={Footer2} alt="img" className="object-cover h-auto w-full md:w-auto" />
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Все права защищены. Любое копирование и использование материалов сайта разрешено только с письменного согласия правообладателя. Не является публичной офертой.
            </span>
          </div>
        </div>
      </footer>
    </Container>
  );
}
export default Footer;
