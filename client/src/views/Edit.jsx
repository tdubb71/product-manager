import {useState, useEffect} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';

const Edit = props => {
    const [product,setProduct] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results[0]))
            .catch(err => console.log(err))
    },[props])

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

        //PUT ROUTE NEEDED TO UPDATE
        Axios.put(`http://localhost:8000/api/products/${props.id}`,product)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }    

    return(
            product ?
            <ProductForm 
                inputs={product}
                formTitle="Edit Product"
                submitValue="Edit"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            /> : <h2>Loading...</h2>
    )
}

export default Edit;