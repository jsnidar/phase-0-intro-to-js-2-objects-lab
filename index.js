const employee = {}
employee.name = 'Jeremiah Snidar'
employee.streetAddress = '2000 S. Corona Street'

function updateEmployeeWithKeyAndValue(obj, key, value) {
const newObj = Object.assign({}, obj, {[key]: value})
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = Object.assign(employee, {[key]: value});
    return newObj;
}

function deleteFromEmployeeByKey (obj, key) {
   const newObj = Object.assign({}, obj);
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  const newObj = Object.assign(employee);
  delete newObj[key];
  return newObj;
} 
