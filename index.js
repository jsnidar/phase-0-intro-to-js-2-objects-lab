// Write your solution in this file!
const employee = {}

employee.name = 'Jeremiah Snidar'
employee.streetAdress = "1234 Home Street"

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newEmployee = Object.assign({}, employee, { [key]: value })
return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
const newerEmployee = Object.assign(employee, { [key]: value })
return newerEmployee
}

function deleteFromEmployeeByKey(object, key, value) {
 const evenNewerEmployee = Object.assign({}, employee)
 delete evenNewerEmployee[key]
 return evenNewerEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
