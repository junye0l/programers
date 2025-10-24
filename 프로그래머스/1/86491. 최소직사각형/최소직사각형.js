function solution(sizes) {
    const sorted = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
    
    const maxWidth = Math.max(...sorted.map(s => s[0]));
    const maxHeight = Math.max(...sorted.map(s => s[1]));
    
    return maxWidth * maxHeight;
}