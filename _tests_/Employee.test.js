// Import constructor
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Kip', 7, 'Kip@kip.org');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// name getter
test('name', () => {
    const employee = new Employee('Kip', 7, 'Kip@kip.org');

    expect(employee.getName()).toEqual(expect.any(String));
});

// id getter
test('id', () => {
    const employee = new Employee('Kip', 7, 'Kip@kip.org');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// email getter
test('email', () => {
    const employee = new Employee('Kip', 7, 'Kip@kip.org');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// role getter
test('role', () => {
    const employee = new Employee('Kip', 7, 'Kip@kip.org');

    expect(employee.getRole()).toEqual("Employee");
});