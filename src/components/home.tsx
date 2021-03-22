import React, { FC, ReactElement } from 'react';
import {  Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

type HomeProps = {}

const Home: FC<HomeProps> = (): ReactElement => {
    return (
        <Flex p={4} boxShadow="md">
            <Box>
                <img src="" alt=""/>
                <Text color="teal" fontWeight="semibold" fontSize="lg">Cart Up</Text>
            </Box>
            <Spacer/>
            <Box>
                <IconButton bg="teal.300" aria-label="product form" icon = {<AddIcon color="white" 
                _hover={{color: "teal"}}/>} isRound ={true}/>
            </Box>
        </Flex>
    )
}

export default Home;