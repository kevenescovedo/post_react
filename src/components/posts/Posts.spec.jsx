import { render, screen } from "@testing-library/react"
import { Posts } from "."
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
describe('</Posts>', () => {
    it('should render posts', () => {
      render(<Posts{...props}/>);
     //ve se tem postagem
     //ve se tem title
      expect(screen.getAllByRole('heading', {name: 'title' })).toHaveLength(3);
      //ve se tem img
      expect(screen.getAllByRole('img', {name: 'title' })).toHaveLength(3);
      //ve se tem paragrafo
      expect(screen.getAllByText("body")).toHaveLength(3);

    })

    it('should match snapshot', () => {
       const {container} = render(<Posts{...props}/>);
       expect(container.firstChild).toMatchSnapshot();
       
      })
})