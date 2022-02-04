import React, {useState, useEffect} from 'react'
import {Container, Grid} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import ImgMediaCard from 'Components/ImgMediaCard/ImgMediaCard';
import {actions as newActions} from 'store/products/actions'
import {actions as cartActions} from 'store/addToCart/actions';

const Home = () => {
    const products = useSelector(state => state.products.initialProducts);
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const productsAction = () => dispatch(newActions.productsAction());
    const [productValue, setProductValue] = useState(products);
    
    useEffect(() => {setProductValue(products)}, [products])
    useEffect(() => {productsAction()}, [])

    const addProduct = (data) => {
        cartProducts.push(data)
        return dispatch(cartActions.addToCart(cartProducts))}
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    {productValue.map((item, index) => <Grid key={index} item xs={3}><ImgMediaCard addProduct={addProduct()} items={item}/></Grid>)}
                </Grid>
            </Container>
        </div>
    )
}

export default Home
