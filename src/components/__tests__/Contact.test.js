import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom/"

describe("Contact component", () => {

    test("testing contact page header", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    })
    
    it("should load button inside my contact document", () => {
        render(<Contact />)
        const button = screen.getByRole("button");
        
        expect(button).toBeInTheDocument();
    })
})