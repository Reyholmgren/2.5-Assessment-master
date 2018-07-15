module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },

    'check evens and odds': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@eoInput', '16')
            .click('@eoBtn')
            .expect.element('@evenResults').text.to.equal('Evens: [16]')
    
    },

    'check filter string': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@filterInput', 'James')
            .click('@filterBtn')
            .expect.element('@filterResults').text.to.equal('Filtered Names: [ "James" ]')
    
    },

    'check palindrome': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@palindromeIn', 'kayak')
            .click('@palindromeBtn')
            .expect.element('@palindromeOut').text.to.equal('Palindrome: true')
    
    },

    'check sum': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@sumInput1', '16')
            .setValue('@sumInput2', '16')
            .click('@addBtn')
            .expect.element('@sumResults').text.to.equal('Sum: 32')
    
    }

}