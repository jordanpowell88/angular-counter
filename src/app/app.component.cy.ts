import { AppComponent } from "./app.component"

describe('AppComponent', () => {
    it('can mount', () => {
        cy.mount(AppComponent)
    })
})