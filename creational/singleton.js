class ThemeManager {
    constructor() {
        if (ThemeManager.instance) {
            console.log('ThemeManager: Returning existing instance');
            return ThemeManager.instance;
        }
        
        console.log('ThemeManager: Creating new instance');
        this.currentTheme = 'light';
        this.themes = {
            light: { bg: '#ffffff', text: '#000000' },
            dark: { bg: '#000000', text: '#ffffff' },
            blue: { bg: '#001f3f', text: '#7fdbff' }
        };
        ThemeManager.instance = this;
    }

    setTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            console.log(`ThemeManager: Theme changed to ${themeName}`);
            this.applyTheme();
        } else {
            console.log(`ThemeManager: Theme ${themeName} not found`);
        }
    }

    applyTheme() {
        const theme = this.themes[this.currentTheme];
        console.log(`Applying: bg=${theme.bg}, text=${theme.text}`);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

// Demo
const theme1 = new ThemeManager();
const theme2 = new ThemeManager();

console.log('Same instance?', theme1 === theme2);

theme1.setTheme('dark');
console.log('Current theme:', theme2.getCurrentTheme());

theme2.setTheme('blue');
console.log('Current theme:', theme1.getCurrentTheme());
