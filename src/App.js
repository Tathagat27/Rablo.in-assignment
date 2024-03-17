import {useState} from 'react'
import './App.css';
import EmployeeCard from './EmployeeCard';

function App() {

  const [data,setData] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState('');

  async function handleFetch(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    setData(data);

  }

  function handleSingleDelete(id){
        setData(data.filter((item) => item.id !== id));
  }

  function handleMultiDelete(){
    setData(data.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    setMultiSelect(false);
  }

  function handleSearch(e){
    const newData = data.filter((x) => x.id === Number(search));
    if(newData.length !== 0){
      setData(newData);
    }
    else{
      setData(null);
    }
    
    setSearch('');
  }

  return (
    <div className="App">
      <div className='dashboard-container'>
        <div className='dashboard-top'>
          <p>Employee Dashboard</p>
          <div className='search-box'>
            <input placeholder='Search by Id' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className='button-17' onClick={handleSearch}>Search</button>
          </div>
          <button className='button-17' onClick={handleFetch} style={{padding: '10px 10px', fontWeight: 'bolder'}}>Fetch Employees</button>
        </div>
        
        
        <div className='dashboard-bottom'>
          {(data) && <div className='multi-select-area'>
            <div className='multi-select-1' onClick={() => setMultiSelect((x) => !x)} style={{cursor: 'pointer', userSelect: 'none'}}>
              <input
                type="checkbox"
                checked={multiSelect}
                onChange={() => setMultiSelect((x) => !x)}
              />
              <p>Multiple Select</p>
            </div>
              {(multiSelect) && <div className='multi-select-2'>
                <p>Select the Cards you want to delete and then click Delete All.</p>
                <button className='deleteButton' onClick={handleMultiDelete}>Delete All</button>
              </div>}
              
          </div>}
          <div className='card-box'>
            {
              (data && data?.length !== 0) ?
              <div className='card-container'>
                {data.map((item) => (
                <EmployeeCard key={item.id} item={item} handleSingleDelete={handleSingleDelete} multiSelect={multiSelect} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
              ))}
              </div>
               :
              (<div className='data-fetch'><p>Click on Fetch Employee to fetch Employees data</p></div>)
            }
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
