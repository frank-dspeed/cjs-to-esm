/** 
 * some Stealify Lang Methods Written in es2022 but using 
 * NodeJS Modules First version in a unjectable way.
 */
import { createRequire } from 'node:module';

const getModuleNamespace = createRequire(import.meta.url);

/**
 * Why do we not use directly import fs from 'fs'? 
 * because not all environments apply that transform magic!
 * but nodejs does and bundlers do but we stay Raw!
 */
const fs = getModuleNamespace('fs');
const path = getModuleNamespace('path');

/** NodeJS Modules are always consumed only via require() as they are sync instantiated there is no real node nativ ESM Implementation */
/** NodeJS Supports nativ Modules c,c++,.node modules only via sync loading (require) as this functions come from the nativ c part of nodejs. */

