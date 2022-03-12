import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Carousel Imports//
import BrightsideTeaser from '../../assets/carousel/BrightsideTeaser.png';

import Daybreak1 from '../../assets/carousel/Daybreak1.jpg';
import Daybreak2 from '../../assets/carousel/Daybreak2.jpg';
import Daybreak3 from '../../assets/carousel/Daybreak3.jpg';
import Daybreak4 from '../../assets/carousel/Daybreak4.jpg';
import Daybreak5 from '../../assets/carousel/Daybreak5.jpg';

import Raven1 from '../../assets/carousel/Raven1.png';
import Raven2 from '../../assets/carousel/Raven2.jpg';
import Raven3 from '../../assets/carousel/Raven3.jpg';
import Raven4 from '../../assets/carousel/Raven4.jpg';
import Raven5 from '../../assets/carousel/Raven5.jpg';

//Component Icons Import//
import BatteryIcon from '../../assets/images/YouTube.png';
import PowerIcon from '../../assets/images/YouTube.png';
import AeroshellIcon from '../../assets/images/YouTube.png';

import {
    ProjectContainer,

    DaybreakContainer,
    DaybreakTextContainer,
    DaybreakTitleText,
    DaybreakImage,
    DaybreakBatteryText,
    DaybreakPowerText,
    DaybreakAeroshellText,

    BrightsideContainer,
    BrightsideTextContainer,
    BrightsideTitleText,
    BrightsideImage,
    BrightsideBatteryText,
    BrightsidePowerText,
    BrightsideAeroshellText,

    RavenContainer,
    RavenTextContainer,
    RavenTitleText,
    RavenImage,
    RavenBatteryText,
    RavenPowerText,
    RavenAeroshellText,
} from './ProjectSectionStyle';

const ProjectSection = () => {
    return (
        <ProjectContainer className='projects'>

            <DaybreakContainer>

                <DaybreakTextContainer>
                    <DaybreakTitleText>
                        DAYBREAK (2017 - 2022)
                    </DaybreakTitleText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakBatteryText>
                            420x Panasonic NCR18650b Li-ion cells (5.1kWh)
                        </DaybreakBatteryText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakPowerText>
                        NGM SC-M150 in-hub BLDC (3.75kW)
                        4m^2 of Sunpower E60 solar cells
                        </DaybreakPowerText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakAeroshellText>
                        Spaceframe monohull
                        Twill weave carbon fibre, soric core
                        4130 Chromoly steel spaceframe
                        </DaybreakAeroshellText>

                </DaybreakTextContainer>

                <DaybreakImage>
                    <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false}> 

                        <img src={Daybreak1} />
                        <img src={Daybreak2} />
                        <img src={Daybreak3} />
                        <img src={Daybreak4} />
                        <img src={Daybreak5} />

                    </Carousel>
                </DaybreakImage>
            </DaybreakContainer>


            <BrightsideContainer>

                <BrightsideTextContainer>
                    <BrightsideTitleText>
                        BRIGHTSIDE (Coming Soon...)
                    </BrightsideTitleText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <BrightsideBatteryText>
                            To be determined...
                        </BrightsideBatteryText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <BrightsidePowerText>
                            4m^2 of Sunpower E66 solar cells
                        </BrightsidePowerText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <BrightsideAeroshellText>
                            4130 Chromoly steel spaceframe
                        </BrightsideAeroshellText>

                </BrightsideTextContainer>

                <BrightsideImage>
                    <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false}> 

                        <img src={BrightsideTeaser} />

                    </Carousel>
                </BrightsideImage>
            </BrightsideContainer>


            <RavenContainer>
                <RavenTextContainer>

                    <RavenTitleText>
                        Raven (2008 - 2017)
                    </RavenTitleText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <RavenBatteryText>
                            4kWh of LiFePO4 cells powering a 8kWPGM 132 brushed DC motor (8kW)
                        </RavenBatteryText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <RavenPowerText>
                            6m^2 of Sunpower C60 solar cells
                        </RavenPowerText>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <RavenAeroshellText>
                            Twill weave carbon fibre/fibreglass, soric core
                        </RavenAeroshellText>

                </RavenTextContainer>

                <RavenImage>
                    <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false}> 

                        <img src={Raven1} />
                        <img src={Raven2} />
                        <img src={Raven3} />
                        <img src={Raven4} />
                        <img src={Raven5} />

                    </Carousel>
                </RavenImage>
            </RavenContainer>
        </ProjectContainer>
    );
};

export default ProjectSection
