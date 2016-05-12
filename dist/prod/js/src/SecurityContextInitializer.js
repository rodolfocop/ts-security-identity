"use strict";
var SecurityContext_1 = require('./SecurityContext');
var SecurityContextTokenInitializer_1 = require('./SecurityContextTokenInitializer');
var SecurityContextEncodedTokenInitializer_1 = require('./SecurityContextEncodedTokenInitializer');
var SecurityContextInitializer = (function () {
    function SecurityContextInitializer() {
    }
    SecurityContextInitializer.InitializeWithTokens = function (tokens) {
        var securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(tokens);
        SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
        return SecurityContext_1.SecurityContext.Current;
    };
    SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
        var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.SecurityContextEncodedTokenInitializer(encodedTokens);
        SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
        return SecurityContext_1.SecurityContext.Current;
    };
    return SecurityContextInitializer;
}());
exports.SecurityContextInitializer = SecurityContextInitializer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUdsRCxnREFBOEMsbUNBQW1DLENBQUMsQ0FBQTtBQUNsRix1REFBcUQsMENBQTBDLENBQUMsQ0FBQTtBQUloRztJQUFBO0lBd0JBLENBQUM7SUFmaUIsK0NBQW9CLEdBQWxDLFVBQW1DLE1BQWE7UUFFNUMsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLGlFQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdFLGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBRWEsc0RBQTJCLEdBQXpDLFVBQTBDLGFBQXVCO1FBRTdELElBQUksMEJBQTBCLEdBQUcsSUFBSSwrRUFBc0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzRixpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCcUIsa0NBQTBCLDZCQXdCL0MsQ0FBQSIsImZpbGUiOiJTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbi8vaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmltcG9ydCB7U2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcn0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyJztcclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcn0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcic7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI+KHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDp7IG5ldyguLi5hcmdzKTogVCB9LCAuLi5hcmdzKTogVFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyB0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcihhcmdzKTtcclxuICAgIC8vICAgICBsZXQgY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSA8VD5zZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgIC8vICAgICByZXR1cm4gY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhUb2tlbnModG9rZW5zOiBhbnlbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKHRva2Vucyk7XHJcbiAgICAgICAgLy9sZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciwgdG9rZW5zKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhFbmNvZGVkVG9rZW5zKGVuY29kZWRUb2tlbnM6IHN0cmluZ1tdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyKGVuY29kZWRUb2tlbnMpO1xyXG4gICAgICAgIC8vbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLCBlbmNvZGVkVG9rZW5zKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19
