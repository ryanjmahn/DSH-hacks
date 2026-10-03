"use client";

import Terminal from "@/components/Terminal";
import { usePacificTime } from "@/components/Clock";
import { LINKS, ext } from "./shared";

export default function Footer() {
  const now = usePacificTime();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{ marginBottom: 12 }}>DSH Hacks</div>
            <p className="mute" style={{ margin: 0 }}>DeltaForge Hacks × NXT Horizon × STEMise</p>
          </div>
          <div>
            <h3>Hackathon</h3>
            <ul>
              <li><a href={LINKS.devpost} {...ext}>Register</a></li>
              <li><a href={LINKS.rules} {...ext}>Rules</a></li>
              <li><a href={LINKS.flyer} {...ext}>Flyer</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#people">Sponsors and judges</a></li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li><a href={LINKS.discord} {...ext}>Discord</a></li>
              <li><a href={LINKS.youtube} {...ext}>YouTube</a></li>
              <li><a href={LINKS.instagram} {...ext}>Instagram</a></li>
              <li><a href={LINKS.linkedin} {...ext}>LinkedIn</a></li>
              <li><a href={LINKS.v1} {...ext}>V1 projects</a></li>
            </ul>
          </div>
          <div>
            <h3>Colophon</h3>
            <p className="colophon">
              Set in Instrument Serif and Geist Mono, with Doto on the clock. Each plate is the
              project&apos;s image, Atkinson-dithered to two inks on blue-black film; hover or open one
              to see the original underneath.
            </p>
          </div>
        </div>
        <div className="foot-bar">
          <span>© 2026 DSH Hacks · Online, global</span>
          <span>{now ? `${now.time} ${now.zone}` : "--:--"} in California, where the deadline lives</span>
          <Terminal />
        </div>
      </div>
    </footer>
  );
}
