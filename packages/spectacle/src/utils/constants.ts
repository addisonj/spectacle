export const DEFAULT_SLIDE_ELEMENT_INDEX = -1;
export const DEFAULT_SLIDE_INDEX = 0;
export const SYSTEM_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, sans-serif';

export const KEYBOARD_SHORTCUTS = {
  PRESENTER_MODE: 'mod+shift+p',
  OVERVIEW_MODE: 'mod+shift+o',
  PRINT_MODE: 'mod+shift+r',
  EXPORT_MODE: 'mod+shift+e',
  TAB_FORWARD_OVERVIEW_MODE: 'tab',
  TAB_BACKWARD_OVERVIEW_MODE: 'shift+tab',
  SELECT_SLIDE_OVERVIEW_MODE: 'enter',
  NEXT_SLIDE: 'right',
  PREVIOUS_SLIDE: 'left'
};
export type KeyboardShortcutTypes = keyof typeof KEYBOARD_SHORTCUTS;

export const KEYBOARD_SHORTCUTS_IDS = {
  PRESENTER_MODE: 'PRESENTER_MODE',
  OVERVIEW_MODE: 'OVERVIEW_MODE',
  PRINT_MODE: 'PRINT_MODE',
  EXPORT_MODE: 'EXPORT_MODE',
  TAB_FORWARD_OVERVIEW_MODE: 'TAB_FORWARD_OVERVIEW_MODE',
  TAB_BACKWARD_OVERVIEW_MODE: 'TAB_BACKWARD_OVERVIEW_MODE',
  SELECT_SLIDE_OVERVIEW_MODE: 'SELECT_SLIDE_OVERVIEW_MODE',
  NEXT_SLIDE: 'NEXT_SLIDE',
  PREVIOUS_SLIDE: 'PREVIOUS_SLIDE'
};

export const SPECTACLE_MODES = {
  DEFAULT_MODE: 'DEFAULT_MODE',
  PRESENTER_MODE: 'PRESENTER_MODE',
  OVERVIEW_MODE: 'OVERVIEW_MODE',
  PRINT_MODE: 'PRINT_MODE',
  EXPORT_MODE: 'EXPORT_MODE'
} as const;
type ValuesOf<T> = T[keyof T];
export type SpectacleMode = ValuesOf<typeof SPECTACLE_MODES>;

export type ModeSearchParams = {
  presenterMode?: boolean;
  overviewMode?: boolean;
  printMode?: boolean;
  exportMode?: boolean;
};

export type ToggleModeParams = {
  newMode: SpectacleMode;
  senderSlideIndex?: number;
  e?: Event;
};
