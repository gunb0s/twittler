const renderHashtag = (msg) => {
    let match;
    let idx = 0
    let output = []
    let rgx = /#[가-힣0-9a-zA-Z]+/g
    while ((match = rgx.exec(msg)) != null) {
        console.log("match found at " + match.index + ", " + rgx.lastIndex);
        output.push(msg.slice(idx, match.index))

        let hash = msg.slice(match.index, rgx.lastIndex)
        output.push(hash)
        idx = rgx.lastIndex
    }
    output.push(msg.slice(idx, msg.length))
    return output
}

console.log(renderHashtag('모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.#헌법 #권리 sdsdsd'))