(function(angular) {
  'use strict';

  angular.module('itcast-tms.directives')
    .directive('autoActive', ['$document', autoActive]);;

  function autoActive($document) {
    return {
      link: function(scope, element, attributes, controller) {
        element.on('click', () => {
          element.parent().children().removeClass('active');
          element.addClass('active');
        });
      }
    };
  }

}(angular));
