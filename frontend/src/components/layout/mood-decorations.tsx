import { FantasyParticlesGate } from "@/components/layout/fantasy-particles-gate";

const FANTASY_SPARKS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

/**
 * CSS-only mood backgrounds. Visibility is driven by html[data-mood],
 * which the blocking theme/mood script sets before paint — no client JS.
 * Optional canvas dust mounts later via FantasyParticlesGate (idle only).
 */
export function MoodDecorations() {
  return (
    <>
      <div
        className="mood-layer-fantasy pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div className="mood-fantasy-stars mood-fantasy-stars-a" />
        <div className="mood-fantasy-stars mood-fantasy-stars-b" />
        <div className="mood-fantasy-orb mood-fantasy-orb-1" />
        <div className="mood-fantasy-orb mood-fantasy-orb-2" />
        <div className="mood-fantasy-orb mood-fantasy-orb-3" />
        <div className="mood-fantasy-orb mood-fantasy-orb-4" />
        <div className="mood-fantasy-sparkles">
          {FANTASY_SPARKS.map((i) => (
            <span key={i} className="mood-fantasy-spark" />
          ))}
        </div>
        <FantasyParticlesGate />
      </div>
      <div
        className="mood-layer-energy mood-energy-grid pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
    </>
  );
}
