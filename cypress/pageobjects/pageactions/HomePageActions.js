/// <reference types="Cypress" />

import HomePageElements from '../pageelements/HomePageElements'




export default class HomePageActions{



    constructor(){

        globalThis.homepageelement = new HomePageElements()
    }


    navigateToURL(){

        cy.visit('/')

    }

    validateTitle(){

        return cy.title()
    }

    loginintoPrivacyTool(email,pswd){

        homepageelement.UserTxt().type(email)
        homepageelement.PswdText().type(pswd)
        homepageelement.signinBtn().click()
        
    }
   

}