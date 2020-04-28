const {Person} = require('../src/person')
let person = new Person('Tshiamo', '24', 'Male',
    ['Coding', ' Dancing',
        ' Love kids'])
        
describe('Test Attributes of class Person', function(){
    
    it('Should be the assigned name attribute in Person', function(){
        expect(person.name).toBe('Tshiamo')
    })
    it('Should be the assigned age attribute in Person', function(){
        expect(person.age).toBe('24')
    })
    it('Should be the assigned gender attribute in Person', function(){
        expect(person.gender).toBe('Male')
    })
    it('Should be the assigned interests attribute in Person', function(){
        expect(person.interests).toContain('Coding', ' Dancing',
        ' Love kids')
    }) 
})