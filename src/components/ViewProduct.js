import React from 'react'
import '../styles/view.css'
const ViewProduct = () => {
    return (
        <div className='container' id = "view">
            <div className='box'>
            <div id="carousel" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-t53VmZoAMxfOmgFL5EtwzCKz5jqPcYsgg&usqp=CAU" className="rounded mx-auto d-block w-100" height={500} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhswy3q9xBWNd0uHepUwBWhMklO1xasKyMIITNniLVZ7YEaZgFszKj7hIvkd0tCOE41bc&usqp=CAU"className="d-block w-100"  height={500} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXErxOnrL2noViNzCTWo8lixCPacCZJiDVA&usqp=CAU" className="d-block w-100" height={500} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div className='data'>
                <h2>BODY LOTION</h2><br/>
              <h4>  Price : 199/-</h4><br/> 
                Color : <select id="select"> 
                    <option>color</option>
                    <option>white</option>
                    <option>Black</option>
                    <option>Blue</option>
                </select> <br/> <br/>
                Size : <select id="select"> 
                    <option>size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select> <br/> <br/>
                Quantity : <select id="select"> 
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select><br/> <br/>
                <button className='btn btn-warning'>Add To Cart</button> <br/> <br/>
                <button className='btn btn-success'>Buy Now</button>
         
            </div>
        </div>
    )
}

export default ViewProduct