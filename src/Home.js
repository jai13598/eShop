import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>

            <div className="home__container">

                <img src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" alt="" className="home__img" />

                <div className="home__row">
                    <Product
                        id="1"
                        tittle="Jack&Jones white color shirt with green strip"
                        price={3000}
                        rating={4}
                        image="https://static3.azafashions.com/tr:w-317/uploads/product/1-0744899001674485691.JPG"
                    />

                    <Product
                        id="2"
                        tittle="Levi's Tshirt with white color"
                        price={1999}
                        rating={3}
                        image="	https://www.barbopoulos.gr/wp-content/uploads/2022/06/16143-0125-1.jpg
                        "
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        tittle="Jara Tshirt with white color"
                        price={1499}
                        rating={3}
                        image="https://wallpapercave.com/wp/wp1884073.jpg"
                    />
                    <Product
                        id="4"
                        tittle="H&M Tshirt with purple  color"
                        price={1999}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbnGEwZreQdkVRJqIdNxqEEUddez8enNiRw&usqp=CAU"
                    />
                    <Product
                        id="5"
                        tittle="H&M Oversize Tshirt with Green color"
                        price={1999}
                        rating={3}
                        image="https://i.pinimg.com/736x/d0/28/2b/d0282baaf1784344df0836cbd181840e.jpg
                        "
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6"
                        tittle="LG Micro Owen "
                        price={11999}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5Qge3xDplEishmaM6L_tJItwo5PMiF6lCw&usqp=CAU"
                    />
                </div>

            </div>

        </div>
    )
}

export default Home