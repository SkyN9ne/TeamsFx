// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @author Di Lin <junhan@microsoft.com>
 */

import path from "path";
import "mocha";
import { AadValidator, FunctionValidator } from "../../commonlib";
import {
  getSubscriptionId,
  getTestFolder,
  getUniqueAppName,
  cleanUp,
  setSimpleAuthSkuNameToB1Bicep,
  readContextMultiEnv,
} from "../commonUtils";
import AppStudioLogin from "../../../src/commonlib/appStudioLogin";
import { environmentManager } from "@microsoft/teamsfx-core";
import { KeyVaultValidator } from "../../commonlib/keyVaultValidator";
import { CliHelper } from "../../commonlib/cliHelper";
import { Capability, Resource } from "../../commonlib/constants";

describe("Test Azure Key Vault", function () {
  const testFolder = getTestFolder();
  const subscription = getSubscriptionId();
  const appName = getUniqueAppName();
  const projectPath = path.resolve(testFolder, appName);
  const env = environmentManager.getDefaultEnvName();

  after(async () => {
    await cleanUp(appName, projectPath, true, false, false, true);
  });

  it(`tab + key vault + function project happy path`, async function () {
    // Create tab + key vault + function project
    await CliHelper.createProjectWithCapability(appName, testFolder, Capability.Tab);
    await CliHelper.addResourceToProject(projectPath, Resource.AzureKeyVault);
    await CliHelper.addResourceToProject(projectPath, Resource.AzureFunction);

    await setSimpleAuthSkuNameToB1Bicep(projectPath, env);
    await CliHelper.setSubscription(subscription, projectPath);

    // Provision
    await CliHelper.provisionProject(projectPath);

    // Validate Provision
    {
      const context = await readContextMultiEnv(projectPath, env);

      // Validate Aad App
      const aad = AadValidator.init(context, false, AppStudioLogin);
      await AadValidator.validate(aad);

      // Validate Function App
      const functionValidator = new FunctionValidator(context, projectPath, env);
      await functionValidator.validateProvision();

      // Validate Key Vault
      const keyVault = new KeyVaultValidator(context, projectPath, env);
      await keyVault.validate();
    }
  });
});