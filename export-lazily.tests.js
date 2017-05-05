/* eslint "no-unused-expressions": "off" */
import chai from 'chai';

import exportLazily from './export-lazily';

chai.should();

describe('exportLazily', () => {
  it('should exist', () => {
    exportLazily.should.exist;
  });

  it('should import a function lazily', () => {
    const func = exportLazily(() => require('./module').func);
    func.should.exist;
    const result = func();
    result.should.be.equal('loaded');
  });

  it('should import a class lazily', () => {
    const Class = exportLazily(() => require('./module').Class);
    Class.should.exist;
    const obj = new Class();
    obj.should.be.instanceof(Class);
  });

  it('should import an object lazily', () => {
    const obj = exportLazily(() => require('./module').obj);
    obj.should.exist;
    obj.test.should.exist;
  });
});
