(function (w) {
  'use strict';
  var KEY = 'evisaAdminRecords';

  function norm(s) {
    return String(s || '').trim();
  }

  /* Mobile / paste se aane wale invisible chars hata ke compare karo – same device par bhi match ho */
  function normalizeForLookup(s) {
    return norm(s)
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, '')
      .trim();
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
      status: norm(r.status),
      buffered: r.hasOwnProperty('buffered') ? !!r.buffered : (prev && !!prev.buffered)
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

  /* Buffered records Track/Verify mein nahi dikhenge */
  function notBuffered(x) {
    return !x.buffered;
  }

  w.findEvisaByPassportVisa = function (passport, visa) {
    var p = normalizeForLookup(passport);
    var v = normalizeForLookup(visa);
    if (!p || !v) return undefined;
    return w.getEvisaAdminRecords().find(function (x) {
      return notBuffered(x) && normalizeForLookup(x.passportNumber) === p && normalizeForLookup(x.visaNumber) === v;
    });
  };

  w.findEvisaByApplicationCode = function (code) {
    var c = normalizeForLookup(code);
    if (!c) return undefined;
    return w.getEvisaAdminRecords().find(function (x) {
      return notBuffered(x) && normalizeForLookup(x.applicationCode) === c;
    });
  };

  w.toggleEvisaBufferedAt = function (index) {
    var a = w.getEvisaAdminRecords();
    if (index < 0 || index >= a.length) return;
    var r = a[index];
    var next = { passportNumber: r.passportNumber, visaNumber: r.visaNumber, applicationCode: r.applicationCode, status: r.status, buffered: !r.buffered };
    if (r.pdfDataUrl) next.pdfDataUrl = r.pdfDataUrl;
    a[index] = recordFrom(next, r);
    localStorage.setItem(KEY, JSON.stringify(a));
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
