
import { authLogin } from '../../pageObjects/loginPage.js'
import { createImg } from '../../pageObjects/createPage.js'
import { navigation } from '../../pageObjects/navigation.js'


describe('Logujem se i pravim galeriju', () => {
    beforeEach(() => {
        cy.visit('/')    // isto kao u create gallery samo povezano
        navigation.clickLogin()
        authLogin.login('highhook@gmail.com', '12345678')
        navigation.clickCreateGallery()   
      })

        it ('Create gallery bez imena', () => {  //PASS - error
            createImg.create( '', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            cy.wait(3000)
        })

        it('Create gallery sa razmakom kao ime', () => {  //PASS - error
            createImg.create(' ', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            cy.wait(3000)
        })

        it('Create gallery sa imenom od samo 1 karaktera', () => {  //PASS - error
            createImg.create('b', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            cy.wait(3000)
        })

        var a = 'b'
        it('Create gallery sa imenom od 256 karaktera', () => {  //PASS - error
            createImg.create(a.repeat(256), '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            cy.wait(3000)
        })

        it('Create gallery bez slike', () => {  //PASS - error
            createImg.create('Pobeda', '', '')
            cy.wait(3000)
        })

        it('Create gallery invalid img format', () => {  //PASS - error
            createImg.create('Pobeda', '', 'blabla')
            cy.wait(3000)
        })

        it('Create gallery dobar img format ali nepostojeca slika', () => {  //FAILED - napravio je galeriju
            createImg.create('Pobeda', '', 'http://116581283_vojvoda1-2.jpg')
            cy.wait(3000)
        })

        var a = 'b'
        it('Create gallery sa description od 1001 karaktera', () => {  //PASS - error
            createImg.create('Pobeda', a.repeat(1001), 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            cy.wait(3000)
        })

})