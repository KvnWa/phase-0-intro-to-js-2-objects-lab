const employee = {
    name: "Jim",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

const employee2 = updateEmployeeWithKeyAndValue(
    Bob,
    "Broadway",
    "Greene"
);

employee2.name;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const delEmployee = Object.assign({}, employee)
    delete delEmployee[key]
    return delEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
