const _id = Symbol('id')
const _email = Symbol('email')
const _phone = Symbol('phone')
const _alternativePhone = Symbol('alternativePhone')
const _address = Symbol('address')

class Contact{
    constructor({ id, email, phone, alternativePhone, address }) {
        //destructure way because order is important here
        this[_id] = id
        this[_email] = email || ''
        this[_phone] = phone ||''
        this[_alternativePhone] = alternativePhone ||''
        this[_address] = address ||null
    }

    get id() {
        return this[_id]
    }

    get email() {
        return this[_email]
    }

    set email(value) {
        this[_email] = value
    }

    get phone() {
        return this[_phone]
    }

    set phone(value) {
        this[_phone] = value
    }

    get alternativePhone() {
        return this[_alternativePhone]
    }

    set alternativePhone(value) {
        this[_alternativePhone] = value
    }

    get address() {
        return this[_address]
    }

    set address(value) {
        this[_address] = value
    }

    toString() {
        return `
        ID: ${this[_id]}
        email: ${this[_email]} ,
        phone: ${this[_phone]}, 
        alternativePhone: ${this[_alternativePhone]},
        address: ${this[_address]},
        `
    }
}



module.exports = Contact