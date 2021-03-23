import { SimpleGrid, Box } from "@chakra-ui/react";

const Product = () => {
    return (
        <Box p={2}>
            <SimpleGrid columns={{sm: 1, md: 3, lg: 4}} spacing={10}>
                <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
        </Box>
    )
}
export default Product