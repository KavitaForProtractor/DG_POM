/// <reference types="Cypress" />

const or = require("../../locators.json")

export default class HomePageElements{


        UserTxt(){

            return cy.get(or.homepage.UserTxt)
        }

        PswdText(){

            return cy.get(or.homepage.PswdText)
        }

        signinBtn(){

            return cy.get(or.homepage.signinBtn)
        }


      



}




