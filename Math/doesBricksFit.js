// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
    const sortedBrick = [a, b, c].sort((x, y) => x - y);
    const [smallest, middle] = sortedBrick;

    return (smallest <= w && middle <= h) || (smallest <= h && middle <= w);
}
function doesBrickFit(a, b, c, w, h) {
    return [a * b, a * c, b * c].some(el => el <= w * h)
}
function doesBrickFit(a, b, c, w, h) {
    let s = (a, b) => a - b;
    let brick = [a, b, c].sort(s);
    let hole = [w, h].sort(s);
    return brick[0] <= hole[0] && brick[1] <= hole[1];
}