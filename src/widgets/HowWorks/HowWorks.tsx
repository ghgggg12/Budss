import { Flex } from '@shared/ui/types/flex/Flex.tsx'
import Phone from '@shared/assets/images/phone.png';
import Orange from '@shared/assets/svg/texts/orange.svg';
import Purple from '@shared/assets/svg/texts/purple.svg';
import Blue from '@shared/assets/svg/texts/blue.svg';
import Invisible from '@shared/assets/svg/texts/invisible.svg'
import './HowWorks.css';

export const HowWorks = () => (
    <section className="HowWorksSection">
        <Flex className="HowWorksSection_Image" justifyContent="center">
            <img src={Phone} className="Image_Phone" />
        </Flex>

        <Flex className="HowWorksSection_Text" flexDirection="column" justifyContent="center">
            <Flex className="Text_row1 row">
                <div className="marquee marquee_row1">
                    <img src={Blue} alt="Text" className="Text" />
                    <img src={Invisible} alt="Text" className="Text" />
                    <img src={Blue} alt="Text" className="Text" aria-hidden="true" />
                    <img src={Invisible} alt="Text" className="Text" aria-hidden="true" />
                </div>
            </Flex>
            <Flex className="Text_row2 row">
                <div className="marquee marquee-reverse">
                    <img src={Invisible} alt="Text" className="Text" />
                    <img src={Purple} alt="Text" className="Text" />
                    <img src={Invisible} alt="Text" className="Text" aria-hidden="true" />
                    <img src={Purple} alt="Text" className="Text" aria-hidden="true" />
                </div>
            </Flex>
            <Flex className="Text_row3 row">
                <div className="marquee marquee_row3">
                    <img src={Orange} alt="Text" className="Text" />
                    <img src={Invisible} alt="Text" className="Text" />
                    <img src={Orange} alt="Text" className="Text" aria-hidden="true" />
                    <img src={Invisible} alt="Text" className="Text" aria-hidden="true" />
                </div>
            </Flex>
        </Flex>
    </section>
);