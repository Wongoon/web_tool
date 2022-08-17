let arr = [
    "그리스",
    "대만",
    "대한민국",
    "덴마크",
    "독일",
    "러시아",
    "멕시코",
    "미국",
    "브라질",
    "스웨덴",
    "스페인",
    "아르헨티나",
    "영국",
    "오스트레일리아",
    "우크라이나",
    "이스라엘",
    "이탈리아",
    "인도",
    "일본",
    "중국",
    "캐나다",
    "터키",
    "포르투갈",
    "폴란드",
    "프랑스",
    "핀란드"
]
const matchList = (_ => {
    const reESC = /[\\^$.*+?()[\]{}|]/g, reChar = /[가-힣]/, reJa = /[ㄱ-ㅎ]/, offset = 44032;
    const con2syl = Object.fromEntries('ㄱ:가,ㄲ:까,ㄴ:나,ㄷ:다,ㄸ:따,ㄹ:라,ㅁ:마,ㅂ:바,ㅃ:빠,ㅅ:사'.split(",").map(v => {
        const entry = v.split(":");
        entry[1] = entry[1].charCodeAt(0);
        return entry;
    }));
    const pattern = ch => {
        let r;
        if (reJa.test(ch)) {
            const begin = con2syl[ch] || ((ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ']);
            const end = begin + 587;
            r = `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
        } else if (reChar.test(ch)) {
            const chCode = ch.charCodeAt(0) - offset;
            if (chCode % 28 > 0) return ch;
            const begin = Math.floor(chCode / 28) * 28 + offset;
            const end = begin + 27;
            r = `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
        } else r = ch.replace(reESC, '\\$&');
        return `(${r})`;
    };
    const matcher = (v, matches, sTag, eTag, tagLen) => {
        let distance = Number.MAX_VALUE, first = -1, last = 0, vLast = 0, vPrev = 0, acc = v;
        for (let i = 1, j = matches.length; i < j; i++) {
            const curr = matches[i];
            vLast = v.indexOf(curr, vLast);
            if (first == -1) first = vLast;
            if (vLast && distance > vLast - vPrev) distance = vLast - vPrev;
            vPrev = vLast;
            last = acc.indexOf(curr, last);
            acc = `${acc.substring(0, last)}${sTag}${curr}${eTag}${acc.substr(last + 1)}`;
            last += tagLen;
        }
        return [acc, distance, v.length, first];
    };
    const sorter = ([, dA, lA, fA], [, dB, lB, fB]) => {
        if (dA > dB) return 1;
        else if (dA < dB) return -1;
        else {
            if (fA > fB) return 1;
            else if (fA < fB) return -1;
            else {
                if (lA > lB) return 1;
                else if (lA < lB) return -1;
                else return 0;
            }
        }
    };
    return (search, arr, sTag = "", eTag = "", sort = sorter) => {
        const reg = new RegExp(search.split('').map(pattern).join('.*?'), "i");
        const tagLen = sTag.length + eTag.length;
        return arr.reduce((acc, curr) => {
            const matches = reg.exec(curr);
            if (matches) acc.push(matcher(curr, matches, sTag, eTag, tagLen));
            return acc;
        }, []).sort(sort);
    };
})();
document.querySelector("#test").innerHTML = matchList("ㅎㄱㄷ", arr, '<span style="color:red">', '</span>').map(([v]) => `<li>${v}</li>`).join("");