export type TimelineMarker = { x: number; y: number };

export function timelinePosition(markers: TimelineMarker[], viewportWidth: number, progress: number) {
  const first = markers[0].x;
  const last = markers[markers.length - 1].x;
  const head = first + (last - first) * Math.max(0, Math.min(1, progress));
  return { head, x: viewportWidth / 2 - head };
}

export function activeTimelineYear(markers: TimelineMarker[], head: number) {
  let active = 0;
  markers.forEach((marker, index) => {
    if (marker.x <= head + 0.001) active = index;
  });
  return active;
}

// Pass through the existing year coordinates instead of scaling a separate curve.
export function timelinePath(markers: TimelineMarker[]) {
  let path = `M${markers[0].x} ${markers[0].y}`;
  for (let i = 0; i < markers.length - 1; i++) {
    const previous = markers[Math.max(0, i - 1)];
    const current = markers[i];
    const next = markers[i + 1];
    const following = markers[Math.min(markers.length - 1, i + 2)];
    path += ` C${current.x + (next.x - previous.x) / 6} ${current.y + (next.y - previous.y) / 6}`;
    path += `, ${next.x - (following.x - current.x) / 6} ${next.y - (following.y - current.y) / 6}`;
    path += `, ${next.x} ${next.y}`;
  }
  return path;
}
