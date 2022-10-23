import React, {useRef} from "react"
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

export default function Opportunities(){
    return (
        <>
            <Box left='50px' top='30px' position='fixed' fontSize={30}>
                <h1>Opportunities Page</h1>
            </Box>
            <Accordion allowToggle width={600} marginLeft={10} marginTop={100} marginRight='none' position='fixed'>
                <AccordionItem>
                    <h2>
                        <AccordionButton height={24}>
                            <Box flex='1' textAlign='left'>
                                Toms River Clean-Up
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton height={24}>
                            <Box flex='1' textAlign='left'>
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton height={24}>
                            <Box flex='1' textAlign='left'>
                                Section 3 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton height={24}>
                            <Box flex='1' textAlign='left'>
                                Section 4 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            
            <Box width={"min-content"} right={100} top={120} position='absolute' border='black' borderWidth='10px' borderStyle='solid'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339923.40409647423!2d-74.19004066399376!3d40.11383543201792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19ce4a38e7105%3A0x3f5b6f5b358b3cb0!2sToms%20River%2C%20NJ!5e0!3m2!1sen!2sus!4v1666487049580!5m2!1sen!2sus" width="600" height="450" allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>
        </>
    )
}