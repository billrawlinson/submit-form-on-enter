# submit-form-on-enter
A simple directive for Angular 1.x apps that you can use to make sure a form will
submit when the <enter> key is pressed but there are no buttons on the form
and there is more than one control on the form.

Idea basically pullled from the docs about submitting a form and preventing the default action at
https://docs.angularjs.org/api/ng/directive/form#submitting-a-form-and-preventing-the-default-action

The button itself is pulled from a stack overflow answer:
http://stackoverflow.com/a/15418063/7329


## Usage

Once you've imported the directive into your application usage is pretty straight
forward:

```htm
<form>

  <submit-form-on-enter />

</form>
```

That's it.

## Backkground.
I had tried to just have a hidden button using ng-hide but it didn't work in Internet
Explorer. This approach seems to work across all of the major browsers.
