import { Flex } from '@shared/ui/types/flex/Flex.tsx';
import Facebook from '@shared/assets/svg/Facebook.svg';
import Instagram from '@shared/assets/svg/Instagram.svg';
import Tiktok from '@shared/assets/svg/Tiktok.svg';
import Twitter from '@shared/assets/svg/Twitter.svg';
import Logos from '@shared/assets/svg/Logos.svg';
import ContactButton from '@shared/ui/Button/Button.tsx';
import Clover from '@shared/assets/svg/Clover.svg';
import SquareShopify from '@shared/assets/svg/SquareShopify.svg';
import WooSpace from '@shared/assets/svg/WooSpace.svg';
import './Brand.css';

export const Brand = () => (
    <section className="BrandSection">
        <Flex className='BrandSection_CTA' justifyContent='center'>
            <Flex className='CTA_Header' flexDirection='column' justifyContent='center' alignItems='center' rowGap='20px' flexShrink='1'>
                Let Your Business Grow
                <Flex className="ContactButton" justifyContent='center'>
                    <ContactButton />
                </Flex>
            </Flex>
        </Flex> 
        <Flex className='BrandSection_About'>
            <Flex className='About_Txt' flexDirection='column' alignItems='center'>
                <div className='Txt_Header'>
                    Your Brand
                    Awareness Maters
                </div>
                <div className='Txt_About'>
                    Budss is a husle free solution to put your brand on any digital
                    surface including Instagram, Facebook, Twitter and TikTok
                </div>
            </Flex>
            <div className='About_Images'>
                <div className='Images_Row1'>
                    <img className='Facebook' src={Facebook} alt='Facebook' />
                    <img className='Instagram' src={Instagram} alt='Instagram' />
                </div>
                <div className='Images_Row2'>
                    <img className='Twitter' src={Twitter} alt='Twitter' />
                    <img className='Tiktok' src={Tiktok} alt='Tiktok' />
                </div>
            </div>
        </Flex>
        <div className='BrandSection_Logos'>
            <img className='Logos_Image' src={Logos} alt='Brands' />
        </div>
        <div className='BrandSection_LogosAdapt'>
            <img className='LogosAdapt_Image1' src={SquareShopify} alt='Square&Shopify' />
            <img className='LogosAdapt_Image2' src={WooSpace} alt='Woo&Space' />
            <img className='LogosAdapt_Image3' src={Clover} alt='Clover' />
        </div>
    </section>
);