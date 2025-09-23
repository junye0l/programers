process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(e => Number(e));
    for (let i = 0; i < m; i++) {
        console.log("*".repeat(n));
    }
});