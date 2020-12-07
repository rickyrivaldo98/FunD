import React, { useState, useEffect } from "react";
import { Container, 
    // CardBody, CardImg, 
    // CardTitle, CardText 
} from "reactstrap";
import axios from "axios";
import Header from "../components/NavbarLanding";
import Footer from "../components/Footer";


const Product = () => {
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://13.238.142.2/products"
            )
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            });
    }, []);

    return (
        <div>
            <Header />
            <Container>

            <h2 style={{textAlign: "center"}}><b>Product Apps</b></h2>
            <ul>
                {products.map((product) => (
                    <li key={product.name}>
                        {product.name}
                        {product.description}
                        {product.image}
                        {product.price}
                    </li>
                ))}
            </ul>
{/* 
                    <CardBody>
                        {products.map((product) => (
                            <CardImg key={product.image}>
                                {product}
                            </CardImg>
                        ))}
                    </CardBody>
                                            
                        {/* <CardTitle>{product.name}</CardTitle>
                        <CardImg>{product.image}</CardImg>
                        <CardText>{product.description}</CardText> */}
                    
 */}


            </Container>
            <Footer />
        </div>
    )
}


export default Product;