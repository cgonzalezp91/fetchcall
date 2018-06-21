'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import swal from 'sweetalert';
export default (() => {
  var _ref = _asyncToGenerator(function* (url, data) {
    let PostData = null;
    if (data) {
      PostData = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
        dataType: 'json',
        credentials: 'include'
      };
      PostData.body = JSON.stringify(data);
    }
    try {
      const response = yield fetch(url, PostData);
      const jdata = yield response.json();
      if (!response.ok) {
        swal(jdata.Message);
        throw Error(jdata.Message);
      }
      return jdata.d;
    } catch (e) {
      console.log(e);
    }
  });

  function fetchcall(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return fetchcall;
})();
