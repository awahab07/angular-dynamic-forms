'use strict';

/**
 * @ngdoc function
 * @name dynamicFormsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dynamicFormsApp
 */
angular.module('dynamicFormsApp')
  .controller('MainCtrl', function (formlyVersion) {
    var vm = this;
    // funcation assignment
    vm.finishWizard = finishWizard;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: '',
      url: '' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = ''; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {};
    
    vm.sections = [
        {
            title: "Section 1",
            fields: [
                {
                  key: 'email',
                  type: 'input',
                  templateOptions: {
                    label: 'Username',
                    type: 'email',
                    placeholder: 'Email address',
                    required: true
                  }
                }
            ]
        },
        {
            title: "Section 2",
            fields: [
                {
                  key: 'firstName',
                  type: 'input',
                  templateOptions: {
                    label: 'First Name',
                    required: true
                  }
                },
                {
                  key: 'lastName',
                  type: 'input',
                  templateOptions: {
                    label: 'Last Name',
                    required: true
                  }
                }
            ]
        }
    ];
    
    /*vm.fields = {
      step1: [
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Username',
            type: 'email',
            placeholder: 'Email address',
            required: true
          }
        }
      ],
      step2: [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'First Name',
            required: true
          }
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
            required: true
          }
        }
      ]
    };*/

    vm.originalFields = angular.copy(vm.fields);
    
    vm.formAttemp = Date().substring(0, 33);
    
    // function definition
    function finishWizard() {
      alert(JSON.stringify(vm.model), null, 2);
      if(Ext && Ext.isSpace) {
          var spaceStorage = Ext.space.SecureLocalStorage.get("DataEntryForm_1");
          spaceStorage.set(formAttemp, vm.model);
      }
    }
  });
