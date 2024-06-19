import { Grid, Box, Avatar, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width: 56, height: 56, bgcolor: "#9155fd"}}>AK</Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p>AK</p>
                            <p>June 5, 2024</p>
                        </div>
                    </div>

                    <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                    <p className='font-semibold opacity-70 text-lg'>
                        Lorem ipsude vero voluptas dolorem tempora, officia nam consequuntur dolor culpa? Exercitationem, dolore.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
