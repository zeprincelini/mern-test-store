import { useState, useEffect } from 'react'
import { SimpleGrid, Box, Text, Image, Flex, Spacer, Button, Heading } from "@chakra-ui/react";

const Product = () => {
const [items, setItems] = useState<any>([])
useEffect(() => {
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/api/products');
        let data = await res.json();
        setItems(data)
        console.log(data)
    }
    fetchProducts()
}, [items])

    return (
        <Box p={2}>
            <SimpleGrid columns={{sm: 1, md: 3, lg: 4}} spacing={10}>
                {items.map((product: any) => (
                    <Box key ={product.id} boxShadow="sm" p={3}>
                        <Image src={product.path} alt="" h="200px" />
                        <Flex p={3}>
                            <Heading fontSize="lg">{product.name}</Heading>
                            <Spacer />
                            <Text fontWeight="bold" color="teal.500">${product.price}</Text>
                        </Flex>
                        <Button colorScheme="teal" mt= {8} w="full">
                            Buy Now
                        </Button>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}
export default Product