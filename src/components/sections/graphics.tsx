import React from "react";

/* Generated scientific line art (§5B / §6). Every element here is hairline SVG
   in --rule (or --rule-inverse on ink grounds), 1–1.5px, no fills, no gradients,
   no glow. Constructed geometrically rather than traced — so each one stays
   under a few KB, scales cleanly, and recolours with the tokens. Static unless
   a section's own signature moment animates it.

   If it belongs in Leonardo's notebook it's right. If it looks like a biotech
   hero graphic it's wrong. */

// ─── Polyhedra (Prizes, §5D) ────────────────────────────────────────────────
// Leonardo drew wireframe polyhedra for Pacioli's De Divina Proportione in
// 1509 — hollow-edged solids in perspective, centuries before anyone rendered
// a wireframe on a screen. Vertices from the standard coordinates; edges are
// the vertex pairs at the minimum pairwise distance; orthographic projection
// with a fixed tilt; far edges drawn fainter so the solid reads as hollow.

const PHI = (1 + Math.sqrt(5)) / 2;

function perms3(a: number, b: number, c: number): [number, number, number][] {
  const set = new Set<string>();
  const out: [number, number, number][] = [];
  for (const p of [
    [a, b, c],
    [a, c, b],
    [b, a, c],
    [b, c, a],
    [c, a, b],
    [c, b, a],
  ] as [number, number, number][]) {
    const k = p.join(",");
    if (!set.has(k)) {
      set.add(k);
      out.push(p);
    }
  }
  return out;
}

function signs(v: number[]): number[][] {
  let out: number[][] = [[]];
  for (const x of v) {
    const next: number[][] = [];
    for (const prefix of out) {
      if (x === 0) next.push([...prefix, 0]);
      else {
        next.push([...prefix, x]);
        next.push([...prefix, -x]);
      }
    }
    out = next;
  }
  // de-dup
  const seen = new Set<string>();
  return out.filter((p) => {
    const k = p.join(",");
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function verticesFor(kind: PolyhedronKind): [number, number, number][] {
  const raw: number[][] = [];
  if (kind === "icosahedron") {
    for (const base of perms3(0, 1, PHI)) raw.push(...signs(base));
  } else if (kind === "dodecahedron") {
    for (const s of signs([1, 1, 1])) raw.push(s);
    for (const base of perms3(0, 1 / PHI, PHI)) raw.push(...signs(base));
  } else {
    // rhombicuboctahedron: all permutations of (±1, ±1, ±(1+√2))
    for (const base of perms3(1, 1, 1 + Math.SQRT2)) raw.push(...signs(base));
  }
  // de-dup
  const seen = new Set<string>();
  const verts: [number, number, number][] = [];
  for (const v of raw) {
    const k = v.map((n) => n.toFixed(4)).join(",");
    if (!seen.has(k)) {
      seen.add(k);
      verts.push([v[0], v[1], v[2]]);
    }
  }
  return verts;
}

type PolyhedronKind = "rhombicuboctahedron" | "icosahedron" | "dodecahedron";

function buildPolyhedron(kind: PolyhedronKind, size: number) {
  const verts = verticesFor(kind);
  // minimum pairwise distance = edge length
  let min = Infinity;
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(
        verts[i][0] - verts[j][0],
        verts[i][1] - verts[j][1],
        verts[i][2] - verts[j][2]
      );
      if (d < min) min = d;
    }
  }
  const edges: [number, number][] = [];
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(
        verts[i][0] - verts[j][0],
        verts[i][1] - verts[j][1],
        verts[i][2] - verts[j][2]
      );
      if (d <= min * 1.02) edges.push([i, j]);
    }
  }
  // orthographic projection with a fixed, slightly irregular tilt
  const ax = 0.62;
  const ay = -0.5;
  const rot = ([x, y, z]: [number, number, number]) => {
    let X = x * Math.cos(ay) + z * Math.sin(ay);
    let Z = -x * Math.sin(ay) + z * Math.cos(ay);
    const Y = y * Math.cos(ax) - Z * Math.sin(ax);
    Z = y * Math.sin(ax) + Z * Math.cos(ax);
    return [X, Y, Z] as [number, number, number];
  };
  const projected = verts.map(rot);
  const ext = Math.max(...projected.flatMap(([x, y]) => [Math.abs(x), Math.abs(y)]));
  const s = (size / 2) * 0.92 / ext;
  const pts = projected.map(([x, y, z]) => [size / 2 + x * s, size / 2 + y * s, z] as [number, number, number]);
  return edges
    .map(([a, b]) => ({ a: pts[a], b: pts[b], depth: (pts[a][2] + pts[b][2]) / 2 }))
    .sort((p, q) => p.depth - q.depth);
}

// ─── Gear train (Workshops, §5B) ───────────────────────────────────────────
// A gear-and-screw study straight off a notebook page. Hairline pitch circles
// with radial teeth, hub circles, and a lead screw feeding the first gear.
// Static — it just sits in the margin.

function gearTeeth(cx: number, cy: number, r: number, n: number, depth: number) {
  const lines: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * r;
    const y1 = cy + Math.sin(a) * r;
    const x2 = cx + Math.cos(a) * (r + depth);
    const y2 = cy + Math.sin(a) * (r + depth);
    lines.push(`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return lines.join("");
}

export function GearTrain({
  className,
  stroke = "var(--color-line-dark)",
}: {
  className?: string;
  stroke?: string;
}) {
  const gears = [
    { cx: 60, cy: 70, r: 34, teeth: 16 },
    { cx: 132, cy: 108, r: 26, teeth: 12 },
    { cx: 150, cy: 44, r: 16, teeth: 9 },
  ];
  return (
    <svg width={200} height={170} viewBox="0 0 200 170" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1.25}>
        {gears.map((g, i) => (
          <g key={i}>
            <circle cx={g.cx} cy={g.cy} r={g.r} />
            <circle cx={g.cx} cy={g.cy} r={g.r * 0.34} />
            <path d={gearTeeth(g.cx, g.cy, g.r, g.teeth, 5)} />
          </g>
        ))}
        {/* lead screw into the first gear */}
        <path d="M4 70h22" />
        <path d="M4 62l22 8-22 8" />
        <path d="M10 58v24M16 56v28M22 58v24" strokeWidth={1} />
      </g>
    </svg>
  );
}

// ─── Water vortex (FAQ, §5B) ───────────────────────────────────────────────
// Leonardo's turbulence studies — concentric spiral eddies. Two counter-wound
// logarithmic spirals plus a few shed eddy loops. Hairline, static.

function spiralPath(cx: number, cy: number, turns: number, a: number, b: number, dir: number) {
  const steps = turns * 40;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = a * Math.exp(b * t);
    const x = cx + Math.cos(t * dir) * r;
    const y = cy + Math.sin(t * dir) * r;
    d += i === 0 ? `M${x.toFixed(1)} ${y.toFixed(1)}` : `L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

export function VortexStudy({
  className,
  stroke = "var(--color-line-dark)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg width={180} height={180} viewBox="0 0 180 180" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1.25}>
        <path d={spiralPath(90, 90, 3.2, 2.4, 0.28, 1)} />
        <path d={spiralPath(90, 90, 3.0, 2.0, 0.30, -1)} strokeOpacity={0.6} />
        {/* shed eddies peeling off the outer edge */}
        <circle cx={150} cy={64} r={13} strokeOpacity={0.5} />
        <circle cx={40} cy={128} r={9} strokeOpacity={0.4} />
        <circle cx={132} cy={140} r={6} strokeOpacity={0.35} />
      </g>
    </svg>
  );
}

// ─── Golden section (Stats band, §5B) ──────────────────────────────────────
// The nested-square construction with the spiral arc through it. Static.

export function GoldenSection({
  className,
  stroke = "var(--color-line-dark)",
}: {
  className?: string;
  stroke?: string;
}) {
  // Fibonacci squares tiling a golden rectangle, largest first, each with the
  // quarter-turn arc that together make the spiral.
  const layout = [
    { x: 0, y: 0, s: 233, arc: "M233 233 A233 233 0 0 1 0 0" },
    { x: 233, y: 0, s: 144, arc: "M233 0 A144 144 0 0 1 377 144" },
    { x: 288, y: 144, s: 89, arc: "M377 144 A89 89 0 0 1 288 233" },
    { x: 288, y: 178, s: 55, arc: "M288 233 A55 55 0 0 1 233 178" },
    { x: 254, y: 178, s: 34, arc: "M233 178 A34 34 0 0 1 267 144" },
    { x: 254, y: 144, s: 21, arc: "M267 144 A21 21 0 0 1 288 165" },
  ];
  return (
    <svg width={382} height={236} viewBox="-2 -2 384 240" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1} strokeOpacity={0.5}>
        {layout.map((l, i) => (
          <rect key={i} x={l.x} y={l.y} width={l.s} height={l.s} />
        ))}
      </g>
      <g stroke={stroke} strokeWidth={1.5}>
        {layout.map((l, i) => (
          <path key={i} d={l.arc} />
        ))}
      </g>
    </svg>
  );
}

// ─── SF-scene motifs (cohesive-theme pass) ─────────────────────────────────
// Same discipline as everything above: hairline, geometric, no fills. These
// extend the site's existing engraving vocabulary into abstract bridge/hill/
// pier/fog subject matter rather than introducing a second illustration
// style — kept architectural, not postcard-literal.

// Rolling hill silhouettes (About) — a few open sine contours at decreasing
// amplitude/opacity, reading as depth rather than a single wavy line.

function hillPath(width: number, baseY: number, amp: number, freq: number, phase: number) {
  const steps = 60;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = baseY + Math.sin((x / width) * Math.PI * freq + phase) * amp;
    d += i === 0 ? `M${x.toFixed(1)} ${y.toFixed(1)}` : `L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

export function HillContours({
  className,
  stroke = "var(--color-line-dark)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1.25}>
        <path d={hillPath(1200, 110, 22, 1.6, 0.3)} strokeOpacity={0.5} />
        <path d={hillPath(1200, 130, 16, 2.1, 1.4)} strokeOpacity={0.35} />
        <path d={hillPath(1200, 146, 10, 2.6, 2.6)} strokeOpacity={0.22} />
      </g>
    </svg>
  );
}

// Fog wisps (About, Prizes/Sponsors/FAQ) — sparse, short wavy contour
// segments at scattered x-positions rather than one wave spanning the full
// width, so it reads as drifting banks, not a ruled line. Pairs with the
// .fog-drift CSS class (globals.css) for the slow horizontal loop.

function wispPath(len: number, y: number, amp: number, freq: number, phase: number) {
  const steps = 24;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * len;
    const yy = y + Math.sin((x / len) * Math.PI * 2 * freq + phase) * amp;
    d += i === 0 ? `M${x.toFixed(1)} ${yy.toFixed(1)}` : `L${x.toFixed(1)} ${yy.toFixed(1)}`;
  }
  return d;
}

export function FogLines({
  className,
  stroke = "var(--color-line-dark)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 1200 180" preserveAspectRatio="none" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1} strokeLinecap="round" className="fog-drift">
        <path d={wispPath(420, 30, 6, 1.2, 0)} strokeOpacity={0.4} transform="translate(40,0)" />
        <path d={wispPath(320, 90, 5, 1.6, 1)} strokeOpacity={0.28} transform="translate(680,0)" />
        <path d={wispPath(380, 145, 4, 1.0, 2)} strokeOpacity={0.22} transform="translate(260,0)" />
      </g>
    </svg>
  );
}

// Bay-water horizon (V1, Prizes, Sponsors, FAQ) — one shared thin line
// convention so each section's edge reads as the same waterline continuing
// past it, rather than a one-off per section.

export function HorizonLine({
  className,
  stroke = "var(--color-line-dark)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1.25}>
        <path d="M0 14 H1200" strokeOpacity={0.35} />
        <path d={wispPath(1200, 22, 2, 6, 0)} strokeOpacity={0.15} />
      </g>
    </svg>
  );
}

// Pier/dock pilings (V1 Recap) — vertical pilings with X cross-bracing below
// a deck line, meant to sit just above a HorizonLine so the deck reads as
// standing over the water. Embarcadero/Fort Mason waterfront, kept abstract.

export function PierPilings({
  className,
  stroke = "var(--color-line-dark)",
  count = 7,
}: {
  className?: string;
  stroke?: string;
  count?: number;
}) {
  const width = 1200;
  const deckY = 10;
  const baseY = 130;
  const spacing = width / (count - 1);
  const xs = Array.from({ length: count }, (_, i) => i * spacing);
  return (
    <svg viewBox={`0 0 ${width} 140`} preserveAspectRatio="none" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke} strokeWidth={1.25}>
        <path d={`M0 ${deckY} H${width}`} strokeOpacity={0.4} />
        {xs.map((x, i) => (
          <g key={i}>
            <path d={`M${x.toFixed(1)} ${deckY} V${baseY}`} strokeOpacity={0.35} />
            {i > 0 && (
              <path
                d={`M${xs[i - 1].toFixed(1)} ${deckY} L${x.toFixed(1)} ${baseY} M${x.toFixed(1)} ${deckY} L${xs[i - 1].toFixed(1)} ${baseY}`}
                strokeWidth={1}
                strokeOpacity={0.16}
              />
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

// Suspension bridge silhouette (Footer) — the page's final landmark. Two
// towers, a three-span main cable (side anchors + the sagging centre span),
// vertical hangers, a deck, and the same horizon convention as V1/Prizes/etc.
// Evokes Golden Gate/Bay Bridge in silhouette without naming either.

function quadBezierY(t: number, p0: number, p1: number, p2: number) {
  return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
}

export function BridgeSilhouette({
  className,
  stroke = "var(--color-paper)",
}: {
  className?: string;
  stroke?: string;
}) {
  const width = 900;
  const height = 260;
  const deckY = 190;
  const horizonY = 202;
  const towerTop = 40;
  const [t1, t2] = [260, 640];
  const sagY = deckY - 42;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMax meet" className={className} aria-hidden="true" fill="none">
      <g stroke={stroke}>
        <path d={`M0 ${horizonY} H${width}`} strokeWidth={1} strokeOpacity={0.28} />
        <path d={`M30 ${deckY} H${width - 30}`} strokeWidth={1.25} strokeOpacity={0.45} />

        {[t1, t2].map((x, i) => (
          <g key={i} strokeWidth={1.25} strokeOpacity={0.5}>
            <path d={`M${x - 9} ${towerTop} V${deckY}`} />
            <path d={`M${x + 9} ${towerTop} V${deckY}`} />
            <path d={`M${x - 9} ${towerTop + 24} H${x + 9} M${x - 9} ${towerTop + 76} H${x + 9} M${x - 9} ${towerTop + 128} H${x + 9}`} strokeWidth={1} strokeOpacity={0.3} />
          </g>
        ))}

        {/* main cable: side anchors sagging down to the deck ends, then the
            long centre span sagging between the two towers */}
        <path d={`M10 ${deckY - 6} Q ${t1 - 60} ${towerTop + 10} ${t1} ${towerTop}`} strokeWidth={1} strokeOpacity={0.4} />
        <path d={`M${t1} ${towerTop} Q ${width / 2} ${sagY} ${t2} ${towerTop}`} strokeWidth={1} strokeOpacity={0.4} />
        <path d={`M${t2} ${towerTop} Q ${t2 + 60} ${towerTop + 10} ${width - 10} ${deckY - 6}`} strokeWidth={1} strokeOpacity={0.4} />

        {/* hangers dropping from the centre span down to the deck */}
        {Array.from({ length: 9 }, (_, i) => {
          const t = (i + 1) / 10;
          const x = t1 + t * (t2 - t1);
          const y = quadBezierY(t, towerTop, sagY, towerTop);
          return <line key={i} x1={x} y1={y} x2={x} y2={deckY} strokeWidth={0.75} strokeOpacity={0.22} />;
        })}
      </g>
    </svg>
  );
}

export function Polyhedron({
  kind = "rhombicuboctahedron",
  size = 140,
  className,
  stroke = "var(--color-line-dark)",
}: {
  kind?: PolyhedronKind;
  size?: number;
  className?: string;
  stroke?: string;
}) {
  const edges = buildPolyhedron(kind, size);
  const zs = edges.map((e) => e.depth);
  const zMin = Math.min(...zs);
  const zMax = Math.max(...zs);
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {edges.map((e, i) => {
        const t = zMax === zMin ? 1 : (e.depth - zMin) / (zMax - zMin);
        return (
          <line
            key={i}
            x1={e.a[0].toFixed(2)}
            y1={e.a[1].toFixed(2)}
            x2={e.b[0].toFixed(2)}
            y2={e.b[1].toFixed(2)}
            stroke={stroke}
            strokeWidth={1.25}
            strokeOpacity={(0.35 + 0.65 * t).toFixed(3)}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
