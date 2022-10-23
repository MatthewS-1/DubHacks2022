import React, {useRef} from "react"
<<<<<<< HEAD
import {
    Component,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button,
    Image,
  } from '@chakra-ui/react'
import Navbar from "./Navbar"
import "./Navbar.css"
=======
import { Button } from "@chakra-ui/react";
import Navbar from "./Navbar"
>>>>>>> 9f9deef (ff)

export default function Opportunities(){
    return (
        <>
            <Box left='50px' top='30px' position='fixed' fontSize='30px'>
                <Navbar/>
                <h1>Opportunities Page</h1>
            </Box>
            <Accordion allowToggle width='600px' maxHeight='75%' marginLeft='70px' marginTop='150px' marginRight='none' position='fixed' overflowY='auto'>
                <AccordionItem>
                    <h2>
                        <AccordionButton height='80px' _expanded={{bg: 'green', color: 'white'}}>
                            <Box flex='1' textAlign='left' fontSize='22px'>
                                Toms River Clean-Up
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Organization: Clean Rivers<br></br>
                        <br></br>
                        Event Details: Last time this area was cleaned was 05/20/2020.<br></br>
                        Trash like plastic bottles and bags are seen near shores in th south, clean up is needed.<br></br>
                        <br></br>
                        Pictures:
                        <Box width='240px'><Image src="https://science.uct.ac.za/sites/default/files/content_migration/science_uct_ac_za/60/images/Litter.jpg"></Image></Box>
                        <br></br>
                        Contact: (201)XXX-7016<br></br>
                        <br></br>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton height='80px' _expanded={{bg: 'green', color: 'white'}}>
                            <Box flex='1' textAlign='left' fontSize='22px'>
                                Yonder Lake
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Organization: None<br></br>
                        <br></br>
                        Event Details: Last time this area was cleaned was 11/09/2021.<br></br>
                        Area near north shore is polluted by trash, clean up is needed.<br></br>
                        <br></br>
                        Pictures:
                        <Box width='240px'><Image src="https://gamma.creativecirclecdn.com/messenger/medium/20201018-190308-trash-lake-hiawatha-300x225.jpg"></Image></Box>
                        <br></br>
                        Contact: (206)XXX-9487<br></br>
                        <br></br>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton height='80px' _expanded={{bg: 'green', color: 'white'}}>
                            <Box flex='1' textAlign='left' fontSize='22px'>
                                Totem Park
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Organization: Parks To Clean<br></br>
                        <br></br>
                        Event Details: Last time this area was cleaned was 02/22/2022.<br></br>
                        Trash is found northbound of skylight trial, clean up is needed.<br></br>
                        <br></br>
                        Pictures:
                        <Box width='240px'><Image src="https://i0.wp.com/bkreader.com/wp-content/uploads/2020/08/3738821611_3a2c334f2f_c.jpg"></Image></Box>
                        <br></br>
                        Contact: (905)XXX-4069<br></br>
                        <br></br>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton height='80px' _expanded={{bg: 'green', color: 'white'}}>
                            <Box flex='1' textAlign='left' fontSize='22px'>
                                Jester River
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Organization: None <br></br>
                        <br></br>
                        Event Details: Last time this area was cleaned was 09/19/2019.<br></br>
                        Trash is found stuck in river banks and areas nearby, clean up is needed.<br></br>
                        <br></br>
                        Pictures:
                        <Box width='240px'><Image src="https://www.riverkeeper.org/wp-content/uploads/2016/07/egret-standing-in-trash-BronxRiver-crLeahRae-890x490-e1523974798506.jpg"></Image></Box>
                        <br></br>
                        Contact: (650)XXX-1492<br></br>
                        <br></br>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            
            <Box width={"min-content"} right={100} top={120} position='absolute' border='black' borderWidth='8px' borderStyle='ridge'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339923.40409647423!2d-74.19004066399376!3d40.11383543201792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19ce4a38e7105%3A0x3f5b6f5b358b3cb0!2sToms%20River%2C%20NJ!5e0!3m2!1sen!2sus!4v1666487049580!5m2!1sen!2sus" width="600" height="450" allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>
        </>
    )
}