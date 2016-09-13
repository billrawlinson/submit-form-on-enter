/*
  Submitting a form and preventing the default action at
  https://docs.angularjs.org/api/ng/directive/form#submitting-a-form-and-preventing-the-default-action

  NOTE: I tried to use a hidden (ng-hide) option but IE wouldn't submit if the button were hidden that way. WTF?
  so this hacky crap is here putting a button off screen.
*/

import submitFormOnEnterTemplate from './submit-form-on-enter.html!text';

export default class SubmitFormOnEnter {
  static directiveName = 'submitFormOnEnter';

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = submitFormOnEnterTemplate;
    this.require = '^form';
    this.scope = {
    };
  }

  static directiveFactory() {
    SubmitFormOnEnter.instance = new SubmitFormOnEnter();
    return SubmitFormOnEnter.instance;
  }
}
