import uuid from 'uuid'


exports.makePerson = function (firstName, LastName) {
    return {
        id: uuid(),
        fullName: `${firstName} ${LastName}`,
    }
}