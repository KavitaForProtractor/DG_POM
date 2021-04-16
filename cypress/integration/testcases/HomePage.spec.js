/// <reference types="cypress" />


import HomePageActions from '../../pageobjects/pageactions/HomePageActions'

describe("Login in to Evidon Privacy Tool",()=>{

    const homePage = new HomePageActions()

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })

    beforeEach(()=>{

        homePage.navigateToURL()


    })

    it("Validate Title of the Page",()=>{


        homePage.validateTitle().should('eq','Sign In')

        homePage.loginintoPrivacyTool(data.email, data.pswd)

       
   
        
    })

    


    

    



})