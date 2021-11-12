const Manger = require('../lib/Manager');

test('create Manager', () => {
    const employee = new Manger('Kip, 7, Kip@Kip.org, 7');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})
// name getter
test('name', () => {
    const manager = new Manager('Kip', 7, 'Kip@kip.org');

    expect(manager.getName()).toEqual(expect.any(String));
});

// id getter
test('id', () => {
    const manager = new Manager('Kip', 7, 'Kip@kip.org');

    expect(manager.getId()).toEqual(expect.any(Number));
});

// email getter
test('email', () => {
    const manager = new Manager('Kip', 7, 'Kip@kip.org');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

// role getter
test('role', () => {
    const manager = new Manager('Kip', 7, 'Kip@kip.org');

    expect(manager.getRole()).toEqual("Manager");
});