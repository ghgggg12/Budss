import { Flex } from '../../../shared/ui/types/flex/Flex.tsx'
import background from '../../../shared/assets/svg/backgroundText.svg';
import BudssLogo from '../../../shared/assets/svg/logo.svg';
import Star from '../../../shared/assets/svg/star.svg'
import Wave from '../../../shared/assets/svg/wave.svg'
import Arrow from '../../../shared/assets/svg/arrow.svg'
import Chain from '../../../shared/assets/svg/chain.svg'
import './About.css';

export const AboutSection = () => (
    <section className='AboutSection'>
        <Flex className='AboutSection_Text' justifyContent="center" flexDirection="column" width="550px" height="auto">
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
        </Flex>
        <Flex className='AboutSection_Icons' alignItems='flex-start' flexDirection='row' flexWrap='wrap' justifyContent='flex-start' width="500px" height="420px">
            <img src={Star} className='AboutSection_Star' />
            <img src={Arrow} className='AboutSection_Arrow' />
            <img src={Wave} className='AboutSection_Wave' />
            <img src={Chain} className='AboutSection_Chain' />
        </Flex>
        <Flex className="AboutSection_MainText" alignItems="flex-start" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" width="700px" height="460px">
            <div>Contactless</div>
            <div>Increased<br/>Buying Power</div>
            <div className='MainText_Analytics'>Analytics<br/>&amp; Insights</div>
            <div className='MainText_Fraud'>Fraud<br/>Protection</div>
        </Flex>
        <Flex className="AboutSection_OtherText" alignItems="flex-start" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" width="800px" height="460px">
            <div className='OtherText_NFC'>
            Budss uses near field<br/>
            communication (NFC) for<br/>
            making contactless payments.
            </div>
            <div className='OtherText_Spend'>
            Returning customers spend<br/>
            up to 3X more.
            </div>
            <div className='OtherText_Patterns'>
            Gain a holistic view into your<br/>
            customers’ buying behavior<br/>
            & purchasing patterns. 
            </div>
            <div className='OtherText_Secure'>
            Budss handles all payments<br/>
            with a fraud prevention<br/>
            algorithm to flag high risk<br/>
            purchases & a user set PIN code<br/>
            to keep payment info secure.
            </div>
        </Flex>
        <div className='AboutSection_Logo'>
            <img src={BudssLogo} alt="Budss logo" />
        </div>
    </section>
);