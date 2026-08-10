import { Flex } from '../../../shared/ui/types/flex/Flex.tsx';
import backgroundText from '../../../shared/assets/svg/backgroundText.svg';
import Mobile from '../../../shared/assets/svg/Mobile.svg';
import Basket1 from '../../../shared/assets/svg/Basket1.svg';
import Basket2 from '../../../shared/assets/svg/Basket2.svg';
import Basket3 from '../../../shared/assets/svg/Basket3.svg';
import BlueMan from '../../../shared/assets/svg/BlueMan.svg';
import PurpleMan from '../../../shared/assets/svg/PurpleMan.svg';
import './WhyBudss.css';

export const WhyBudss = () => (
    <section className="WhyBudssSection">
        <Flex className='WhyBudssSection_Header' justifyContent='Center'>Why Budss</Flex>
        <Flex className='WhyBudssSection_About' height='100px' justifyContent='Center'>We Provide Advanced Payment Solutions<br/>To Grow Your Business</Flex>
        <Flex className='WhyBudssSection_backgroundText' justifyContent='center'><img src={backgroundText} alt='background'/></Flex>

        <Flex className='WhyBudssSection_Containers' flexDirection='column' alignItems='center'>
            <Flex className='Containers_Row1' justifyContent='center' flexDirection='row'>
                <Flex className='Row1_Container1' flexDirection='column'>
                    <Flex className='Container1_Img' justifyContent='flex-start'>
                        <img src={Mobile} alt='Mobile'/>
                    </Flex>

                    <Flex className='Container1_Header' justifyContent='flex-end'>
                        Turn your<br/>
                        customers into<br/>
                        loyal influencers
                    </Flex>

                    <Flex className='Container1_About' justifyContent='flex-end'>
                        Budss helps businesses harness the<br/>
                        exponential power of loyal customers<br/>
                        for acquisition and retention.
                    </Flex>
                </Flex>

                <Flex className='Row1_Container2' flexDirection='column'>
                    <Flex className='Container2_Header' justifyContent='flex-start'>
                        Harness the power<br/>
                        of buying in bulk
                    </Flex>

                    <Flex className='Container2_About' justifyContent='flex-start'>
                        Get at least 2X more sales with Budss Buying<br/>
                        Groups. Your customer base will grow<br/>
                        exponentially as your customers add their<br/>
                        friends & family to your personalized group.
                    </Flex>
                    <Flex className='Container2_Imgs'>
                        <img className='Container2_Basket1' src={Basket1} alt='basket'/>
                        <img className='Container2_Basket2' src={Basket2} alt='basket'/>
                        <img className='Container2_Basket3' src={Basket3} alt='basket'/>
                    </Flex>
                </Flex>
            </Flex>

            <Flex className='Containers_Row2' justifyContent='center' flexDirection='row' flexGrow="1">
                <Flex className='Row2_Container3' flexDirection='column'>
                    <Flex className='Container3_Header'>
                        Supercharge<br/>
                        Loyalty With Instant<br/>
                        Cash Back
                    </Flex>
                    <Flex className='Container3_About'>
                        Budss allows for shoppers to earn<br/>
                        immediate cash back at their<br/>
                        favorite stores.
                    </Flex>
                    <Flex className='Container3_Img'>
                        <img src={BlueMan} alt='Man'/>
                    </Flex>
                </Flex>

                <Flex className='Row2_Container4' flexDirection='column'>
                    <Flex className='Container4_Header'>
                        Seasoned with AI<br/>
                        and Gamification
                    </Flex>
                    <Flex className='Container4_About'>
                        AI programming creates a personalized<br/>
                        customer journey, offering recommendations<br/>
                        for their next purchase and optimizing<br/>
                        rewards for after purchase.
                    </Flex>
                    <Flex className='Container4_Img' justifyContent='flex-end'>
                        <img src={PurpleMan} alt='Man'/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </section>
);