import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import{
    ActivitiesContainer,
    ActivitiesH1,
    ActivitiesH2,
    ActivitiesWrapper,
    ActivitiesCard,
    ActivitiesIcon,
    ActivitiesP
} from './ActivitiesElements';

const Activities = () => {
    return (
        <ActivitiesContainer id="Activities">
        <ActivitiesH1>Our Activities</ActivitiesH1>
        <ActivitiesWrapper>
            <ActivitiesCard>
                <ActivitiesIcon src={Icon1}/>
                <ActivitiesH2>provide Education</ActivitiesH2>
                <ActivitiesP>Help provide Education that is primary, secondary, post secondary to underprivileged Kibera children to be able to attend school </ActivitiesP>
            </ActivitiesCard>
            <ActivitiesCard>
                <ActivitiesIcon src={Icon2}/>
                <ActivitiesH2>Counselling</ActivitiesH2>
                <ActivitiesP>Help provide Counselling to adults and children </ActivitiesP>
            </ActivitiesCard>
            <ActivitiesCard>
                <ActivitiesIcon src={Icon3}/>
                <ActivitiesH2>Learning Skills for adults</ActivitiesH2>
                <ActivitiesP> Teach trades such as dress making and bag and jewellery making to willing parents</ActivitiesP>
            </ActivitiesCard>
        </ActivitiesWrapper>
    </ActivitiesContainer>
    )
}

export default Activities
