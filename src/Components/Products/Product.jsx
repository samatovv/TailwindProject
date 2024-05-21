// import Container from "postcss/lib/container";
import Menu from '../Menu/Menu'
import Carousel from "../Carousel/Carousel";
import Banner from "../Banner/Banner";
import Product from "../Menu/products"
// import Slide from '../Carousel/Slide';
import Slide2 from '../Carousel/Slide2';
function Products() {
    return (
        <div>
            <Carousel />
            <Menu />
            <Banner />
            <Product/>
        </div>
    );
}
export default Products;