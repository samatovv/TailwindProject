// import Container from "postcss/lib/container";
import Menu from '../Menu/Menu'
import Carousel from "../Carousel/Carousel";
import Banner from "../Banner/Banner";
function Products() {
    return (
        <div>
            <Carousel />
            <Menu />
            <Banner />
        </div>
    );
}

export default Products;