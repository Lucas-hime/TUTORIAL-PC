declare global {
  interface Window {
    melMinieApi?: {
      overlay: {
        setInteractive: (interactive: boolean) => Promise<unknown>;
        pause: () => Promise<unknown>;
        resume: () => Promise<unknown>;
        closeTutorial: () => Promise<unknown>;
        repeatDemo: () => Promise<unknown>;
        imLost: () => Promise<unknown>;
      };
      progress: {
        load: () => Promise<unknown>;
        save: (state: unknown) => Promise<unknown>;
      };
      settings: {
        load: () => Promise<unknown>;
        save: (settings: unknown) => Promise<unknown>;
      };
      uia: {
        getActiveWindow: () => Promise<unknown>;
        findElementByName: (name: string) => Promise<unknown>;
      };
      external: {
        openChatGpt: (url?: string) => Promise<unknown>;
      };
    };
  }
}

export {};
