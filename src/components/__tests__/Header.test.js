import {render,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/AppStore"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom"

it("should load header component with login button", () => {
render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
)

const loginBtn = screen.getByRole("button")
expect(loginBtn).toBeInTheDocument()
})