import { Flex } from '@shared/ui/types/flex/Flex.tsx';
import backgroundText from '@shared/assets/svg/backgroundText.svg';
import Mobile from '@shared/assets/svg/Mobile.svg';
import MobileAdapt from '@shared/assets/svg/MobileAdapt.svg';
import Basket1 from '@shared/assets/svg/Basket1.svg';
import Basket2 from '@shared/assets/svg/Basket2.svg';
import Basket3 from '@shared/assets/svg/Basket3.svg';
import BlueMan from '@shared/assets/svg/BlueMan.svg';
import PurpleMan from '@shared/assets/svg/PurpleMan.svg';
import './WhyBudss.css';

export const WhyBudss = () => (
    <section className="WhyBudssSection">
        <Flex className='WhyBudssSection_Header' justifyContent='center'>Why Budss</Flex>
        <div className='WhyBudssSection_About'>
            We Provide Advanced Payment Solutions<br/>
            &nbsp;To Grow Your Business
        </div>
        <Flex className='WhyBudssSection_backgroundText' justifyContent='center'><img src={backgroundText} alt='background'/></Flex>

        <Flex className='WhyBudssSection_Containers' flexDirection='column' alignItems='center'>
            <div className='Containers_Row1'>
                <div className='Row1_Container1'>
                    <div className='Container1_Header'>
                        Turn your&nbsp;<br/>
                        customers into<br/>
                        loyal influencers
                    </div>

                    <div className='Container1_About'>
                        Budss helps businesses harness the<br/>&nbsp;
                        exponential power of loyal customers&nbsp;<br/>
                        for acquisition and retention.
                    </div>

                    <div className='Container1_Img'>
                        <img src={Mobile} alt='Mobile'/>
                    </div>
                    <div className='Container1_ImgAdapt'>
                        <img src={MobileAdapt} alt='Mobile'/>
                    </div>
                </div>

                <div className='Row1_Container2'>
                    <div className='Container2_Header'>
                        Harness the power<br/>&nbsp;
                        of buying in bulk
                    </div>

                    <div className='Container2_About'>
                        Get at least 2X more sales with Budss Buying<br/>&nbsp;
                        Groups. Your customer base will grow<br/>&nbsp;
                        exponentially as your customers add their<br/>&nbsp;
                        friends & family to your personalized group.
                    </div>
                    <Flex className='Container2_Imgs'>
                        <img className='Container2_Basket1' src={Basket1} alt='basket'/>
                        <img className='Container2_Basket2' src={Basket2} alt='basket'/>
                        <img className='Container2_Basket3' src={Basket3} alt='basket'/>
                    </Flex>
                </div>
            </div>

            <div className='Containers_Row2'>
                <div className='Row2_Container3'>
                    <div className='Container3_Header'>
                        Supercharge<br/>&nbsp;
                        Loyalty With Instant<br/>&nbsp;
                        Cash Back
                    </div>
                    <div className='Container3_About'>
                        Budss allows for shoppers to earn<br/>&nbsp;
                        immediate cash back at their&nbsp;<br/>
                        favorite stores.
                    </div>
                    <div className='Container3_Img'>
                        <img src={BlueMan} alt='Man'/>
                    </div>
                </div>

                <div className='Row2_Container4'>
                    <div className='Container4_Header'>
                        Seasoned with AI<br/>&nbsp;
                        and Gamification
                    </div>
                    <div className='Container4_About'>
                        AI programming creates a personalized&nbsp;<br/>
                        customer journey, offering recommendations<br/>&nbsp;
                        for their next purchase and optimizing<br/>&nbsp;
                        rewards for after purchase.
                    </div>
                    <div className='Container4_Img'>
                        <img src={PurpleMan} alt='Man'/>
                    </div>
                </div>
            </div>
        </Flex>
    </section>
);