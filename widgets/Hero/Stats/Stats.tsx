import { Flex } from '../../../shared/ui/types/flex/Flex.tsx'
import './Stats.css';

export const Stats = () => (
    <section className="StatsSection">
        <Flex height="222px" className='StatsSection_Text' flexDirection='column' justifyContent='center' alignItems='center'>
            <Flex className='Text_Procentges' flexDirection='row' justifyContent='center'>
                <div className='Procentges_15'>15%</div>
                <div className='Procentges_30'>30%</div>
                <div className='Procentges_10'>10%</div>
            </Flex>

            <Flex className='Text_About' flexDirection='row' justifyContent='center'>
                <div>Increase<br/>in Purchase Amount</div>
                <div>Growth<br/>in Annual Sales</div>
                <div>Growth in New<br/>Customers</div>
            </Flex>
        </Flex>
    </section>
);