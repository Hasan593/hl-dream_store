import { Carousel } from "flowbite-react";
import Cleaner from '../../assets/Carousel Images/Cleaner.png'
import coffe from '../../assets/Carousel Images/Coffe.png'
import dress from '../../assets/Carousel Images/Dress.png'
import egg from '../../assets/Carousel Images/Egg.png'
import meet from '../../assets/Carousel Images/Meet.png'
import mevea from '../../assets/Carousel Images/nevea.png'
import radhuni from '../../assets/Carousel Images/Radhuni.png'
import shoe from '../../assets/Carousel Images/Shoe.png'
import watch from '../../assets/Carousel Images/Watch and bag.png'

const Baner = () => {
    return (
        <div className="h-[120px] md:h-[400px] xl:h-80 2xl:h-96 mt-16">
            <Carousel>
                <img src={Cleaner} alt="..." />
                <img src={coffe} alt="..." />
                <img src={dress} alt="..." />
                <img src={egg} alt="..." />
                <img src={meet} alt="..." />
                <img src={mevea} alt="..." />
                <img src={radhuni} alt="..." />
                <img src={shoe} alt="..." />
                <img src={watch} alt="..." />
            </Carousel>
        </div>
    );
};

export default Baner;
