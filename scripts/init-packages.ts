// 初始化 packages 所有组件。
import { resolve } from "path";
import {
  readdirSync,
  existsSync,
  rmSync,
  writeFileSync,
  readFileSync,
  mkdirSync,
  statSync,
} from "fs";

const packagesRootPath = resolve(import.meta.dir, "../packages");

// 初始化 git 忽略文件
function makeGitignore(packagePath: string) {
  writeFileSync(
    resolve(packagePath, ".gitignore"),
    readFileSync(resolve(import.meta.dir, "template/gitignore"), {
      encoding: "utf-8",
    }),
    { encoding: "utf-8" },
  );
}

function makeReadme(packagePath: string, packageName: string) {
  const templateContent = readFileSync(
    resolve(import.meta.dir, "template/readme"),
    { encoding: "utf-8" },
  );
  writeFileSync(
    resolve(packagePath, "README.md"),
    `
# @scode/${packageName}

${templateContent}
  `,
    { encoding: "utf-8" },
  );
}

function makePackageJson(packagePath: string, packageName: string) {
  const templateContent = readFileSync(
    resolve(import.meta.dir, "template/package"),
    { encoding: "utf-8" },
  );

  writeFileSync(
    resolve(packagePath, "package.json"),
    templateContent.replace("{{packageName}}", packageName),
    { encoding: "utf-8" },
  );
}

function capitalize(target: string) {
  const charList = target.split("");
  if (charList.length) {
    charList[0] = charList[0].toUpperCase();
  }
  while (charList.findIndex((char) => char === "-") >= 0) {
    const index = charList.findIndex((char) => char === "-");
    charList[index] = "";
    if (charList[index + 1]) {
      charList[index + 1] = charList[index + 1].toUpperCase();
    }
  }
  return charList.join("");
}

function makeSource(packagePath: string, packageName: string) {
  const srcPath = resolve(packagePath, "src");

  if (!existsSync(srcPath)) {
    // 生成 src 文件夹
    mkdirSync(srcPath);
  }

  const capitalizedPackageName = capitalize(packageName);

  // 生成 index.ts
  writeFileSync(
    resolve(srcPath, "index.ts"),
    `import { patchInstall } from "@scode/shared";

import ${capitalizedPackageName} from "./${capitalizedPackageName}.vue"

export const S${capitalizedPackageName} = patchInstall(${capitalizedPackageName}, {})
    `,
    { encoding: "utf-8" },
  );

  // 生成 typing
  writeFileSync(
    resolve(srcPath, "typing.ts"),
    `import type { ComponentSize } from "@scode/shared";

export interface ${capitalizedPackageName}Props {
  size?: ComponentSize;
}
`,
    { encoding: "utf-8" },
  );

  // 生成初始化组件

  // 生成 typing
  writeFileSync(
    resolve(srcPath, `${capitalizedPackageName}.vue`),
    `<template>
  ${packageName}
</template>

<script lang="ts" setup>
import type { ${capitalizedPackageName}Props } from "./typing"

defineOptions({
  name: "S${capitalizedPackageName}"
});

withDefaults(defineProps<${capitalizedPackageName}Props>(), {})
</script>
`,
    { encoding: "utf-8" },
  );
}

function makePackage(packageName: string) {
  const packagePath = resolve(packagesRootPath, packageName);

  makeGitignore(packagePath);
  makeReadme(packagePath, packageName);
  makePackageJson(packagePath, packageName);
  makeSource(packagePath, packageName);
}

function clearPackage(packageName: string) {
  const packagePath = resolve(packagesRootPath, packageName);

  let filePaths = readdirSync(packagePath).map((dirname) => {
    return resolve(packagePath, dirname);
  });

  while (filePaths.length) {
    const top = filePaths.shift();
    if (!top) break;

    if (statSync(top).isDirectory()) {
      filePaths = readdirSync(top)
        .map((dirname) => resolve(top, dirname))
        .concat(filePaths);
    } else {
      rmSync(top);
    }
  }
}

// 获取 packages 中所有空的组件包
function getAllEmptyPackages() {
  return readdirSync(packagesRootPath).filter((name) => {
    return (
      /^\w/.test(name) &&
      !existsSync(resolve(packagesRootPath, name, "package.json")) &&
      statSync(resolve(packagesRootPath, name)).isDirectory()
    );
  });
}

function init() {
  const emptyPackages = getAllEmptyPackages();

  emptyPackages.forEach(makePackage);
}

init();
