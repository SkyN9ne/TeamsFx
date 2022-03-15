// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Locale } from "../core/globalVars";
import { getResourceFolder } from "../folder";
import * as path from "path";
import fs from "fs-extra";
import * as util from "util";

export function getLocalizedString(key: string, ...params: any[]): string {
  const nlsFileName = Locale ? `package.nls.${Locale}.json` : "package.nls.json";
  const nlsFilePath = path.join(getResourceFolder(), nlsFileName);
  const json = fs.readJSONSync(nlsFilePath);
  let value = json[key];
  if (value && params && params.length > 0) {
    value = util.format(value, ...params);
  }
  return value || "";
}