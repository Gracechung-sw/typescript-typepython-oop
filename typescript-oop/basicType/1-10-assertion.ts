{
  /**
   * Type Assertions ๐ฉ - ํ์ ๊ฐ์. ์ด๋ฅผ ์ฌ์ฉํ๋ ๊ฑด ๊ถ์ฅํ์ง ์์.
   *
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // result as string ์ฆ, ๋ result๊ฐ stringํ์์ด๋ผ๋ ๊ฑธ ํ์ ํด! ๊ทธ๋ฌ๋ ๋ฌธ์์ด์ ์ฌ์ฉํ  ์ ์๋ api(.length.. ๋ฑ)๋ฅผ ์ธ๋.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // ๐ฑ
  numbers!.push(2); // ๐ฑ !์ ๋ถ์ด๋ฉด ์ ๋ undefined๊ฐ ์๋์ผ ์ฅ๋ด. ์ข์ง ์์.

  const button = document.querySelector('class')!;
}
