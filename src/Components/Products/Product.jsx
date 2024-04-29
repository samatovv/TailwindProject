// import Container from "postcss/lib/container";
import Menu from '../Menu/Menu'
import Carousel from "../Carousel/Carousel";
import Banner from "../Banner/Banner";
import Product from "../Menu/products"
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