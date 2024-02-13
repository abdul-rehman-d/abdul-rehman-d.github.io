import { writable } from 'svelte/store';

function createStore() {
  const { subscribe, update } = writable<TApp[]>([]);

  return {
    subscribe,
    closeApp: (id: string) => {
      update(apps => apps.filter(app => app.id !== id));
    },
    openApp: (appToOpen: TApp) => {
      update(apps => {
        let found = false;
        const mapped = apps.map(app => {
          if (app.id === appToOpen.id) {
            found = true;
            return {
              ...app,
              open: true,
            }
          } else {
            return {
              ...app,
              open: false,
            }
          }
        })
        if (!found) {
          mapped.push({
            ...appToOpen,
            open: true,
          });
        }
        console.log('new', mapped);
        return mapped;
      });
    },
  }
}

export const store = createStore();
