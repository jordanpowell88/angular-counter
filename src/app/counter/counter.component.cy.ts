import { CounterService } from "../counter.service"
import { CounterComponent } from "./counter.component"

describe('CounterComponent', () => {
    it('can mount and display an initial value of 0', () => {
        cy.mount(CounterComponent, {
            providers: [
                {
                    provide: CounterService,
                    useValue: { count: null }
                }
            ]
        })
        cy.get('#count').contains(0)
    })

    it('can increment the count', () => {
        cy.mount(CounterComponent)
        cy.get('button').contains('+').click()
        cy.get('#count').contains(1)
    })

    it('can decrement the count', () => {
        cy.mount(CounterComponent)
        cy.get('button').contains('-').click()
        cy.get('#count').contains(-1)
    })
})