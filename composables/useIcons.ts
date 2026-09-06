// Inline SVG icon map — inner markup only (wrapped by AppIcon.vue's <svg>).
// viewBox is always "0 0 24 24". Sub-elements with fill="currentColor" stroke="none"
// are preserved verbatim (they override the wrapper's fill:none/stroke:currentColor).
export function useIcons(): Record<string, string> {
  return {
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    close: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
    'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
    'arrow-right': '<line x1="4" y1="12" x2="18" y2="12"/><polyline points="12 6 18 12 12 18"/>',
    'arrow-up': '<line x1="12" y1="19" x2="12" y2="6"/><polyline points="6 11 12 5 18 11"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><polyline points="7.5 12.5 10.5 15.5 16.5 9"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
    compass: '<circle cx="12" cy="12" r="8.5"/><polygon points="15 8.5 12.8 12.8 8.5 15 10.7 10.7" fill="currentColor" stroke="none"/>',
    layers: '<polygon points="12 3.5 20.5 8 12 12.5 3.5 8"/><polyline points="3.5 12.5 12 17 20.5 12.5"/><polyline points="3.5 17 12 21.5 20.5 17"/>',
    drop: '<path d="M12 3.2c3.4 4.4 6 7.9 6 11a6 6 0 0 1-12 0c0-3.1 2.6-6.6 6-11z"/>',
    anchor: '<circle cx="12" cy="5" r="1.6"/><line x1="12" y1="7" x2="12" y2="19"/><path d="M6 13a6 6 0 0 0 6 6 6 6 0 0 0 6-6"/><line x1="6" y1="13" x2="8.2" y2="13"/><line x1="18" y1="13" x2="15.8" y2="13"/>',
    refresh: '<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8"/><polyline points="20 3.5 20 8 15.5 8"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 16"/><polyline points="4 20.5 4 16 8.5 16"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.5 5l-6 6 2 2 6-6a4 4 0 0 0 5.1-5.4l-2.4 2.4-2-0.6-0.6-2 2.4-2.4z"/>',
    'alert-triangle': '<path d="M12 3.5 22 20H2z"/><line x1="12" y1="9.5" x2="12" y2="14.5"/><circle cx="12" cy="17.2" r="0.9" fill="currentColor" stroke="none"/>',
    'trending-up': '<polyline points="3 17 10 10 14 14 21 6"/><polyline points="15 6 21 6 21 12"/>',
    briefcase: '<rect x="3" y="8" width="18" height="12" rx="1.5"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="16" rx="1.5"/><line x1="3.5" y1="10" x2="20.5" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
    'file-text': '<path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z"/><polyline points="14 3.5 14 7.5 18 7.5"/><line x1="8.5" y1="12" x2="15" y2="12"/><line x1="8.5" y1="15.5" x2="15" y2="15.5"/>',
    link: '<path d="M9.5 14.5 14.5 9.5"/><path d="M11 7l1.3-1.3a3.5 3.5 0 0 1 5 5L16 12"/><path d="M13 17l-1.3 1.3a3.5 3.5 0 0 1-5-5L8 12"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>',
    'shield-check': '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><polyline points="8.7 12.3 11 14.6 15.5 9.8"/>',
    monitor: '<rect x="3" y="4.5" width="18" height="12" rx="1.3"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16.5" x2="12" y2="20"/>',
    users: '<circle cx="8.5" cy="8" r="3"/><path d="M2.8 19c0-3.2 2.6-5.3 5.7-5.3s5.7 2.1 5.7 5.3"/><circle cx="17" cy="9" r="2.4"/><path d="M15 13.2c2.6 0 5 1.7 5.5 4.6"/>',
    'user-check': '<circle cx="10" cy="8" r="3.3"/><path d="M4 19c0-3.4 2.7-5.7 6-5.7s6 2.3 6 5.7"/><polyline points="16.3 9.3 18 11 21.3 7"/>',
    'user-circle': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3.2"/><path d="M6 18.2c1.2-2.3 3.4-3.6 6-3.6s4.8 1.3 6 3.6"/>',
    search: '<circle cx="10.5" cy="10.5" r="6"/><line x1="15" y1="15" x2="20.5" y2="20.5"/>',
    'clipboard-list': '<rect x="5.5" y="4.5" width="13" height="17" rx="1.3"/><rect x="9" y="3" width="6" height="3" rx="1"/><line x1="8.5" y1="11" x2="15.5" y2="11"/><line x1="8.5" y1="14.5" x2="15.5" y2="14.5"/><line x1="8.5" y1="18" x2="12.5" y2="18"/>',
    'clipboard-check': '<rect x="5.5" y="4.5" width="13" height="17" rx="1.3"/><rect x="9" y="3" width="6" height="3" rx="1"/><polyline points="8.5 13.3 10.5 15.3 15.2 10.6"/>',
    factory: '<path d="M3 21V11l5 3.2V11l5 3.2V11l5 3.2V21z"/><line x1="3" y1="21" x2="21" y2="21"/><line x1="6" y1="17" x2="6" y2="19"/><line x1="10.5" y1="17" x2="10.5" y2="19"/><line x1="15" y1="17" x2="15" y2="19"/>',
    database: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/>',
    award: '<circle cx="12" cy="8.5" r="4.8"/><polyline points="8.7 12.5 7.3 21 12 18.3 16.7 21 15.3 12.5"/>',
    'book-open': '<path d="M12 6.5c-1.8-1.3-4.2-1.8-6.5-1.3v12.3c2.3-0.5 4.7 0 6.5 1.3 1.8-1.3 4.2-1.8 6.5-1.3V5.2c-2.3-0.5-4.7 0-6.5 1.3z"/><line x1="12" y1="6.5" x2="12" y2="18.8"/>',
    'map-pin': '<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.3"/><polyline points="4 6.5 12 13 20 6.5"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><ellipse cx="12" cy="12" rx="3.6" ry="8.5"/><line x1="3.7" y1="9" x2="20.3" y2="9"/><line x1="3.7" y1="15" x2="20.3" y2="15"/>',
    network: '<circle cx="12" cy="4.5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><line x1="12" y1="6.5" x2="12" y2="12"/><line x1="12" y1="12" x2="5" y2="16.3"/><line x1="12" y1="12" x2="19" y2="16.3"/>'
  }
}
