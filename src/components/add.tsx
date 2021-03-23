import { Box, FormControl, FormLabel, FormErrorMessage, VStack, Input, Button, Center, Divider, Heading } from '@chakra-ui/react';
import React, { FC, ReactElement, useState } from 'react';

type AddProp = {}

const Add = () => {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState<any>(null);
    
    const handler = (e:any) => {
        setImg(e.target.files[0])
    }
    
    const submit = (e: any) => {
        e.preventDefault();
        if(!product || !price){
            alert('Fields cannot be empty!')
            return
        }
        let formData = new FormData();
        formData.append('product', product);
        formData.append('price', price);
        formData.append('img', img);
    }
    
    return(
        <Box>
            <VStack mt ={5}>
                <Heading fontSize="xl" color="teal.400">
                    Add New Product
                </Heading>
                <Divider w="400px"/>
                <form encType ="multipart/form-data" onSubmit = {submit}>
                    <FormControl id="product_name" mb={2}>
                        <FormLabel>Enter Name</FormLabel>
                        <Input type="text" w="400px" name="product" value ={product} 
                        onChange={(e) => {setProduct(e.target.value)}}/>
                    </FormControl>
                    <FormControl id="product_price" mb={3}>
                        <FormLabel>Enter Price </FormLabel>
                        <Input type="number" name="price" value = {price} 
                        onChange={(e) =>{setPrice(e.target.value)}}/>
                    </FormControl>
                    <FormControl id="product_img">
                        <Input type="file" name="img" onChange={handler}/>
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