import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Bio from '../components/Bio';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/Bio/Data';
import Footer from '../components/Footer';



const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <div className="flex-row justify-center">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <Bio {...homeObjOne} />
                <Bio {...homeObjTwo} />
                <Bio {...homeObjThree} />
                <Bio {...homeObjFour} />
            </div>
            <Footer />
        </main>

    )
}

export default AboutUs;