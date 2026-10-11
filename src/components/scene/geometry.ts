/* Wireframe geometry for the blueprint garden, in metres (illustrative).
   A Model is one object: flat segments [ax, ay, az, bx, by, bz, kind, buildT]
   where buildT (0..1) is when the segment draws during construction, bottom
   first. x right, y up, z forward (into the page). */
export type V3 = [number, number, number];
export const K = { line: 0, accent: 1, hidden: 2, faint: 3 } as const;

export type Label = { at: V3; text: string; side: 1 | -1 };
export type Dim = { a: V3; b: V3; text: string };
export type Model = {
  segs: Float32Array;
  nodes: V3[]; // canopy lights
  vines: V3[][]; // paths the pulses climb
  labels: Label[];
  dims: Dim[];
  z0: number; // z extent, for culling
  z1: number;
};

const TAU = Math.PI * 2;

export class Builder {
  s: number[] = [];
  nodes: V3[] = [];
  vines: V3[][] = [];
  labels: Label[] = [];
  dims: Dim[] = [];
  line(a: V3, b: V3, k: number) {
    this.s.push(a[0], a[1], a[2], b[0], b[1], b[2], k, 0);
  }
  poly(pts: V3[], k: number) {
    for (let i = 1; i < pts.length; i++) this.line(pts[i - 1], pts[i], k);
  }
  ring(c: V3, r: number, n: number, k: number) {
    for (let i = 0; i < n; i++) {
      const a = (TAU * i) / n, b = (TAU * (i + 1)) / n;
      this.line([c[0] + Math.cos(a) * r, c[1], c[2] + Math.sin(a) * r], [c[0] + Math.cos(b) * r, c[1], c[2] + Math.sin(b) * r], k);
    }
  }
  done(): Model {
    const s = this.s;
    let lo = Infinity, hi = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (let i = 0; i < s.length; i += 8) {
      lo = Math.min(lo, s[i + 1], s[i + 4]);
      hi = Math.max(hi, s[i + 1], s[i + 4]);
      z0 = Math.min(z0, s[i + 2], s[i + 5]);
      z1 = Math.max(z1, s[i + 2], s[i + 5]);
    }
    for (let i = 0; i < s.length; i += 8) s[i + 7] = ((s[i + 1] + s[i + 4]) / 2 - lo) / (hi - lo || 1);
    return { segs: new Float32Array(s), nodes: this.nodes, vines: this.vines, labels: this.labels, dims: this.dims, z0, z1 };
  }
}

/* A supertree: hyperboloid lattice trunk of crossing helices, a flared
   canopy of ribs and rings, vines, and roots below grade (hidden lines). */
export function tree(g: Builder, cx: number, cz: number, h: number, rTop: number, d: number) {
  const N = Math.max(5, Math.round(10 * d));
  const S = Math.max(7, Math.round(14 * d));
  const yT = h * 0.78;
  const rw = rTop * 0.16;
  const r = (t: number) => rw * (1 + 1.3 * (2 * t - 1) ** 2);
  const P = (a: number, t: number, k = 1): V3 => [cx + Math.cos(a) * r(t) * k, t * yT, cz + Math.sin(a) * r(t) * k];

  for (const dir of [1, -1]) {
    for (let i = 0; i < N; i++) {
      const pts: V3[] = [];
      for (let s = 0; s <= S; s++) pts.push(P((TAU * i) / N + dir * 1.1 * Math.PI * (s / S), s / S));
      g.poly(pts, K.line);
    }
  }
  for (let s = 0; s <= S; s += 2) {
    for (let i = 0; i < N * 2; i++) g.line(P((TAU * i) / (N * 2), s / S), P((TAU * (i + 1)) / (N * 2), s / S), K.line);
  }

  const M = Math.max(10, Math.round(20 * d));
  const rt = r(1);
  const R = (s: number) => rt + (rTop - rt) * Math.pow(s, 0.6);
  const Q = (a: number, s: number): V3 => [cx + Math.cos(a) * R(s), yT + (h - yT) * s, cz + Math.sin(a) * R(s)];
  for (let j = 0; j < M; j++) {
    const a = (TAU * j) / M;
    const rib: V3[] = [];
    for (let s = 0; s <= 5; s++) rib.push(Q(a, s / 5));
    g.poly(rib, K.line);
    g.nodes.push(Q(a, 1));
  }
  for (const s of [0.4, 0.75, 1]) {
    for (let j = 0; j < M; j++) g.line(Q((TAU * j) / M, s), Q((TAU * (j + 1)) / M, s), s === 1 ? K.accent : K.line);
  }

  for (let v = 0; v < (h > 30 ? 2 : 1); v++) {
    const pts: V3[] = [];
    for (let s = 0; s <= 40; s++) pts.push(P(v * Math.PI + 3.4 * Math.PI * (s / 40), s / 40, 1.1));
    g.poly(pts, K.accent);
    g.vines.push(pts);
  }

  for (let i = 0; i < 6; i++) {
    const a = (TAU * i) / 6 + 0.3;
    const pts: V3[] = [];
    for (let u = 0; u <= 1.001; u += 0.25) {
      const rad = rw * 2.2 + u * rTop * 0.9;
      pts.push([cx + Math.cos(a) * rad, -h * 0.14 * Math.sin((u * Math.PI) / 2), cz + Math.sin(a) * rad]);
    }
    g.poly(pts, K.hidden);
  }
}

/* The hero's grove: five trees on a ground ring, a skyway between the two
   tallest, a height dimension and the four callouts. Centred on (x, z). */
export function grove(x: number, z: number, d: number): Model {
  const g = new Builder();
  g.ring([x, 0, z], 34, 72, K.line);
  const T: [number, number, number, number][] = [[0, 0, 50, 13], [-23, 8, 34, 9], [21, -6, 40, 10.5], [-9, -21, 26, 7], [14, 19, 22, 6]];
  for (const [dx, dz, h, r] of T) tree(g, x + dx, z + dz, h, r, d);
  const a: V3 = [x + 2.5, 24, z - 0.8], c: V3 = [x + 11, 25, z - 18], b: V3 = [x + 18.5, 24, z - 5.5];
  const L = rails(g, (t) => {
    const u = 1 - t;
    return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1], u * u * a[2] + 2 * u * t * c[2] + t * t * b[2]];
  }, 20);
  g.line([x + 14, 0, z], [x + 38, 0, z], K.hidden);
  g.line([x + 14, 50, z], [x + 38, 50, z], K.hidden);
  g.dims.push({ a: [x + 36, 0, z], b: [x + 36, 50, z], text: "H 50.0 M" });
  g.labels.push(
    { at: [x - 13, 50, z], text: "A — Canopy · care", side: -1 },
    { at: [x + 2.6, 30, z], text: "B — Trunk · model", side: 1 },
    { at: [x - 7, -6, z], text: "C — Roots · data", side: -1 },
    { at: L[13], text: "D — Skyway · teams", side: 1 },
  );
  return g.done();
}

/* Walkway rails along a path p(t), t in 0..1, with cross ties. Returns the
   left rail's points. */
export function rails(g: Builder, p: (t: number) => V3, n: number, half = 0.9): V3[] {
  const L: V3[] = [], R: V3[] = [];
  for (let i = 0; i <= n; i++) {
    const q = p(i / n), q2 = p(Math.min(1, (i + 1) / n)), q0 = p(Math.max(0, (i - 1) / n));
    const dx = q2[0] - q0[0], dz = q2[2] - q0[2], m = Math.hypot(dx, dz) || 1;
    const l: V3 = [q[0] - (dz / m) * half, q[1], q[2] + (dx / m) * half];
    const r: V3 = [q[0] + (dz / m) * half, q[1], q[2] - (dx / m) * half];
    L.push(l);
    R.push(r);
    g.line(l, r, K.line);
  }
  g.poly(L, K.accent);
  g.poly(R, K.accent);
  return L;
}

/* A gridshell conservatory dome, lat/long ribs braced into triangles, with
   young trees inside. */
export function dome(x: number, z: number, R: number, d: number): Model {
  const g = new Builder();
  const H = R * 0.7, L = 8, M = Math.max(18, Math.round(28 * d));
  const P = (i: number, j: number): V3 => {
    const e = (i / L) * (Math.PI / 2), a = (TAU * j) / M;
    return [x + R * Math.cos(e) * Math.cos(a), H * Math.sin(e), z + R * Math.cos(e) * Math.sin(a)];
  };
  for (let j = 0; j < M; j++) {
    for (let i = 0; i < L; i++) {
      g.line(P(i, j), P(i + 1, j), K.line);
      g.line(P(i, j), P(i, j + 1), i === 0 ? K.accent : K.line);
      if (i < L - 1) g.line(P(i, j), P(i + 1, j + 1), K.line);
    }
  }
  // young trees kept off the centre line the camera walks
  tree(g, x + R * 0.5, z + 4, R * 0.5, R * 0.2, d * 0.8);
  tree(g, x - R * 0.5, z + 2, R * 0.34, R * 0.13, d * 0.6);
  tree(g, x + R * 0.12, z + R * 0.6, R * 0.4, R * 0.15, d * 0.6);
  g.line([x - R, 0, z - R - 2], [x - R, 0, z - R - 8], K.hidden);
  g.line([x + R, 0, z - R - 2], [x + R, 0, z - R - 8], K.hidden);
  g.dims.push({ a: [x - R, 0, z - R - 6], b: [x + R, 0, z - R - 6], text: `Ø ${(2 * R).toFixed(1)} M` });
  g.labels.push({ at: P(5, Math.round(M * 0.62)), text: `Conservatory · ${M * (L - 1) * 2 + M} panels`, side: -1 });
  return g.done();
}

/* A lattice arch spanning the walkway: one per schedule stage. */
export function arch(x: number, z: number, r: number): Model {
  const g = new Builder();
  const n = 18;
  const P = (i: number, dz: number, k = 1): V3 => {
    const a = Math.PI * (i / n);
    return [x + Math.cos(a) * r * k, Math.sin(a) * r * k, z + dz];
  };
  for (let i = 0; i < n; i++) {
    g.line(P(i, 0), P(i + 1, 0), K.accent);
    g.line(P(i, 1.6, 0.9), P(i + 1, 1.6, 0.9), K.line);
    g.line(P(i, 0), P(i + 1, 1.6, 0.9), K.line);
  }
  g.line(P(0, 0), P(0, 1.6, 0.9), K.line);
  g.line(P(n, 0), P(n, 1.6, 0.9), K.line);
  return g.done();
}

/* One young supertree on a ground line: the empty plate's sapling. */
export function sapling(): Model {
  const g = new Builder();
  g.line([-8, 0, 0], [8, 0, 0], K.line);
  tree(g, 0, 0, 10, 3.8, 0.8);
  return g.done();
}
