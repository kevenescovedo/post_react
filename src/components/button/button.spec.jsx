import {Button} from '.';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("<Button/>", () => {
    it("should render the button with the text 'Load More Posts'", () => {
      const fn = jest.fn();
        render(<Button text="Load More Posts" onClick={fn}/>);
        const button = screen.getByRole("button", {name: /Load More Posts/i});
        // ve se o atributo do botão é esse
       // expect(button).toHaveAttribute('class','btn');
       //ve se ta no documento
       expect(button).toBeInTheDocument();



    })
    it("Shoud call function when button clicked", () => {
        //criar um mock
        const fn = jest.fn();
        render(<Button text="Load More Posts" onClick={fn}/>);
        const button = screen.getByRole("button", {name: /Load More Posts/i});
        // ve se o atributo do botão é esse
       // expect(button).toHaveAttribute('class','btn');
       //chamar um evento

       fireEvent.click(button); //ou use user
       //userEvent.click(button);
       // ver se a função foi chamada , o times ve a quantidade de vezes que ela foi chamada
       expect(fn).toHaveBeenCalledTimes(1);




    })
    it("Shoud button dissabled", () => {
        //criar um mock
        const fn = jest.fn();
        render(<Button text="Load More Posts" disabled={false} onClick={fn}/>);
        const button = screen.getByRole("button", {name: /Load More Posts/i});
        // ve se o atributo do botão é esse
       // expect(button).toHaveAttribute('class','btn');
       //chamar um evento

      //ou use user
       //userEvent.click(button);
       // ver se a função foi chamada , o times ve a quantidade de vezes que ela foi chamada
       expect(button).toBeEnabled();




    })
}
)
