import {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Show = props => {
    const [product,setProduct] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results[0]))
            .catch(err => {
                err.response.status === 404 ? navigate('/404') : console.log(err)
            })
    },[props])

    return (
        product ?
        <div className="card col-4 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Description: {product.description}</p>
            </div>
        </div> : <h2>Loading...</h2>
    )
}

export default Show;