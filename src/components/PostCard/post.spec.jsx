import { render, screen } from "@testing-library/react"
import { debug } from "console";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";
// criar um mock falso de dados
const props = postCardPropsMock;
describe('<PostCard/>', () => {
it('should render PostCard Correctly', () => {
const {debug} = render(<PostCard {...props}/>);

//ver se tem imagemn o documento
expect(screen.getByRole("img", {name: props.title})).toBeInTheDocument();

//ve se ela tem o src e o src é igual o esperado
expect(screen.getByRole('img', {name: props.title})).toHaveAttribute('src', props.cover);
expect(screen.getByRole('heading', {name: props.title})).toBeInTheDocument();
//pegar o p, o a tag p não tem role
expect(screen.getByText(props.body)).toBeInTheDocument();
});
it('should match snapshot', () => {
    const {debug,container} = render(<PostCard {...props}/>);

    expect(container.firstChild).toMatchSnapshot();
    })
})

