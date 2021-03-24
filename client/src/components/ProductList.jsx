import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const ProductList = props => {
    const [products,setProducts] = useState(false);

    useEffect(() => {
            Axios.get("http://localhost:8000/api/products")
                .then(res => setProducts(res.data.results))
                .catch(err =>console.log(err))
    },[props])

    const handleDestroyProduct = id => {
        Axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }

    return(
        products ?
            
            <div>
            <hr className="border border-darken-4 mt-5"/>
                <h3>All Products</h3>
                <table className="table col-3 mx-auto mt-3">
                    <thead>
                    </thead>
                    <tbody>
                        {
                            products.map((j,i) => {
                                return <tr key={i}>
                                            <td>
                                            <Link to={`/show/${j._id}`}>
                                                    {j.title}
                                            </Link>
                                            </td>
                                            <td>

                                                <Link
                                                    to={`/${j._id}/edit`}
                                                    className="btn btn-warning btn-outline-info">Edit</Link>
                                                <button
                                                    className="btn btn-danger btn-outline-dark"
                                                    onClick={() => handleDestroyProduct(j._id)}>Delete</button>
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div> :
            <h2>Loading...</h2>
    )
}

export default ProductList;