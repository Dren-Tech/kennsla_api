import { assert } from 'assertthat';

import { Student } from '../../../../src/domains/student/Student';

describe('Student', (): void => {
  it('can construct a valid Student.', async (): Promise<void> => {
    const student = new Student('username');

    assert.that(student).is.not.null();
    assert.that(student).is.instanceOf(Student);
  });

  it('can get and set propertoes.', async (): Promise<void> => {
    // Arrange
    const username = 'username';
    const firstname = 'Firstname';
    const lastname = 'Lastname';

    const student = new Student();

    // Act
    student.username = username;
    student.firstname = firstname;
    student.lastname = lastname;

    // Assert
    assert.that(student.username).is.equalTo(username);
    assert.that(student.firstname).is.equalTo(firstname);
    assert.that(student.lastname).is.equalTo(lastname);
  });
});
