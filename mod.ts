import { cyan, green } from "https://deno.land/std@0.168.0/fmt/colors.ts";

const currentYear = new Date().getFullYear();

const author = prompt(`🤯 What is your ${cyan("name")}?`);

const wantCreateMIT = confirm(
  `😍 Do you want to create the ${green("MIT")} LICENSE?`,
);

if (wantCreateMIT) {
  Deno.writeTextFile(
    "LICENSE",
    `MIT LICENSE

Copyright (c) ${currentYear} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
    `,
  );
}

const wantCreateReadme = confirm(
  `🤗 Do you want to create the ${cyan("README")}?`,
);

if (wantCreateReadme) {
  const projectName = prompt(
    `🥰 what is your ${green("project")} name?`,
  );

  await Deno.writeTextFile(
    "README.md",
    `# ${projectName}
    
<br />

## License

Made with [${author}](https://github.com/${author})

Published under [MIT License](./LICENSE).`,
  );
}

console.log(`✅ Command executed successfully`);
