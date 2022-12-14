
import './style.css';
import p from 'prop-types';
export const SearchComponent = (props) => {
    let {searchValue, handleChange} = props;
    return (<div className='caixa_search'>
        {searchValue != null && searchValue !== "" ? <h1>search value: {searchValue}</h1> : <div>hhhhhhh</div>  }

<input type='search' className='text_input' onChange={handleChange} value={searchValue} placeholder="digite o que pesquisar"/> <br/> <br/> <br/>
    </div>);
}
SearchComponent.propTypes = {
  searchValue: p.string.isRequired,
  handleChange: p.func,
}
