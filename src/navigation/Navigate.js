import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from '../pages/home/Home'
import Contact from '../pages/contactus/Contact'

import Datastudio from '../pages/products/datastudio/Datastudio'
import Selfserve from '../pages/products/selfserve/Selfserve'
import Groundcontrol from '../pages/products/groundcontrol/Groundcontrol'
import Edgecase from '../pages/products/edge/Edgecase'
import People from '../pages/products/people/People'

import Solution from '../pages/solutions/solution/Solution'
import Computer from '../pages/solutions/computer/Computer'
import Natural from '../pages/solutions/natural/Natural'
import Content from '../pages/solutions/content/Content'

import Image from '../pages/services/image/Image'
import Video from '../pages/services/video/Video'
import Text from '../pages/services/text/Text'
import Audio from '../pages/services/audio/Audio'
import Data from '../pages/services/data/Data'
import Lidar from '../pages/services/lidar/Lidar'
import Sentiment from '../pages/services/sentiment/Sentiment'
import Contentmoderation from '../pages/services/contentmoderation/Contentmoderation'
import Product from '../pages/services/product/Product'
import Imagesegmentation from '../pages/services/imagesegmentation/Imagesegmentation'

import Industries from '../pages/industries/industries/Industries'
import Autonomous from '../pages/industries/autonomous/Autonomous'
import Geospatial from '../pages/industries/geospatial/Geospatial'
import Medical from '../pages/industries/medical/Medical'
import Financial from '../pages/industries/financial/Financial'
import Commerce from '../pages/industries/commerce/Commerce'
import Government from '../pages/industries/government/Government'
import Agricultural from '../pages/industries/agricultural/Agricultural'

import Contentlibrary from '../pages/resources/contentlibrary/Contentlibrary'
import Mldataops from '../pages/resources/mldataops/Mldataops'
import Women from '../pages/resources/women/Women'
import News from '../pages/resources/news/News'
import Use from '../pages/resources/use/Use'
import Case from '../pages/resources/case/Case'
import Blog from '../pages/resources/blog/Blog'
import Partners from '../pages/resources/partners/Partners'
import Working from '../pages/resources/working/Working'


export default function Navigate() {
    return (
        <Router>
            <div>
                <div><Header/></div>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>

                    <Route path="/datastudio" element={<Datastudio />}></Route>
                    <Route path="/selfserve" element={<Selfserve />}></Route>
                    <Route path="/groundcontrol" element={<Groundcontrol />}></Route>
                    <Route path="/edge" element={<Edgecase />}></Route>
                    <Route path="/people" element={<People />}></Route>

                    <Route path="/solution" element={<Solution />}></Route>
                    <Route path="/computer" element={<Computer />}></Route>
                    <Route path="/natural" element={<Natural />}></Route>
                    <Route path="/content" element={<Content />}></Route>

                    <Route path="/image" element={<Image />}></Route>
                    <Route path="/video" element={<Video />}></Route>
                    <Route path="/text" element={<Text />}></Route>
                    <Route path="/audio" element={<Audio />}></Route>
                    <Route path="/data" element={<Data />}></Route>
                    <Route path="/lidar" element={<Lidar />}></Route>
                    <Route path="/sentiment" element={<Sentiment />}></Route>
                    <Route path="/content-moderation" element={<Contentmoderation />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/image-segmentation" element={<Imagesegmentation />}></Route>

                    <Route path="/industries" element={<Industries />}></Route>
                    <Route path="/autonomous" element={<Autonomous />}></Route>
                    <Route path="/geospatial" element={<Geospatial />}></Route>
                    <Route path="/medical" element={<Medical />}></Route>
                    <Route path="/financial" element={<Financial />}></Route>
                    <Route path="/commerce" element={<Commerce />}></Route>
                    <Route path="/government" element={<Government />}></Route>
                    <Route path="/agricultural" element={<Agricultural />}></Route>

                    <Route path="/content-library" element={<Contentlibrary />}></Route>
                    <Route path="/mldataops" element={<Mldataops />}></Route>
                    <Route path="/women" element={<Women />}></Route>
                    <Route path="/news" element={<News />}></Route>
                    <Route path="/use" element={<Use />}></Route>
                    <Route path="/case" element={<Case />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/partners" element={<Partners />}></Route>
                    <Route path="/working" element={<Working />}></Route>

                </Routes>
                <div><Footer/></div>
            </div>
        </Router>

    );
}