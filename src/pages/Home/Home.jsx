import Baner from './Baner';
import Ebook from "./Ebook";
import OfferModal from '../../components/OfferModal';
import OfferCountdown from './OferCountdown';
import Categories from '../../components/Categories';

const Home = () => {
    return (
        <>
            <Ebook />
            <Baner />
            <OfferModal />
            <OfferCountdown />
            <Categories />
        </>
    );
};

export default Home;