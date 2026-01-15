var sharedBy = ghViewCount.sharedBy;
if (sharedBy === 'niadzgn.blogspot.com') {
  var vieghount = ghVcThumbActive.id;
  if (ghVcThumbActive) {
    var dView = document.createElement("div");
    dView.classList.add("niadzgn-view-post", "psVcActive", "hidden");
    dView.setAttribute('data-view', vieghount);
    dView.setAttribute("view-ispost", 'true');
    dView.innerHTML = "<svg class='line'viewBox='0 0 24 24'xmlns='http://www.w3.org/2000/svg'><g transform='translate(2.000000, 4.000000)'><path d='M13.1643,8.0521 C13.1643,9.7981 11.7483,11.2141 10.0023,11.2141 C8.2563,11.2141 6.8403,9.7981 6.8403,8.0521 C6.8403,6.3051 8.2563,4.8901 10.0023,4.8901 C11.7483,4.8901 13.1643,6.3051 13.1643,8.0521 Z'/><path d='M0.7503,8.0521 C0.7503,11.3321 4.8923,15.3541 10.0023,15.3541 C15.1113,15.3541 19.2543,11.3351 19.2543,8.0521 C19.2543,4.7691 15.1113,0.7501 10.0023,0.7501 C4.8923,0.7501 0.7503,4.7721 0.7503,8.0521 Z'/></g></svg>";
    document.querySelectorAll(".separator")[0x0].appendChild(dView);
  }
  function intToString(c) {
    c = c.toString().replace(/[^0-9.]/g, '');
    if (c < 0x3e8) {
      return c;
    }
    const _0x3e2252 = [{
      'value': 0x3e8,
      'symbol': 'K'
    }, {
      'value': 0xf4240,
      'symbol': 'M'
    }, {
      'value': 0x3b9aca00,
      'symbol': 'B'
    }, {
      'value': 0xe8d4a51000,
      'symbol': 'T'
    }];
    let _0x46f4f9;
    for (_0x46f4f9 = _0x3e2252.length - 0x1; _0x46f4f9 >= 0x0; _0x46f4f9--) {
      if (c >= _0x3e2252[_0x46f4f9].value) {
        break;
      }
    }
    return (c / _0x3e2252[_0x46f4f9].value).toFixed(0x2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + _0x3e2252[_0x46f4f9].symbol;
  }
  function getCounter() {
    const _0x452d8c = document.querySelector(".niadzgn-view-post");
    if (!_0x452d8c) {
      return;
    }
    const _0x246b88 = _0x452d8c.getAttribute("view-ispost") !== 'false';
    const _0x1f5b55 = firebase.database().ref(vieghount);
    _0x1f5b55.once("value").then(_0x1d4d7f => {
      let _0x3b00aa = _0x1d4d7f.val();
      if (_0x3b00aa === null) {
        _0x3b00aa = 0x1;
      } else if (_0x246b88 && ghViewCount.type === '1' || sessionStorage.getItem("vcStorage") !== vieghount) {
        _0x3b00aa++;
        sessionStorage.setItem("vcStorage", vieghount);
      }
      _0x1f5b55.set(_0x3b00aa);
      _0x452d8c.classList.remove('hidden');
      if (ghViewCount.abbreviation === '0') {
        _0x452d8c.setAttribute('data-text', _0x3b00aa);
      } else {
        if (ghViewCount.abbreviation === '1') {
          _0x452d8c.setAttribute('data-text', intToString(_0x3b00aa));
        } else if (ghViewCount.abbreviation === '2') {
          _0x452d8c.setAttribute('data-text', _0x3b00aa.toLocaleString("id-ID"));
        }
      }
    });
  }
  (function () {
    const _0x287ecc = function () {
      let _0x4a1e6e = true;
      return function (a, b) {
        const _0x2d5626 = _0x4a1e6e ? function () {
          if (b) {
            const _0x22d995 = b.apply(a, arguments);
            b = null;
            return _0x22d995;
          }
        } : function () {};
        _0x4a1e6e = false;
        return _0x2d5626;
      };
    }();
    function _0x8bb043(a, b) {
      const _0x1adf9f = _0x287ecc(this, function () {
        return _0x1adf9f.toString().search("(((.+)+)+)+$").toString().constructor(_0x1adf9f).search("(((.+)+)+)+$");
      });
      _0x1adf9f();
      const _0x273e6d = document.createElement('script');
      _0x273e6d.src = a;
      _0x273e6d.async = true;
      _0x273e6d.onload = b;
      document.head.appendChild(_0x273e6d);
    }
    _0x8bb043("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js", function () {
      _0x8bb043('https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js', function () {
        if (!firebase.apps.length) {
          firebase.initializeApp({
            'databaseURL': ghViewCount.firebaseUrl
          });
        }
        getCounter();
      });
    });
  })();
} else {
  window.location.href = 'https://niadzgn.blogspot.com';
}