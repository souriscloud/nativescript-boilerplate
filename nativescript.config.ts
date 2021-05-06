import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'cloud.souris.ns.boilerplate',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;
