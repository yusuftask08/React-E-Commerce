import React from 'react';
import Card from '../../Card';
import { Grid, Box, GridItem } from '@chakra-ui/react'

function Products() {
    return (
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <Card />
            </Grid>
        </div>
    );
}

export default Products;
