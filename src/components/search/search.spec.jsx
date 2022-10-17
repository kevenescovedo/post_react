import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { SearchComponent } from "."
const props = {
    posts: [{
        id: 1,
        title: 'title',
        body : 'body',
        cover: 'https://site.com',
    
    },
    {
        id: 2,
        title: 'title',
        body : 'body',
        cover: 'https://site2.com',
    
    }, 
    {
        id: 3,
        title: 'title',
        body : 'body',
        cover: 'https://site3.com',
    
    }
]
}
describe('</SearchComponent>', () => {
    it('should have a value of search value', () => {
        const fn = jest.fn();
      render(<SearchComponent handleChange={fn} searchValue="testando"/>);
        expect(screen.getByPlaceholderText("digite o que pesquisar")).toBeInTheDocument();
       // expect(screen.getByPlaceholderText("digite o que pesquisar")).toHaveAttribute('value','testando');
       expect(screen.getByPlaceholderText("digite o que pesquisar").value).toBe("testando");
    })
    
    it('should call handleChnage on each key press', () => {
        const fn = jest.fn();
       
      render(<SearchComponent handleChange={fn} />);
      const input = screen.getByPlaceholderText("digite o que pesquisar");
      userEvent.type(input,'o valor');
    let valor = 'o valor';
   // eu espero que o valor seja como esperado depois de digitar
   expect(input.value).toBe('o valor');
   //ve quantas vezes a função echmada
   expect(fn).toHaveBeenCalledTimes(valor.length);
    })
    it('should match snapshot', () => {
        const fn = jest.fn();
       
      const {debug, container}= render(<SearchComponent handleChange={fn} />);
      expect(container).toMatchSnapshot();
   
    })


   
});