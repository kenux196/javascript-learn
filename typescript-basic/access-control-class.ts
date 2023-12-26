/**
 * 접근 제어자
 * public, protected, private
 * 자바스크립트로 컴파일 후에는 제거된다.
 */

class Parent {
  openInfo = '공개 정보';
  protected legacy = '유산';
  private parentSecret = '부모의 비밀정보';

  checkMySecret() {
    console.log(this.parentSecret);
  }
}

class Child extends Parent {
  private secret = '자녀의 비밀정보';

  checkLegacy() {
    console.log(this.legacy);
  }

  checkParentSecret() {
    console.log(super.parentSecret);
  }
}

class Someone {
  checkPublicInfo() {
    const p = new Parent();
    console.log(p.openInfo);
    console.log(p.legacy);
    console.log(p.parentSecret);
  }
}
