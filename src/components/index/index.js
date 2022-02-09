import Section from "./Section.js"
import Carousel from "./Carousel.js"
import Memory from "./Memory.js"
import Footer from "../footer/Footer"

const index = ({ auth }) => {
    return <>
        <Section />
        <Carousel auth={auth} />
        <Memory />
        <Footer />
    </>
}

export default index;