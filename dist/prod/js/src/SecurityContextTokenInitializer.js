(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './Identities/IdentityFactory', './Identities/Identity'], factory);
    }
})(function (require, exports) {
    "use strict";
    var IdentityFactory_1 = require('./Identities/IdentityFactory');
    var Identity_1 = require('./Identities/Identity');
    var SecurityContextTokenInitializer = (function () {
        function SecurityContextTokenInitializer(tokens) {
            this.tokens = tokens;
        }
        SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
            var userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, this.tokens);
            securityContext.Principal.Identity = userCreated;
        };
        return SecurityContextTokenInitializer;
    }());
    exports.SecurityContextTokenInitializer = SecurityContextTokenInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBR0EsZ0NBQThCLDhCQUE4QixDQUFDLENBQUE7SUFDN0QseUJBQXVCLHVCQUF1QixDQUFDLENBQUE7SUFJL0M7UUFFSSx5Q0FBbUIsTUFBYTtZQUFiLFdBQU0sR0FBTixNQUFNLENBQU87UUFHaEMsQ0FBQztRQUVNLG9EQUFVLEdBQWpCLFVBQWtCLGVBQWdDO1lBRTlDLElBQUksV0FBVyxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNyRCxDQUFDO1FBQ0wsc0NBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLHVDQUErQixrQ0FZM0MsQ0FBQSIsImZpbGUiOiJTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnMgOmFueVtdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4gICAgIl19
