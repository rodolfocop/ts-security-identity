/// <reference path='../../typings/main.d.ts' />
import {SecurityContext} from '../src/SecurityContext';
import {SecurityContextInitializer} from '../src/SecurityContextInitializer';

describe('SecurityContextInitializer', () => {
    
    const encodedAccessToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
    
    const accessToken:any = JSON.parse(`{"iss":"https://pjmtsts/","aud":"https://pjmtsts/resources","exp":1462403582,"nbf":1462399982,"client_id":"2380","scope":["openid","profile","pjmt_profile","email","permissao_2380"],"sub":"16843","auth_time":1462397042,"idp":"idsrv","permissao|2380:Dashboard":"Acesso","permissao|2380:Dashboard.Graficos":"Acesso","permissao|2380:Dashboard.Graficos.Diversos":"Acesso","permissao|2380:Dashboard.Graficos.Sobre":"Acesso","permissao|2380:Dashboard.Relatorio.RelatorioCriacao":"Acesso","permissao|2380:Dashboard.Relatorios.RelatorioAcessos":["Acesso","Alterar","Excluir","Novo"],"permissao|2380:Home":"Acesso","permissao|2380:Noticias":"Acesso","permissao|2380:Relatorios":"Acesso","amr":["password"]}`);

    const encodedIdentityToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiMjM4MCIsImV4cCI6MTQ2MTg4MjkzNSwibmJmIjoxNDYxODgyNjM1LCJub25jZSI6IjEyMjMwMjA2NTU5NDkyMDgiLCJpYXQiOjE0NjE4ODI2MzUsImF0X2hhc2giOiIzeV9iSi1oZEZiMjE3VHNpQUVpVnZ3IiwiY19oYXNoIjoibGhMRDFOaTNkcms0aEJKYXBQRUpaQSIsInNpZCI6IjNkMGQzNWYxNGFjYWQ3MzEyM2E2Y2FmMGU5NTY5NGIzIiwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwiYW1yIjpbInBhc3N3b3JkIl19.hS9vFGcUq6j3CBRsUDm2RG0zwyNbdRijN1L_f7EmX4d5o8Wxh9RaWxPmYUSAGt211lrnp1W0zm7HfWqOu3szJnhCWKfX_P9CYuc-3NyWXxL9iMZM07lzweunJeYrWM99KCWT9il_ptR3cvNBEZPBBHBmzQ5EPbHqMga35U3U0rHTuC1134qvDFE-2YoGyNXxP5KD-pyVlx0hPXOsfv9xYfKr9C31eEMqyyavZWpmiH8Ywz1vlJTMdX6Y9Gm7599Ojqe66mRAaDX7_rf8kecgvkSZD0uozHPGIX-Y8ORPS83AHXTOFOAXoO3hvxnJJ6iN1oVJSzWVsI59VFbvMIawCw";
    
    
  beforeEach(() => {
      SecurityContext.Reset();
    });

    it('InitializeWithEncodedTokens should instantiate a Principal', () => {
    
        SecurityContextInitializer.InitializeWithEncodedTokens([encodedAccessToken, encodedIdentityToken]);
        
        expect(SecurityContext.Current.Principal).toBeDefined();
    
    });
    
    it('InitializeWithEncodedTokens should have a User authenticated', () => {
        
        SecurityContextInitializer.InitializeWithEncodedTokens([encodedAccessToken, encodedIdentityToken]);
        
        expect(SecurityContext.Current.Principal.IsAuthenticated).toBeTruthy();
    
    });
    
    it('InitializeWithTokens should instantiate a Principal', () => {
    
        SecurityContextInitializer.InitializeWithTokens([accessToken]);
        
        expect(SecurityContext.Current.Principal).toBeDefined();
    
    });
    
    it('InitializeWithTokens should have a User authenticated', () => {
        
        SecurityContextInitializer.InitializeWithTokens([accessToken]);
        
        expect(SecurityContext.Current.Principal.IsAuthenticated).toBeTruthy();
    
    });
    
    
    it('InitializeWithTokens should have a User authenticated', () => {
        
        SecurityContextInitializer.InitializeWithTokens( [ { name:'João Vitor' } ] );
        
        expect(SecurityContext.Current.Principal.Identity.Name).toBe('João Vitor');
    
    });
    
});
