
dragula([$('r1'), $('r2'), $('r3'), $('l1'), $('l2'), $('l3')], {
    copy: function (el, source) {
            return source === $('r1') || source === $('r2') || source === $('r3');
    },
    accepts: function (el, target) {
            return target === $('l1') || target === $('l2') || target === $('l3');
    }

});


var crossvent = require('crossvent');

function clickHandler (e) {
      var target = e.target;
      if (target === sortable) {
              return;
      }
        target.innerHTML += ' [click!]';

        setTimeout(function () {
                target.innerHTML = target.innerHTML.replace(/ \[click!\]/g, '');
        }, 500);

}

function $ (id) {
    return document.getElementById(id);
}
