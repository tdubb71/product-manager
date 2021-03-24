import {useState} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
// import { navigate } from '@reach/router';

const Create = props => {
    const [product,setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })



    const [errors,setErrors] = useState({
        title: "",
        price: "",
        description: ""
    })

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/products",product)
            .then(res => {
                setProduct({
                    title: "",
                    price: "",
                    description: ""
                })
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
        

    }

    return(
        <>
            <ProductForm 
                inputs={product}
                formTitle="Product Manager"
                submitValue="Create"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />

            <ProductList 
               data={product} 
            />
        </>
    )
}

export default Create;