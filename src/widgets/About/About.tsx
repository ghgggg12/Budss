import { Flex } from '@shared/ui/types/flex/Flex.tsx'
import background from '@shared/assets/svg/other/backgroundText.svg';
import BudssLogo from '@shared/assets/svg/logos/logo.svg';
import Star from '@shared/assets/svg/icons/star.svg'
import Wave from '@shared/assets/svg/icons/wave.svg'
import Arrow from '@shared/assets/svg/icons/arrow.svg'
import Chain from '@shared/assets/svg/icons/chain.svg'
import './About.css';

export const AboutSection = () => (
    <section className='AboutSection'>
        <div className='AboutSection_Text'>
            <Flex className='AboutSection_Header' alignItems='flex-start'>
                About Budss
            </Flex>
            <div className='AboutSection_About'>
                <div className='AboutSection_Info'>
                Payment as a service, powered seamlessly by our network of shoppers
                </div>
                <Flex alignItems='flex-end'>
                    <img src={background} className='AboutSection_Background' />
                </Flex>
            </div>
        </div>
        <div className='AboutSection_Texts'>
            <div className='Texts_Contactless'>
                <img src={Star} className='Contactless_Image' />
                <div className='Contactless_Main main'>Contactless</div>
                <div className='Contactless_Other other'>
                    Budss uses near field&nbsp;<br/>
                    communication (NFC) for&nbsp;<br/>
                    making contactless payments.
                </div>
            </div>
            <div className='Texts_Increased'>
                <img src={Arrow} className='Increased_Image' />
                <div className='Increased_Main main'>Increased&nbsp;<br/>Buying Power</div>
                <div className='Increased_Other other'>
                    Returning customers spend&nbsp;<br/>
                    up to 3X more.
                </div>
            </div>
            <div className='Texts_Analytics'>
                <img src={Wave} className='Analytics_Image' />
                <div className='Analytics_Main main'>Analytics&nbsp;<br/>&amp; Insights</div>
                <div className='Analytics_Other other'>
                    Gain a holistic view into your&nbsp;<br/>
                    customers’ buying behavior&nbsp;<br/>
                    & purchasing patterns. 
                </div>
            </div>
            <div className='Texts_Fraud'>
                <img src={Chain} className='Fraud_Image' />
                <div className='Fraud_Main main'>Fraud&nbsp;<br/>Protection</div>
                <div className='Fraud_Other other'>
                    Budss handles all payments&nbsp;<br/>
                    with a fraud prevention<br/>
                    &nbsp;algorithm to flag high risk&nbsp;<br/>
                    purchases & a user set PIN code&nbsp;<br/>
                    to keep payment info secure.
                </div>
            </div>
        </div>
        <div className='AboutSection_Logo'>
            <img src={BudssLogo} alt="Budss logo" />
        </div>
    </section>
);