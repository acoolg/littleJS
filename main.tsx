export function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export function getRandom(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export async function fetchData(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Network response was not ok.');
    return response.json();
}

export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export async function Translate(text: string, intolanguage: string) {
    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "auto",
          target: intolanguage
        }),
        headers: { "Content-Type": "application/json" }
      });
      
    await res.json().then(json => {
        return json.translatedText
    })
}

