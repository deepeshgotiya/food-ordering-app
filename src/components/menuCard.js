import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData)
    return (
        <>
            <h1 className="heading">Shiv Restraunt</h1>
            {menuData.map((curElem, index) => {
                return (
                    <>
                        <div className="cardContainer">
                            <div className="cardBody">
                                <span className="cardAuth" key={curElem.category}></span>
                                <h2 className="dish">{curElem.name}</h2>
                                <span className="about-food" >{curElem.description}</span>
                            </div>
                            <div className="imageCont">
                                <img src={curElem.image} className="image"></img></div>
                            <br />
                            <span className="price">{curElem.price}</span>
                            <span className="order-button">Order Now</span>

                        </div>
                    </>
                )
            })}

        </>
    )
}

export default MenuCard;
