(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './SecurityContext', './SecurityContextEncodedTokenInitializer', './SecurityContextInitializer', './SecurityContextTokenInitializer', './Identities/Identity', './Identities/IdentityFactory', './Identities/Identity', './Identities/OAuthIdentity', './Identities/IPrincipal', './Identities/Principal', './Tokens/Parsers/TokenParsed', './Tokens/Parsers/TokenParser'], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(require('./SecurityContext'));
    __export(require('./SecurityContextEncodedTokenInitializer'));
    __export(require('./SecurityContextInitializer'));
    __export(require('./SecurityContextTokenInitializer'));
    __export(require('./Identities/Identity'));
    __export(require('./Identities/IdentityFactory'));
    __export(require('./Identities/Identity'));
    __export(require('./Identities/OAuthIdentity'));
    __export(require('./Identities/IPrincipal'));
    __export(require('./Identities/Principal'));
    __export(require('./Tokens/Parsers/TokenParsed'));
    __export(require('./Tokens/Parsers/TokenParser'));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFDQSxpQkFBYyxtQkFBbUIsQ0FBQyxFQUFBO0lBQ2xDLGlCQUFjLDBDQUEwQyxDQUFDLEVBQUE7SUFDekQsaUJBQWMsOEJBQThCLENBQUMsRUFBQTtJQUM3QyxpQkFBYyxtQ0FBbUMsQ0FBQyxFQUFBO0lBRWxELGlCQUFjLHVCQUF1QixDQUFDLEVBQUE7SUFDdEMsaUJBQWMsOEJBQThCLENBQUMsRUFBQTtJQUM3QyxpQkFBYyx1QkFBdUIsQ0FBQyxFQUFBO0lBQ3RDLGlCQUFjLDRCQUE0QixDQUFDLEVBQUE7SUFDM0MsaUJBQWMseUJBQXlCLENBQUMsRUFBQTtJQUN4QyxpQkFBYyx3QkFBd0IsQ0FBQyxFQUFBO0lBV3ZDLGlCQUFjLDhCQUE4QixDQUFDLEVBQUE7SUFDN0MsaUJBQWMsOEJBQThCLENBQUMsRUFBQSIsImZpbGUiOiJzcmMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9PQXV0aElkZW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lQcmluY2lwYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0lUb2tlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0lUb2tlbkNvbnRlbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9JVG9rZW5IZWFkZXInO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvQWNjZXNzVG9rZW4vSUFjY2Vzc1Rva2VuQ29udGVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9JZGVudGl0eVRva2VuL0lJZGVudGl0eVRva2VuQ29udGVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL0lUb2tlblBhcnNlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuXHJcbiJdfQ==
