{
  "profiles": {
    "{{BlazorAppServer}}": {
      "commandName": "Project",
      "dotnetRunMessages": "true",
      "launchBrowser": true,
      "launchUrl": "https://teams.microsoft.com/l/app/%TEAMSAPPID%?installAppPackage=true&webjoin=true&appTenantId=%TENANTID%&login_hint=%USERNAME%",
      "applicationUrl": "https://localhost:44302;http://localhost:2544",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      },
      "hotReloadProfile": "aspnetcore"
    }
  }
}