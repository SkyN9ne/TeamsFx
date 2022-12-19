{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
      "resourceBaseName": {
        "value": "commandbot${{RESOURCE_SUFFIX}}"
      },
      "botAadAppClientId": {
        "value": "${{BOT_ID}}"
      },
      "botAadAppClientSecret": {
        "value": "${{SECRET_BOT_PASSWORD}}"
      },
      "webAppSKU": {
        "value": "B1"
      },
      "botDisplayName": {
        "value": "{%appName%}"
      }
    }
  }