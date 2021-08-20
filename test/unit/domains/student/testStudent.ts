import { assert } from 'assertthat';

import { Student } from '../../../../src/domains/student/Student';

describe('Student', (): void => {
  it('can construct a valid Student.', async (): Promise<void> => {
    const student = new Student('username');

    assert.that(student).is.not.null();
  });

  it('Test test.', async (): Promise<void> => {
    assert.that(true).is.true();
  });

  it('asd.', async (): Promise<void> => {
    assert.that(false).is.false();
  });
});
