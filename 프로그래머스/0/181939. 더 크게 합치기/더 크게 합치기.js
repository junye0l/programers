function solution(a, b) {
    const AB = String(a) + String(b);
    const BA = String(b) + String(a);
    return AB >= BA ? Number(AB) : Number(BA);
}