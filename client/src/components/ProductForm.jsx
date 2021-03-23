const ProductForm = props => {
    //deconstruct props
    const {inputs,handleInputChange,handleSubmit,formTitle,submitValue,errors} = props;

    return (
        <form onSubmit={handleSubmit} className="col-6 mx-auto pt-5">
            <h2 className="text-center pb-5">{formTitle}</h2>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="title">Title:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={handleInputChange}
                        value={inputs.title}
                    />
                    <span className="text-danger">
                        {errors.title ? errors.title.message : ""}
                    </span>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="price">Price:</label>
                <div className="col-sm-10">
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        onChange={handleInputChange}
                        value={inputs.price}
                    />
                    <span className="text-danger">
                        {errors.price ? errors.price.message : ""}
                    </span>
                </div>
            </div>          
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="description">Description:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        onChange={handleInputChange}
                        value={inputs.description}
                    />
                    <span className="text-danger">
                        {errors.description ? errors.description.message : ""}
                    </span>
                </div>
            </div> 
            <input type="submit" value={submitValue} className="btn btn-primary" />
        </form>
    )
}

export default ProductForm;