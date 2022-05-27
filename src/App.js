import data from './data'
import './App.css';
import {useState,useEffect} from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';

function App() {
const [menuList, setMenuList] =useState(data)
const [filteredMenu, setFilteredMenu] = useState([])
console.log(data)

useEffect(()=>{
  setFilteredMenu(menuList)
},[])

const handleCategory=(action)=>{
console.log(action)
if(action==='all') {
  setFilteredMenu(menuList)
} else{
  const menuCopy=[...menuList]
  const newList=menuCopy.filter((item)=>item.category===action)
  setFilteredMenu(newList)
}
}
  return (
    <div className="menu">
        <header className='title'>
        <h1>Menu</h1>
        <div className='underline'></div>
        </header>
        <Categories handleCategory={handleCategory} />
        <Menu menuList={menuList} filteredMenu={filteredMenu} />
    
    </div>
  );
}

export default App;
