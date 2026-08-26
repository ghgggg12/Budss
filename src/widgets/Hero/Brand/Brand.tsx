import { Flex } from '../../../shared/ui/types/flex/Flex.tsx';
import Facebook from '../../../shared/assets/svg/Facebook.svg';
import Instagram from '../../../shared/assets/svg/Instagram.svg';
import Tiktok from '../../../shared/assets/svg/Tiktok.svg';
import Twitter from '../../../shared/assets/svg/Twitter.svg';
import Logos from '../../../shared/assets/svg/Logos.svg';
import ContactButton from '../Form/codes/open/Button/Button.tsx';
import './Brand.css';

export const Brand = () => (
    <section className="BrandSection">
        <Flex className='BrandSection_CTA' justifyContent='center'>
            <Flex className='CTA_Header' flexDirection='column' justifyContent='center' alignItems='center' rowGap='10px' flexShrink='1'>
                Let Your Business Grow
                <Flex className="ContactButton" justifyContent='center'>
                    <ContactButton />
                </Flex>
            </Flex>
        </Flex> 
        <Flex className='BrandSection_About'>
            <Flex className='About_Txt' flexDirection='column' alignItems='center'>
                <Flex className='Txt_Header' alignItems='center' justifyContent='center' width='830px'>
                    Your Brand<br/>
                    Awareness Maters
                </Flex>
                <Flex className='Txt_About' alignItems='center' justifyContent='center' width='530px'>
                    Budss is a husle free solution to put your brand on any digital<br/>
                    surface including Instagram, Facebook, Twitter and TikTok
                </Flex>
            </Flex>
            <Flex className='About_Images' justifyContent='flex-start' flexDirection='column'>
                <Flex className='Images_Row1' justifyContent='flex-end' alignItems='flex-end'>
                    <img className='Facebook' src={Facebook} alt='Facebook' />
                    <img className='Instagram' src={Instagram} alt='Instagram' />
                </Flex>
                <Flex className='Images_Row2' justifyContent='flex-end' alignItems='flex-end'>
                    <img className='Twitter' src={Twitter} alt='Twitter' />
                    <img className='Tiktok' src={Tiktok} alt='Tiktok' />
                </Flex>
            </Flex>
        </Flex>
        <Flex className='BrandSection_Logos' justifyContent='center'>
            <img className='Logos_Image' src={Logos} alt='Brands' />
        </Flex>
    </section>
);