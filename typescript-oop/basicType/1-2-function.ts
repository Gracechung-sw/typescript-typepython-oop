{
  // JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript โจ
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ๐ฉ
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript โจ
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript โจ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    /**
     * lastName?: string ๋ lastName: string | undefined ๋ ๊ฐ์๊ฑฐ ์๋๊ฐ์? NO!!
     * lastName?: string ์ด๋ฉด printName('Ellie'); ์ด๋ฐ์์ผ๋ก lastName์ ์ ์ด์ฃผ์ง ์์๋ ๊ด์ฐฎ์๋ฐ,
     * lastName: string | undefined์ printName('Ellie', undefined); ๋ฐ๋์ ์ด๋ฐ ์์ผ๋ก ์ ์ด์ฃผ์ด์ผ ํ๋ค.
     */
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
