import { Box, FormControl, FormLabel, FormErrorMessage, VStack, Input, Button, Center, Divider, Heading } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

type AddProp = {}

const Add: FC<AddProp> = (): ReactElement => {
    return(
        <Box>
            <VStack mt ={5}>
                <Heading fontSize="xl" color="teal.400">
                    Add New Product
                </Heading>
                <Divider w="400px"/>
                <form action="">
                    <FormControl id="product_name" mb={2}>
                        <FormLabel>Enter Name</FormLabel>
                        <Input type="text" w="400px"/>
                    </FormControl>
                    <FormControl id="product_price" mb={3}>
                        <FormLabel>Enter Price </FormLabel>
                        <Input type="number"/>
                    </FormControl>
                    <FormControl id="product_img">
                        <Input type="file" my="auto" />
                    </FormControl>
                    <Center>
                        <Button colorScheme="teal" mt= {8} w="full" type="submit">
                            Save Product
                        </Button>
                    </Center>
                </form>
            </VStack>
        </Box>
    )
}

export default Add;