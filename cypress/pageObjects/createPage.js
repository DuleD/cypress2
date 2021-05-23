class CreateImg {
    get imgName () {
        return cy.get('input[id="title"]')
    }
    
    get imgUrl () {
        return cy.get('input[type="url"]')
    }

    get imgDescr () {
        return cy.get('input[id="description"]')
    }

    get submitBtn () {
        return cy.get('form > button:nth-of-type(1)')
    }

    create(imeSlike, descSlike, urlSlike) {
        imeSlike = imeSlike || undefined  //if kako bismo mogli da smestimo prazan string
        if (imeSlike != undefined) {
            this.imgName.type(imeSlike)
        }

        descSlike = descSlike || undefined
        if (descSlike != undefined) {
            this.imgDescr.type(descSlike)
        }
        
        urlSlike = urlSlike || undefined
        if (urlSlike != undefined) {
            this.imgUrl.type(urlSlike)
        }

        //this.imgName.type(imeSlike)  //this znaci dobavi element iz postojece klase (class AuthLogin)
        //this.imgUrl.type(urlSlike)
        this.submitBtn.click()
    }
}

export const createImg = new CreateImg()

