import React, {useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './menuCard';
 
const Restraunt = () => {
    const [menuData, setmenuData] = useState(Menu)
    const itemFilter = (category) =>{
        const newMenu = Menu.filter((curElem)=>{
            return curElem.category === category
        })
        setmenuData(newMenu)
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbutton">
                    <button id="button" className="breakfast" onClick={()=>itemFilter("breakfast")}>Breakfast</button>
                    <button id="button" className="dinner" onClick={()=>itemFilter("dinner")}>Dinner</button>
                    <button id="button" className="lunch" onClick={()=>itemFilter("lunch")}>Lunch</button>
                    <button  id="button" className="all" onClick={()=>setmenuData(Menu) }>All</button> 
                </div>
            </nav>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restraunt
