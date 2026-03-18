(function (w) {
  'use strict';
  var KEY = 'evisaAdminRecords';

  function norm(s) {
    return String(s || '').trim();
  }

  w.getEvisaAdminRecords = function () {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch (e) {
      return [];
    }
  };

  function recordFrom(r, prev) {
    var item = {
      passportNumber: norm(r.passportNumber),
      visaNumber: norm(r.visaNumber),
      applicationCode: norm(r.applicationCode),
      status: norm(r.status)
    };
    if (r.pdfDataUrl === null || r.pdfDataUrl === '') {
      return item;
    }
    if (r.pdfDataUrl) {
      item.pdfDataUrl = r.pdfDataUrl;
    } else if (prev && prev.pdfDataUrl) {
      item.pdfDataUrl = prev.pdfDataUrl;
    }
    return item;
  }

  w.addEvisaAdminRecord = function (r) {
    var a = w.getEvisaAdminRecords();
    a.push(recordFrom(r, null));
    localStorage.setItem(KEY, JSON.stringify(a));
  };

  w.updateEvisaAdminRecordAt = function (index, r) {
    var a = w.getEvisaAdminRecords();
    if (index < 0 || index >= a.length) return;
    var prev = a[index];
    a[index] = recordFrom(r, prev);
    localStorage.setItem(KEY, JSON.stringify(a));
  };

  w.removeEvisaAdminRecordAt = function (index) {
    var a = w.getEvisaAdminRecords();
    if (index < 0 || index >= a.length) return;
    a.splice(index, 1);
    localStorage.setItem(KEY, JSON.stringify(a));
  };

  w.findEvisaByPassportVisa = function (passport, visa) {
    var p = norm(passport).toLowerCase();
    var v = norm(visa).toLowerCase();
    return w.getEvisaAdminRecords().find(function (x) {
      return x.passportNumber.toLowerCase() === p && x.visaNumber.toLowerCase() === v;
    });
  };

  w.findEvisaByApplicationCode = function (code) {
    var c = norm(code).toLowerCase();
    return w.getEvisaAdminRecords().find(function (x) {
      return x.applicationCode.toLowerCase() === c;
    });
  };

  w.statusBadgeClass = function (status) {
    var s = norm(status).toLowerCase();
    if (s === 'approved') return 'bg-green-100 text-green-800';
    if (s === 'pending') return 'bg-yellow-100 text-yellow-800';
    if (s === 'rejected' || s === 'reject') return 'bg-red-100 text-red-800';
    if (s.indexOf('review') >= 0) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };
})(window);
