import alt, { AbstractActions } from './alt';

export interface Settings {
  a: number;
}

interface SettingsActions {
  saveSettings(settings: Settings): Settings;
  saveSettingsAsync(settings: Settings): (dispatcher: (settings: Settings) => void) => void;
}

class SettingsActions extends AbstractActions implements SettingsActions {

  saveSettings(settings: Settings) {
    return settings;
  }

  saveSettingsAsync(settings: Settings) {
    return (dispatcher: (settings: Settings) => void) => {
      setTimeout(
        () => { dispatcher(settings); },
        2000
      );
    };
  }
}

export default alt.createActions<SettingsActions>(SettingsActions);