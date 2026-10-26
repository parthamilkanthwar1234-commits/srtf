/* ═══════════════════════════════════════════════════════════════
   SRTF CPU Scheduler — Complete Simulation Engine
   With Real-Time Process Metrics & Animated Core States
   ═══════════════════════════════════════════════════════════════ */

// ── Vector Brand SVG Logos ──
const LOGOS = {
    'Chrome': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#ffffff"/>
            <path d="M12 2C16.4 2 20.2 4.9 21.6 8.9H12l-2.6-4.5C10.2 2.8 11.1 2 12 2Z" fill="#EA4335"/>
            <path d="M21.6 8.9C22.6 11.8 22.2 15 20.7 17.6L16 9.5H12l9.6-.6Z" fill="#FBBC05"/>
            <path d="M12 22C7.6 22 3.8 19.1 2.4 15.1L7.1 7l4.9 8.5v6.5Z" fill="#34A853"/>
            <circle cx="12" cy="12" r="4.8" fill="#ffffff"/>
            <circle cx="12" cy="12" r="3.6" fill="#1a73e8"/>
        </svg>`,

    'Firefox': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#0052D4"/>
            <path d="M12 2C8 2 4.5 4.8 3.5 8.8C3.1 10.2 3.2 11.8 3.8 13.2C3.5 12 3.6 10.8 4.2 9.8C4.5 12.5 6 15 8.2 16.5C7.2 15.2 6.8 13.5 7.2 12C7.8 13.8 9.5 15.2 11.5 15.5C10.5 14.8 9.8 13.8 9.8 12.5C9.8 10.8 11.2 9.5 12.8 9.5C13.5 9.5 14.2 9.8 14.8 10.2C15.2 8.8 14.5 7.2 13.5 6.2C16.2 7 18 9.2 18.5 11.8C18.8 11 18.7 10 18.2 9.2C19.8 11.2 20.2 14 19.2 16.5C20.5 14.5 20.8 12 20 9.8C19.5 5.5 16 2 12 2Z" fill="#FF7A00"/>
            <path d="M12 4C10 4 7.5 5.5 6.5 7.5C7 8.5 8 9.5 9.5 10C10.5 8.5 11.5 7 12 4Z" fill="#FFD200"/>
        </svg>`,

    'Edge': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#0E192B"/>
            <path d="M12 3C7 3 3 7 3 12C3 15.5 5 18.5 8 19.8C7.5 18.2 7.8 16.5 8.8 15.2C9.8 14 11.5 13.5 13 14C14.5 14.5 15.5 16 15.2 17.5C17.2 16.5 18.8 14.5 19 12C19 6.5 15.5 3 12 3Z" fill="#0078D7"/>
            <path d="M12 21C16.5 21 20 17.5 20 13C20 11.5 19.5 10 18.5 9C17.5 11 15.5 12.5 13 12.5C10.5 12.5 8.5 10.8 8.5 8.5C8.5 7 9.2 5.8 10.2 5C6 6 3 9.5 3 14C3 18 7 21 12 21Z" fill="#00C7B7" opacity="0.85"/>
        </svg>`,

    'Netflix': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#111111"/>
            <path d="M6 4h3.2v16H6V4z" fill="#E50914"/>
            <path d="M14.8 4H18v16h-3.2V4z" fill="#E50914"/>
            <path d="M6 4l8.8 16h3.2L9.2 4H6z" fill="#B20710"/>
            <path d="M6 4l6.5 16h2.8L6 4z" fill="#E50914"/>
        </svg>`,

    'YouTube': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#FF0000"/>
            <path d="M10 8l5.5 4L10 16V8z" fill="#FFFFFF"/>
        </svg>`,

    'Spotify': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#1DB954"/>
            <path d="M16.5 16.2C16.3 16.5 15.9 16.6 15.6 16.4C12.8 14.7 9.5 14.3 5.6 15.2C5.2 15.3 4.9 15 4.8 14.7C4.7 14.3 5 14 5.3 13.9C9.7 12.9 13.3 13.3 16.4 15.2C16.7 15.4 16.7 15.8 16.5 16.2ZM17.8 13.3C17.5 13.7 17 13.8 16.6 13.5C13.6 11.6 9 11.1 5.4 12.2C5 12.3 4.5 12.1 4.4 11.6C4.3 11.2 4.5 10.7 5 10.6C9.1 9.4 14.2 9.9 17.6 12C18 12.3 18.1 12.8 17.8 13.3ZM18 10.2C14.4 8 8.4 7.8 4.9 8.9C4.3 9.1 3.7 8.7 3.5 8.2C3.3 7.6 3.7 7 4.2 6.8C8.3 5.6 14.9 5.8 19.1 8.3C19.6 8.6 19.8 9.3 19.5 9.8C19.2 10.4 18.5 10.5 18 10.2Z" fill="#121212"/>
        </svg>`,

    'Prime Video': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#00A8E0"/>
            <path d="M6 8.5H10.5C11.9 8.5 12.8 9.3 12.8 10.5C12.8 11.7 11.9 12.5 10.5 12.5H8V15.5H6V8.5ZM8 10.7H10.3C10.8 10.7 11.1 10.4 11.1 10C11.1 9.6 10.8 9.3 10.3 9.3H8V10.7Z" fill="#FFFFFF"/>
            <path d="M6 18C10 19.8 15 19.2 18 16.5C18.3 16.2 18 15.8 17.6 16C15.1 18.2 10.8 18.5 7.4 17.1C7 16.9 6.7 17.3 7 17.6L6 18Z" fill="#FF9900"/>
            <path d="M18.8 15.8L17.2 15.5L17.8 17L18.8 15.8Z" fill="#FF9900"/>
        </svg>`,

    'WhatsApp': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#25D366"/>
            <path d="M12 4.5C7.9 4.5 4.5 7.9 4.5 12C4.5 13.4 4.9 14.7 5.6 15.8L4.8 19.2L8.3 18.3C9.4 18.9 10.7 19.3 12 19.3C16.1 19.3 19.5 16 19.5 12C19.5 7.9 16.1 4.5 12 4.5ZM15.6 14.7C15.4 15.2 14.7 15.6 14.1 15.7C13.7 15.8 13.2 15.8 11.4 15.1C9.1 14.1 7.6 11.7 7.5 11.5C7.4 11.4 6.5 10.2 6.5 9C6.5 7.8 7.1 7.2 7.4 6.9C7.6 6.7 7.9 6.6 8.2 6.6C8.3 6.6 8.4 6.6 8.5 6.6C8.8 6.6 8.9 6.7 9.1 7C9.3 7.4 9.7 8.5 9.8 8.6C9.9 8.8 9.9 8.9 9.8 9.1C9.7 9.2 9.6 9.4 9.5 9.5C9.4 9.6 9.3 9.7 9.1 9.9C9 10 8.8 10.2 9 10.5C9.2 10.8 9.8 11.7 10.7 12.5C11.8 13.5 12.8 13.8 13.1 14C13.4 14.1 13.6 14.1 13.8 13.9C14 13.6 14.4 13.1 14.7 12.7C14.9 12.4 15.1 12.5 15.3 12.6C15.5 12.7 16.8 13.3 17 13.5C17.2 13.6 17.3 13.7 17.4 13.8C17.4 14 17.4 14.3 17.2 14.7H15.6Z" fill="#FFFFFF"/>
        </svg>`,

    'Instagram': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <defs>
                <radialGradient id="igRad" cx="30%" cy="107%" r="130%">
                    <stop offset="0%" stop-color="#fdf497"/>
                    <stop offset="10%" stop-color="#fdf497"/>
                    <stop offset="45%" stop-color="#fd5949"/>
                    <stop offset="60%" stop-color="#d6249f"/>
                    <stop offset="90%" stop-color="#285AEB"/>
                </radialGradient>
            </defs>
            <rect width="24" height="24" rx="5" fill="url(#igRad)"/>
            <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" stroke-width="1.6"/>
            <circle cx="12" cy="12" r="3.2" stroke="#FFFFFF" stroke-width="1.6"/>
            <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF"/>
        </svg>`,

    'Discord': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#5865F2"/>
            <path d="M17.5 6.5C16.4 6 15.2 5.6 14 5.4C13.8 5.7 13.7 6.1 13.5 6.4C12.3 6.2 11.1 6.2 9.9 6.4C9.7 6.1 9.5 5.7 9.4 5.4C8.2 5.6 7 6 5.9 6.5C3.7 9.8 3.1 13 3.4 16.2C4.9 17.3 6.3 18 7.7 18.4C8 17.9 8.3 17.4 8.6 16.9C8.1 16.7 7.6 16.5 7.2 16.2C7.3 16.1 7.4 16 7.5 15.9C10.2 17.1 13.2 17.1 15.9 15.9C16 16 16.1 16.1 16.2 16.2C15.8 16.5 15.3 16.7 14.8 16.9C15.1 17.4 15.4 17.9 15.7 18.4C17.1 18 18.5 17.3 20 16.2C20.4 12.4 19.3 9.3 17.5 6.5ZM8.5 14C7.7 14 7 13.3 7 12.5C7 11.7 7.7 11 8.5 11C9.3 11 10 11.7 10 12.5C10 13.3 9.3 14 8.5 14ZM14.9 14C14.1 14 13.4 13.3 13.4 12.5C13.4 11.7 14.1 11 14.9 11C15.7 11 16.4 11.7 16.4 12.5C16.4 13.3 15.7 14 14.9 14Z" fill="#FFFFFF"/>
        </svg>`,

    'Twitter': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#000000" stroke="#333" stroke-width="1"/>
            <path d="M17.4 5H19.6L14.8 10.5L20.5 19H16L12.5 14.4L8.4 19H6.2L11.3 13.2L5.8 5H10.4L13.6 9.2L17.4 5ZM16.6 17.7H17.8L9.7 6.2H8.4L16.6 17.7Z" fill="#FFFFFF"/>
        </svg>`,

    'Amazon': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#131921"/>
            <path d="M12.8 13.8C12 14.4 10.9 14.7 9.8 14.7C7.6 14.7 6.4 13.3 6.4 11.2C6.4 8.9 7.9 7.4 10.2 7.4C11.3 7.4 12.2 7.8 12.7 8.3V7.6H14.4V14.5H12.8V13.8ZM12.7 10.4C12.3 9.6 11.4 9 10.4 9C8.9 9 8.1 10.1 8.1 11.3C8.1 12.4 8.8 13.3 10.2 13.3C11.3 13.3 12.3 12.6 12.7 11.7V10.4Z" fill="#FFFFFF"/>
            <path d="M6 16.8C8.8 18.5 13 18.8 16.5 16.2C16.8 16 17.3 16.2 17.1 16.6C16.8 17.2 14.8 18.8 11.8 18.8C8.4 18.8 6.1 17.5 5.7 17.1C5.4 16.8 5.7 16.5 6 16.8Z" fill="#FF9900"/>
            <path d="M17.2 15.6C17 15.4 16.1 15.8 15.7 16C15.4 16.1 15.5 16.4 15.8 16.4C16.7 16.5 17.4 16.2 17.5 16C17.6 15.8 17.4 15.8 17.2 15.6Z" fill="#FF9900"/>
        </svg>`,

    'Zoom': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#2D8CFF"/>
            <path d="M5.5 9C5.5 7.6 6.6 6.5 8 6.5H13C14.4 6.5 15.5 7.6 15.5 9V15C15.5 16.4 14.4 17.5 13 17.5H8C6.6 17.5 5.5 16.4 5.5 15V9Z" fill="#FFFFFF"/>
            <path d="M16.5 10.2L19.2 8.3C19.7 7.9 20.5 8.3 20.5 8.9V15.1C20.5 15.7 19.7 16.1 19.2 15.7L16.5 13.8V10.2Z" fill="#FFFFFF"/>
        </svg>`,

    'Slack': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#1A1D21"/>
            <path d="M7 11C6.2 11 5.5 10.3 5.5 9.5C5.5 8.7 6.2 8 7 8C7.8 8 8.5 8.7 8.5 9.5V11H7Z" fill="#36C5F0"/>
            <path d="M9.5 11C9.5 10.2 10.2 9.5 11 9.5C11.8 9.5 12.5 10.2 12.5 11V14.5C12.5 15.3 11.8 16 11 16C10.2 16 9.5 15.3 9.5 14.5V11Z" fill="#36C5F0"/>
            <path d="M13 7C13 6.2 13.7 5.5 14.5 5.5C15.3 5.5 16 6.2 16 7C16 7.8 15.3 8.5 14.5 8.5H13V7Z" fill="#2EB67D"/>
            <path d="M13 9.5C13.8 9.5 14.5 10.2 14.5 11C14.5 11.8 13.8 12.5 13 12.5H9.5C8.7 12.5 8 11.8 8 11C8 10.2 8.7 9.5 9.5 9.5H13Z" fill="#2EB67D"/>
            <path d="M17 13C17.8 13 18.5 13.7 18.5 14.5C18.5 15.3 17.8 16 17 16C16.2 16 15.5 15.3 15.5 14.5V13H17Z" fill="#ECB22E"/>
            <path d="M14.5 13C14.5 13.8 13.8 14.5 13 14.5C12.2 14.5 11.5 13.8 11.5 13V9.5C11.5 8.7 12.2 8 13 8C13.8 8 14.5 8.7 14.5 9.5V13Z" fill="#ECB22E"/>
            <path d="M11 17C11 17.8 10.3 18.5 9.5 18.5C8.7 18.5 8 17.8 8 17C8 16.2 8.7 15.5 9.5 15.5H11V17Z" fill="#E01E5A"/>
            <path d="M11 14.5C10.2 14.5 9.5 13.8 9.5 13C9.5 12.2 10.2 11.5 11 11.5H14.5C15.3 11.5 16 12.2 16 13C16 13.8 15.3 14.5 14.5 14.5H11Z" fill="#E01E5A"/>
        </svg>`,

    'VS Code': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#1E1E1E"/>
            <path d="M17.8 3.5L12.5 8.4L7.5 4.5L5.5 5.5L9.6 12L5.5 18.5L7.5 19.5L12.5 15.6L17.8 20.5C18.4 20.8 19.2 20.4 19.2 19.7V4.3C19.2 3.6 18.4 3.2 17.8 3.5ZM16.8 16.2L12 12L16.8 7.8V16.2Z" fill="#007ACC"/>
            <path d="M12.5 8.4L7.5 4.5L5.5 5.5L9.6 12L12.5 8.4Z" fill="#1F9CF0" opacity="0.8"/>
            <path d="M5.5 18.5L7.5 19.5L12.5 15.6L9.6 12L5.5 18.5Z" fill="#0065A9"/>
        </svg>`,

    'Antivirus': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#062E1E"/>
            <path d="M12 3.5L5 6.5V11.5C5 16 8 20 12 21.5C16 20 19 16 19 11.5V6.5L12 3.5Z" fill="#10B981" stroke="#34D399" stroke-width="1.2"/>
            <path d="M9 12L11 14L15 9.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

    'Updater': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#2E1B04"/>
            <path d="M18 12C18 15.3 15.3 18 12 18C9.5 18 7.3 16.5 6.4 14.3M6 12C6 8.7 8.7 6 12 6C14.5 6 16.7 7.5 17.6 9.7" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M18 6V10H14M6 18V14H10" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

    'Backup': (size = 18) => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#1E0D36"/>
            <path d="M7 16C5.3 16 4 14.7 4 13C4 11.5 5 10.3 6.4 10.1C6.8 7.8 8.8 6 11.2 6C13.3 6 15.1 7.4 15.8 9.3C17.1 9.5 18 10.6 18 12C18 12.3 17.9 12.7 17.8 13" stroke="#A855F7" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M12 12V18M12 18L9.5 15.5M12 18L14.5 15.5" stroke="#A855F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
};

const defaultLogo = (size = 18) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#27272a"/>
        <circle cx="12" cy="12" r="5" fill="#a1a1aa"/>
    </svg>`;

function getAppLogo(appName, size = 18) {
    const fn = LOGOS[appName];
    return fn ? fn(size) : defaultLogo(size);
}

// ── Simulator State ──
let processes = [];
let usedAppNames = new Set();
let bannerTimeout = null;

let sim = {
    running: false,
    paused: false,
    finished: false,
    time: 0,
    intervalId: null,
    speed: 1,
    remaining: {},
    completion: {},
    firstResponse: {},
    current: null,
    completed: new Set(),
    totalBurst: 0,
    eventsCount: 0
};

// ── DOM References ──
const $ = id => document.getElementById(id);
const DOM = {
    appSelect: $('appSelect'),
    appSelectLogo: $('appSelectLogo'),
    arrivalTime: $('arrivalTime'),
    burstTime: $('burstTime'),
    processList: $('processList'),
    processCount: $('processCount'),
    addProcessBtn: $('addProcessBtn'),
    clearAllBtn: $('clearAllBtn'),
    startBtn: $('startBtn'),
    pauseBtn: $('pauseBtn'),
    stepBtn: $('stepBtn'),
    resetBtn: $('resetBtn'),
    speedSlider: $('speedSlider'),
    speedLabel: $('speedLabel'),
    currentTime: $('currentTime'),
    statusBadge: $('statusBadge'),
    preemptBanner: $('preemptBanner'),
    preemptBannerText: $('preemptBannerText'),
    cpuCard: $('cpuCard'),
    cpuCoreAnim: $('cpuCoreAnim'),
    cpuLiveDot: $('cpuLiveDot'),
    cpuStateTag: $('cpuStateTag'),
    cpuIconSlot: $('cpuIconSlot'),
    cpuLabel: $('cpuLabel'),
    cpuSub: $('cpuSub'),
    cpuProgressBar: $('cpuProgressBar'),
    cpuProgressText: $('cpuProgressText'),
    cpuProgressPct: $('cpuProgressPct'),
    execProcess: $('execProcess'),
    remainingTime: $('remainingTime'),
    readyCount: $('readyCount'),
    readyQueue: $('readyQueue'),
    rqBadge: $('rqBadge'),
    rqUpcoming: $('rqUpcoming'),
    ganttChart: $('ganttChart'),
    ganttTimeline: $('ganttTimeline'),
    ganttStatus: $('ganttStatus'),
    eventLog: $('eventLog'),
    logCount: $('logCount'),
    resultsBody: $('resultsBody'),
    tableCountBadge: $('tableCountBadge'),
    avgWT: $('avgWT'),
    avgTAT: $('avgTAT'),
    cpuUtil: $('cpuUtil'),
    totalTime: $('totalTime')
};

// ── Initialization ──
function init() {
    initTheme();
    setupSpeedSlider();
    onAppSelectChange();
    setCpuIdle();
    renderInitialGanttTimeline();
    loadPreset('mixed');
}

function onAppSelectChange() {
    const selected = DOM.appSelect.value;
    DOM.appSelectLogo.innerHTML = getAppLogo(selected, 18);
}

function setupSpeedSlider() {
    DOM.speedSlider.addEventListener('input', () => {
        const speeds = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 10];
        sim.speed = speeds[parseInt(DOM.speedSlider.value) - 1];
        DOM.speedLabel.textContent = sim.speed + 'x';
        if (sim.running && !sim.paused) {
            clearInterval(sim.intervalId);
            sim.intervalId = setInterval(simulationTick, 1000 / sim.speed);
        }
    });
}

// ── Process Management ──
function addProcess() {
    const at = parseInt(DOM.arrivalTime.value);
    const bt = parseInt(DOM.burstTime.value);

    if (isNaN(at) || at < 0) {
        shake(DOM.arrivalTime);
        return;
    }
    if (isNaN(bt) || bt < 1) {
        shake(DOM.burstTime);
        return;
    }

    if (sim.running || sim.finished) {
        resetSimulation();
    }

    const baseName = DOM.appSelect.value;
    let name = baseName;
    let count = 2;
    while (usedAppNames.has(name)) {
        name = `${baseName} ${count++}`;
    }
    usedAppNames.add(name);

    processes.push({
        id: name,
        base: baseName,
        arrivalTime: at,
        burstTime: bt
    });

    DOM.arrivalTime.value = '';
    DOM.burstTime.value = '';
    DOM.arrivalTime.focus();

    renderProcessList();
    updateButtonStates();
    updateReadyQueueDisplay(0);
    renderProcessMetricsTable(0);
}

function removeProcess(index) {
    usedAppNames.delete(processes[index].id);
    processes.splice(index, 1);
    renderProcessList();
    updateButtonStates();
    updateReadyQueueDisplay(0);
    renderProcessMetricsTable(0);
}

function clearAll() {
    processes = [];
    usedAppNames.clear();
    renderProcessList();
    resetSimulation();
    updateButtonStates();
}

function renderProcessList() {
    DOM.processCount.textContent = processes.length;

    if (processes.length === 0) {
        DOM.processList.innerHTML = '<div class="empty-state">No processes added yet</div>';
        DOM.clearAllBtn.style.display = 'none';
        return;
    }

    DOM.clearAllBtn.style.display = 'block';
    DOM.processList.innerHTML = processes.map((p, i) => `
        <div class="p-item">
            <div class="p-avatar">
                ${getAppLogo(p.base, 20)}
            </div>
            <div class="p-info">
                <div class="p-name">${p.id}</div>
                <div class="p-meta">AT: ${p.arrivalTime}ms · BT: ${p.burstTime}ms</div>
            </div>
            <button class="p-remove" onclick="removeProcess(${i})" title="Remove">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
        </div>
    `).join('');
}

function shake(element) {
    element.style.animation = 'none';
    element.offsetHeight; // trigger reflow
    element.style.animation = 'shake 0.3s ease';
    element.style.borderColor = 'var(--danger)';
    setTimeout(() => {
        element.style.borderColor = '';
        element.style.animation = '';
    }, 400);
}

// ── Presets ──
function loadPreset(name) {
    if (sim.running || sim.finished) {
        resetSimulation();
    }
    processes = [];
    usedAppNames.clear();

    const presets = {
        mixed: [
            { id: 'Chrome', base: 'Chrome', arrivalTime: 0, burstTime: 8 },
            { id: 'Netflix', base: 'Netflix', arrivalTime: 1, burstTime: 4 },
            { id: 'WhatsApp', base: 'WhatsApp', arrivalTime: 2, burstTime: 9 },
            { id: 'Amazon', base: 'Amazon', arrivalTime: 3, burstTime: 5 },
            { id: 'Spotify', base: 'Spotify', arrivalTime: 4, burstTime: 2 },
            { id: 'Zoom', base: 'Zoom', arrivalTime: 6, burstTime: 6 }
        ],
        streaming: [
            { id: 'Netflix', base: 'Netflix', arrivalTime: 0, burstTime: 10 },
            { id: 'YouTube', base: 'YouTube', arrivalTime: 1, burstTime: 5 },
            { id: 'Spotify', base: 'Spotify', arrivalTime: 2, burstTime: 3 },
            { id: 'Prime Video', base: 'Prime Video', arrivalTime: 3, burstTime: 7 },
            { id: 'Chrome', base: 'Chrome', arrivalTime: 4, burstTime: 2 }
        ],
        social: [
            { id: 'WhatsApp', base: 'WhatsApp', arrivalTime: 0, burstTime: 6 },
            { id: 'Instagram', base: 'Instagram', arrivalTime: 1, burstTime: 3 },
            { id: 'Discord', base: 'Discord', arrivalTime: 2, burstTime: 8 },
            { id: 'Twitter', base: 'Twitter', arrivalTime: 3, burstTime: 2 },
            { id: 'Chrome', base: 'Chrome', arrivalTime: 5, burstTime: 4 }
        ]
    };

    const data = presets[name] || presets.mixed;
    data.forEach(p => {
        processes.push({ ...p });
        usedAppNames.add(p.id);
    });

    renderProcessList();
    updateButtonStates();
    updateReadyQueueDisplay(0);
    renderProcessMetricsTable(0);
}

// ── Button States ──
function updateButtonStates() {
    const hasProcesses = processes.length > 0;
    const isRunning = sim.running && !sim.paused;
    const isPaused = sim.running && sim.paused;
    const isFinished = sim.finished;

    DOM.startBtn.disabled = !hasProcesses || isRunning || isFinished;
    DOM.pauseBtn.disabled = !isRunning;
    DOM.stepBtn.disabled = !hasProcesses || isRunning || isFinished;
    DOM.resetBtn.disabled = !sim.running && !isFinished && sim.time === 0;
    DOM.addProcessBtn.disabled = sim.running;

    DOM.startBtn.classList.toggle('active', isRunning);
    DOM.pauseBtn.classList.toggle('active', isPaused);

    if (isFinished) {
        DOM.statusBadge.textContent = 'Completed';
        DOM.statusBadge.style.color = 'var(--text)';
        DOM.statusBadge.style.borderColor = 'var(--border)';
    } else if (isRunning) {
        DOM.statusBadge.textContent = 'Executing';
        DOM.statusBadge.style.color = '#60a5fa';
        DOM.statusBadge.style.borderColor = 'rgba(37, 99, 235, 0.4)';
    } else if (isPaused) {
        DOM.statusBadge.textContent = 'Paused';
        DOM.statusBadge.style.color = 'var(--warning)';
        DOM.statusBadge.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    } else {
        DOM.statusBadge.textContent = 'Engine Idle';
        DOM.statusBadge.style.color = 'var(--text-secondary)';
        DOM.statusBadge.style.borderColor = 'var(--border)';
    }
}

// ── Simulation Engine ──
function initSimulationState() {
    sim.time = 0;
    sim.remaining = {};
    sim.completion = {};
    sim.firstResponse = {};
    sim.current = null;
    sim.completed = new Set();
    sim.totalBurst = 0;
    sim.eventsCount = 0;

    processes.forEach(p => {
        sim.remaining[p.id] = p.burstTime;
        sim.totalBurst += p.burstTime;
    });
}

function startSimulation() {
    if (sim.paused) {
        sim.paused = false;
        sim.intervalId = setInterval(simulationTick, 1000 / sim.speed);
        updateButtonStates();
        return;
    }

    initSimulationState();
    clearVisualizations();
    sim.running = true;
    sim.paused = false;
    sim.finished = false;
    sim.intervalId = setInterval(simulationTick, 1000 / sim.speed);
    updateButtonStates();
    renderProcessMetricsTable(0);
}

function pauseSimulation() {
    sim.paused = true;
    clearInterval(sim.intervalId);
    updateButtonStates();
}

function stepSimulation() {
    if (!sim.running) {
        initSimulationState();
        clearVisualizations();
        sim.running = true;
        sim.paused = true;
        sim.finished = false;
    }
    simulationTick();
    updateButtonStates();
}

function resetSimulation() {
    clearInterval(sim.intervalId);
    sim.running = false;
    sim.paused = false;
    sim.finished = false;
    sim.time = 0;
    sim.current = null;

    setCpuIdle();
    hidePreemptionBanner();
    DOM.currentTime.textContent = '0';
    DOM.avgWT.textContent = '—';
    DOM.avgTAT.textContent = '—';
    DOM.cpuUtil.textContent = '—';
    DOM.totalTime.textContent = '—';
    DOM.logCount.textContent = '0 events';
    DOM.eventLog.innerHTML = '<span class="log-placeholder">Events will appear here</span>';

    updateButtonStates();
    updateReadyQueueDisplay(0);
    renderProcessMetricsTable(0);
    renderInitialGanttTimeline();
}

function clearVisualizations() {
    DOM.ganttChart.innerHTML = '';
    DOM.ganttTimeline.innerHTML = '';
    DOM.eventLog.innerHTML = '<span class="log-placeholder">Events will appear here</span>';
    DOM.ganttStatus.textContent = 'Scheduling in progress';
    hidePreemptionBanner();
}

// ── Core SRTF Algorithm Tick ──
function simulationTick() {
    const t = sim.time;

    // Check completion
    if (sim.completed.size === processes.length) {
        finishSimulation();
        return;
    }

    // 1. Identify newly arrived processes at this time unit
    const arriving = processes.filter(p => p.arrivalTime === t && !sim.completed.has(p.id));
    arriving.forEach(p => {
        logEvent(t, 'arrive', 'ARRIVE', `<strong>${p.id}</strong> arrived into ready queue (Burst: ${p.burstTime}ms)`);
    });

    // 2. All eligible processes: arrived at or before t, incomplete
    const available = processes.filter(p =>
        p.arrivalTime <= t &&
        !sim.completed.has(p.id) &&
        sim.remaining[p.id] > 0
    );

    if (available.length === 0) {
        // CPU Idle
        appendGanttBlock(t, null);
        setCpuIdle();
        if (arriving.length === 0) {
            logEvent(t, 'arrive', 'IDLE', 'CPU is idle · Waiting for processes');
        }
        sim.current = null;
        updateReadyQueueDisplay(t);
        renderProcessMetricsTable(t);
    } else {
        // SRTF Selection: Minimum remaining burst time
        // Tie-breaker: earlier arrival time
        available.sort((a, b) => {
            const diff = sim.remaining[a.id] - sim.remaining[b.id];
            if (diff !== 0) return diff;
            return a.arrivalTime - b.arrivalTime;
        });

        const selected = available[0];

        // 3. Preemption Detection & Animation
        if (sim.current && sim.current !== selected.id && sim.remaining[sim.current] > 0) {
            triggerPreemptionAlert(sim.current, selected.id, sim.remaining[sim.current], sim.remaining[selected.id]);
            logEvent(t, 'preempt', 'PREEMPT', `<strong>${selected.id}</strong> (${sim.remaining[selected.id]}ms rem) preempted <strong>${sim.current}</strong> (${sim.remaining[sim.current]}ms rem)`);
        } else if (sim.current !== selected.id) {
            logEvent(t, 'dispatch', 'DISPATCH', `<strong>${selected.id}</strong> dispatched to CPU (${sim.remaining[selected.id]}ms remaining)`);
        }

        // Record first response time
        if (sim.firstResponse[selected.id] === undefined) {
            sim.firstResponse[selected.id] = t;
        }

        sim.current = selected.id;
        appendGanttBlock(t, selected);

        // Execute for 1 unit
        sim.remaining[selected.id]--;
        setCpuActive(selected, sim.remaining[selected.id]);

        // 4. Update Ready Queue & Process Metrics Table in real-time
        updateReadyQueueDisplay(t);
        renderProcessMetricsTable(t);

        // 5. Completion Check
        if (sim.remaining[selected.id] === 0) {
            sim.completion[selected.id] = t + 1;
            sim.completed.add(selected.id);
            logEvent(t + 1, 'complete', 'COMPLETE', `<strong>${selected.id}</strong> completed execution at t = ${t + 1}ms`);
        }
    }

    // Advance simulator clock
    sim.time++;
    DOM.currentTime.textContent = sim.time;

    // Check if simulation is completed
    if (sim.completed.size === processes.length) {
        finishSimulation();
        return;
    }

    // Safety timeout
    const maxArrival = Math.max(...processes.map(p => p.arrivalTime), 0);
    if (sim.time > sim.totalBurst + maxArrival + 15) {
        finishSimulation();
    }
}

function finishSimulation() {
    clearInterval(sim.intervalId);
    sim.running = false;
    sim.paused = false;
    sim.finished = true;

    logEvent(sim.time, 'complete', 'FINISH', 'All processes have finished execution successfully');
    setCpuDone();
    hidePreemptionBanner();
    updateReadyQueueDisplay(sim.time);
    renderProcessMetricsTable(sim.time);
    calculateResults();
    updateButtonStates();

    DOM.ganttStatus.textContent = `Completed all tasks in ${sim.time}ms`;
}

// ── CPU Visual Controller with Animations ──
function setCpuIdle() {
    DOM.cpuStateTag.textContent = 'IDLE';
    DOM.cpuStateTag.className = 'cpu-state-tag';

    // Activate the breathing idle animation
    DOM.cpuCoreAnim.className = 'cpu-core-visual idle';
    DOM.cpuLiveDot.className = 'cpu-live-dot';

    DOM.cpuIconSlot.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" color="#71717a">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
        </svg>`;
    DOM.cpuLabel.textContent = 'CORE IDLE';
    DOM.cpuSub.textContent = 'Awaiting next ready process';

    DOM.cpuProgressBar.style.width = '0%';
    DOM.cpuProgressBar.className = 'progress-bar-fill';
    DOM.cpuProgressText.textContent = '0 / 0 ms elapsed';
    DOM.cpuProgressPct.textContent = '0%';

    DOM.execProcess.textContent = '—';
    DOM.remainingTime.textContent = '—';
}

function setCpuActive(process, remaining) {
    const initialBT = process.burstTime;
    const elapsed = initialBT - remaining;
    const pct = Math.min(100, Math.round((elapsed / initialBT) * 100));

    DOM.cpuStateTag.textContent = 'RUNNING';
    DOM.cpuStateTag.className = 'cpu-state-tag running';

    // Activate the vibrant spinning active animation
    DOM.cpuCoreAnim.className = 'cpu-core-visual active';
    DOM.cpuLiveDot.className = 'cpu-live-dot active';

    DOM.cpuIconSlot.innerHTML = getAppLogo(process.base, 22);
    DOM.cpuLabel.textContent = process.id;
    DOM.cpuSub.textContent = `Arrival: ${process.arrivalTime}ms · Initial: ${process.burstTime}ms`;

    DOM.cpuProgressBar.style.width = `${pct}%`;
    DOM.cpuProgressBar.className = 'progress-bar-fill active';
    DOM.cpuProgressText.textContent = `${elapsed} / ${initialBT} ms elapsed`;
    DOM.cpuProgressPct.textContent = `${pct}%`;

    DOM.execProcess.innerHTML = `
        <div style="width:14px;height:14px;display:inline-flex;align-items:center">${getAppLogo(process.base, 14)}</div>
        <span>${process.id}</span>
    `;
    DOM.remainingTime.textContent = `${remaining} ms`;
}

function setCpuDone() {
    DOM.cpuStateTag.textContent = 'COMPLETE';
    DOM.cpuStateTag.className = 'cpu-state-tag';

    DOM.cpuCoreAnim.className = 'cpu-core-visual';
    DOM.cpuLiveDot.className = 'cpu-live-dot';

    DOM.cpuIconSlot.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="#10b981">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l2.5 2.5L16 9"/>
        </svg>`;
    DOM.cpuLabel.textContent = 'ALL COMPLETE';
    DOM.cpuSub.textContent = 'All tasks finished execution';

    DOM.cpuProgressBar.style.width = '100%';
    DOM.cpuProgressBar.className = 'progress-bar-fill';
    DOM.cpuProgressText.textContent = 'Finished';
    DOM.cpuProgressPct.textContent = '100%';

    DOM.execProcess.textContent = '—';
    DOM.remainingTime.textContent = '0 ms';
}

function triggerPreemptionAlert(preemptedId, selectedId, remPreempted, remSelected) {
    // 1. Flash CPU Card
    DOM.cpuCard.classList.remove('preempt-flash');
    void DOM.cpuCard.offsetWidth; // trigger reflow
    DOM.cpuCard.classList.add('preempt-flash');

    // 2. Show Preemption Banner
    if (DOM.preemptBanner && DOM.preemptBannerText) {
        DOM.preemptBannerText.innerHTML = `<strong>${selectedId}</strong> (${remSelected}ms rem) preempted <strong>${preemptedId}</strong> (${remPreempted}ms rem) because it has shorter remaining burst time!`;
        DOM.preemptBanner.style.display = 'flex';

        if (bannerTimeout) clearTimeout(bannerTimeout);
        bannerTimeout = setTimeout(() => {
            hidePreemptionBanner();
        }, 3000);
    }
}

function hidePreemptionBanner() {
    if (DOM.preemptBanner) {
        DOM.preemptBanner.style.display = 'none';
    }
}

// ── Accurate Ready Queue Handler ──
function updateReadyQueueDisplay(currentTime) {
    if (!sim.running && !sim.finished && sim.time === 0) {
        previewInitialReadyQueue();
        return;
    }

    if (sim.finished) {
        DOM.rqBadge.textContent = '0 waiting';
        DOM.readyCount.textContent = '0';
        DOM.readyQueue.innerHTML = '<div class="rq-empty-text">Simulation complete. All processes have finished execution.</div>';
        DOM.rqUpcoming.innerHTML = '<span>All configured processes have finished.</span>';
        return;
    }

    // Active ready queue (arrived, not completed, not currently executing)
    const waitingQueue = processes.filter(p =>
        p.arrivalTime <= currentTime &&
        !sim.completed.has(p.id) &&
        sim.remaining[p.id] > 0 &&
        p.id !== sim.current
    );

    // SRTF Priority Ordering in Ready Queue:
    waitingQueue.sort((a, b) => {
        const diff = sim.remaining[a.id] - sim.remaining[b.id];
        if (diff !== 0) return diff;
        return a.arrivalTime - b.arrivalTime;
    });

    DOM.rqBadge.textContent = `${waitingQueue.length} waiting`;
    DOM.readyCount.textContent = waitingQueue.length;

    if (waitingQueue.length === 0) {
        if (sim.current) {
            DOM.readyQueue.innerHTML = `
                <div class="rq-empty-text">
                    Queue empty · Currently executing <strong>${sim.current}</strong> has no preemption contenders.
                </div>`;
        } else {
            DOM.readyQueue.innerHTML = '<div class="rq-empty-text">No processes ready at current time unit.</div>';
        }
    } else {
        DOM.readyQueue.innerHTML = waitingQueue.map((p, index) => `
            <div class="rq-row">
                <div class="rq-row-left">
                    <span class="rq-order-tag ${index === 0 ? 'next' : ''}">#${index + 1}${index === 0 ? ' NEXT' : ''}</span>
                    <div class="rq-app-logo">${getAppLogo(p.base, 16)}</div>
                    <span class="rq-app-name">${p.id}</span>
                </div>
                <div class="rq-row-right">
                    <span>AT: ${p.arrivalTime}ms</span>
                    <span class="rq-rem-highlight">${sim.remaining[p.id]}ms rem</span>
                </div>
            </div>
        `).join('');
    }

    // Upcoming processes tracker
    const futureArrivals = processes.filter(p => p.arrivalTime > currentTime)
                                   .sort((a, b) => a.arrivalTime - b.arrivalTime);

    if (futureArrivals.length > 0) {
        DOM.rqUpcoming.innerHTML = `
            <span>Upcoming:</span>
            ${futureArrivals.slice(0, 4).map(p => `
                <span class="rq-upcoming-pill">
                    ${p.id} (t=${p.arrivalTime}ms)
                </span>
            `).join('')}
            ${futureArrivals.length > 4 ? `<span>+${futureArrivals.length - 4} more</span>` : ''}
        `;
    } else {
        DOM.rqUpcoming.innerHTML = '<span>All configured processes have arrived into memory.</span>';
    }
}

function previewInitialReadyQueue() {
    const readyAtZero = processes.filter(p => p.arrivalTime === 0);
    const laterArrivals = processes.filter(p => p.arrivalTime > 0)
                                   .sort((a, b) => a.arrivalTime - b.arrivalTime);

    DOM.rqBadge.textContent = `${readyAtZero.length} ready at start`;
    DOM.readyCount.textContent = readyAtZero.length;

    if (readyAtZero.length === 0) {
        DOM.readyQueue.innerHTML = `
            <div class="rq-empty-text">
                No jobs configured with Arrival Time 0. First arrival occurs at t=${laterArrivals[0]?.arrivalTime || 0}ms.
            </div>`;
    } else {
        readyAtZero.sort((a, b) => a.burstTime - b.burstTime);
        DOM.readyQueue.innerHTML = readyAtZero.map((p, index) => `
            <div class="rq-row">
                <div class="rq-row-left">
                    <span class="rq-order-tag ${index === 0 ? 'next' : ''}">#${index + 1}${index === 0 ? ' NEXT' : ''}</span>
                    <div class="rq-app-logo">${getAppLogo(p.base, 16)}</div>
                    <span class="rq-app-name">${p.id}</span>
                </div>
                <div class="rq-row-right">
                    <span>AT: 0ms</span>
                    <span class="rq-rem-highlight">${p.burstTime}ms burst</span>
                </div>
            </div>
        `).join('');
    }

    if (laterArrivals.length > 0) {
        DOM.rqUpcoming.innerHTML = `
            <span>Later Arrivals:</span>
            ${laterArrivals.slice(0, 4).map(p => `
                <span class="rq-upcoming-pill">${p.id} (t=${p.arrivalTime}ms)</span>
            `).join('')}
        `;
    } else {
        DOM.rqUpcoming.innerHTML = '<span>All jobs ready at start.</span>';
    }
}

// ── Process Metrics Table (Prominent & Real-Time) ──
function renderProcessMetricsTable(currentTime = 0) {
    if (!DOM.resultsBody) return;

    if (processes.length === 0) {
        DOM.resultsBody.innerHTML = '<tr class="empty-row"><td colspan="9">No processes configured. Add processes or load a preset.</td></tr>';
        if (DOM.tableCountBadge) DOM.tableCountBadge.textContent = '0 processes';
        return;
    }

    const completedCount = sim.completed ? sim.completed.size : 0;
    if (DOM.tableCountBadge) {
        DOM.tableCountBadge.textContent = `${completedCount} / ${processes.length} completed`;
    }

    DOM.resultsBody.innerHTML = processes.map(p => {
        const isDone = sim.completed && sim.completed.has(p.id);
        const isRunning = (p.id === sim.current);
        const hasStarted = (sim.firstResponse && sim.firstResponse[p.id] !== undefined);
        const hasArrived = (p.arrivalTime <= currentTime);

        let statusClass = 'waiting';
        let statusText = 'WAITING';

        if (isDone) {
            statusClass = 'done';
            statusText = 'COMPLETED';
        } else if (isRunning) {
            statusClass = 'running';
            statusText = 'RUNNING';
        } else if (hasStarted) {
            statusClass = 'preempted';
            statusText = 'PREEMPTED';
        } else if (hasArrived) {
            statusClass = 'waiting';
            statusText = 'IN QUEUE';
        } else {
            statusClass = 'waiting';
            statusText = `ARRIVES t=${p.arrivalTime}ms`;
        }

        const remainingMs = isDone ? 0 : (sim.remaining && sim.remaining[p.id] !== undefined ? sim.remaining[p.id] : p.burstTime);

        let ctVal = '—';
        let tatVal = '—';
        let wtVal = '—';
        let rtVal = '—';

        if (hasStarted) {
            const rt = sim.firstResponse[p.id] - p.arrivalTime;
            rtVal = `${rt}ms`;
        }

        if (isDone) {
            const ct = sim.completion[p.id] || 0;
            const tat = ct - p.arrivalTime;
            const wt = tat - p.burstTime;
            ctVal = `${ct}ms`;
            tatVal = `${tat}ms`;
            wtVal = `${wt}ms`;
        }

        return `
            <tr class="${isRunning ? 'row-running' : ''}">
                <td>
                    <div class="table-proc-cell">
                        <div class="table-logo">${getAppLogo(p.base, 16)}</div>
                        <span>${p.id}</span>
                    </div>
                </td>
                <td>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </td>
                <td>${p.arrivalTime}ms</td>
                <td>${p.burstTime}ms</td>
                <td style="font-weight:700;color:${remainingMs === 0 ? 'var(--success)' : (isRunning ? 'var(--primary-light)' : 'var(--text)')}">
                    ${remainingMs}ms
                </td>
                <td>${ctVal}</td>
                <td>${tatVal}</td>
                <td style="color:${isDone ? (wtVal === '0ms' ? 'var(--success)' : 'var(--text)') : 'var(--text-muted)'}">${wtVal}</td>
                <td>${rtVal}</td>
            </tr>
        `;
    }).join('');
}

// ── Initial Baseline Gantt Timeline Ruler ──
function renderInitialGanttTimeline() {
    if (!DOM.ganttChart || !DOM.ganttTimeline) return;

    DOM.ganttChart.innerHTML = `
        <div class="gantt-idle-track">
            <span class="gantt-idle-text">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Gantt execution timeline ready · Press <strong>Run</strong> or <strong>Step</strong> to start
            </span>
        </div>
    `;

    let ticksHtml = '';
    for (let t = 0; t <= 32; t += 2) {
        ticksHtml += `
            <div class="gantt-ruler-tick" style="min-width: 44px;">
                <span class="ruler-notch"></span>
                <span class="ruler-num">${t}ms</span>
            </div>
        `;
    }
    DOM.ganttTimeline.innerHTML = ticksHtml;
    if (DOM.ganttStatus) DOM.ganttStatus.textContent = 'Ready to schedule · Timeline tracks live';
}

// ── Gantt Chart Visualization ──
function appendGanttBlock(time, process) {
    const previewTrack = DOM.ganttChart.querySelector('.gantt-idle-track');
    const placeholder = DOM.ganttChart.querySelector('.gantt-placeholder');
    if (previewTrack) {
        DOM.ganttChart.innerHTML = '';
        DOM.ganttTimeline.innerHTML = '';
    } else if (placeholder) {
        placeholder.remove();
        DOM.ganttTimeline.innerHTML = '';
    }

    const processKey = process ? process.id : '_idle';
    const lastBlock = DOM.ganttChart.lastElementChild;
    const unitWidth = 44; // px per ms

    // Merge consecutive time units of same process
    if (lastBlock && lastBlock.dataset.procKey === processKey) {
        const span = parseInt(lastBlock.dataset.span) + 1;
        const startTime = parseInt(lastBlock.dataset.startTime);
        lastBlock.dataset.span = span;
        lastBlock.style.minWidth = `${unitWidth * span}px`;

        const durLabel = lastBlock.querySelector('.gb-dur');
        if (durLabel) durLabel.textContent = `${startTime} - ${startTime + span}ms (${span}ms)`;

        // Update timeline marker span
        const lastMarker = DOM.ganttTimeline.lastElementChild;
        if (lastMarker) {
            lastMarker.dataset.span = span;
            lastMarker.style.minWidth = `${unitWidth * span}px`;
        }
        return;
    }

    // New Block
    const block = document.createElement('div');
    block.className = `gantt-block${process ? '' : ' idle'}`;
    block.dataset.procKey = processKey;
    block.dataset.span = '1';
    block.dataset.startTime = String(time);
    block.style.minWidth = `${unitWidth}px`;

    if (process) {
        block.innerHTML = `
            <div class="gb-logo">${getAppLogo(process.base, 14)}</div>
            <span class="gb-name">${process.id.split(' ')[0]}</span>
            <span class="gb-dur">${time} - ${time + 1}ms (1ms)</span>
        `;
    } else {
        block.innerHTML = `
            <span class="gb-name" style="color:var(--text-muted)">IDLE</span>
            <span class="gb-dur">${time} - ${time + 1}ms (1ms)</span>
        `;
    }

    DOM.ganttChart.appendChild(block);

    // Timeline Marker Segment
    const marker = document.createElement('div');
    marker.className = 'gantt-tick-boundary';
    marker.dataset.span = '1';
    marker.style.minWidth = `${unitWidth}px`;
    marker.innerHTML = `
        <span class="tick-line"></span>
        <span class="tick-num">${time}ms</span>
    `;
    DOM.ganttTimeline.appendChild(marker);

    // Auto-scroll to latest
    DOM.ganttChart.parentElement.scrollLeft = DOM.ganttChart.parentElement.scrollWidth;
}

// ── Event Logger ──
function logEvent(time, tagType, tagText, messageHtml) {
    const placeholder = DOM.eventLog.querySelector('.log-placeholder');
    if (placeholder) placeholder.remove();

    sim.eventsCount++;
    DOM.logCount.textContent = `${sim.eventsCount} events`;

    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `
        <span class="log-t">[${String(time).padStart(2, '0')}ms]</span>
        <span class="log-tag ${tagType}">${tagText}</span>
        <div class="log-msg">${messageHtml}</div>
    `;

    DOM.eventLog.insertBefore(entry, DOM.eventLog.firstChild);

    while (DOM.eventLog.children.length > 50) {
        DOM.eventLog.removeChild(DOM.eventLog.lastChild);
    }
}

function toggleLog() {
    $('logCard').classList.toggle('collapsed');
}

// ── Final Results Analytics ──
function calculateResults() {
    let totalWT = 0;
    let totalTAT = 0;
    const maxCT = Math.max(...Object.values(sim.completion), 1);

    processes.forEach(p => {
        const ct = sim.completion[p.id] || 0;
        const tat = ct - p.arrivalTime;
        const wt = tat - p.burstTime;
        totalWT += wt;
        totalTAT += tat;
    });

    const count = processes.length;
    animateValue(DOM.avgWT, `${(totalWT / count).toFixed(2)} ms`);
    animateValue(DOM.avgTAT, `${(totalTAT / count).toFixed(2)} ms`);
    animateValue(DOM.cpuUtil, `${((sim.totalBurst / maxCT) * 100).toFixed(1)}%`);
    animateValue(DOM.totalTime, `${maxCT} ms`);

    // Final end tick
    const endMarker = document.createElement('div');
    endMarker.className = 'gantt-tick-boundary final';
    endMarker.style.minWidth = '24px';
    endMarker.innerHTML = `
        <span class="tick-line"></span>
        <span class="tick-num">${maxCT}ms</span>
    `;
    DOM.ganttTimeline.appendChild(endMarker);
}

function animateValue(element, targetValue) {
    element.textContent = targetValue;
}

// ── Keyboard Shortcuts ──
document.addEventListener('keydown', e => {
    if (['INPUT', 'SELECT'].includes(e.target.tagName)) return;

    if (e.key === ' ') {
        e.preventDefault();
        if (sim.running && !sim.paused) {
            pauseSimulation();
        } else if (!sim.finished && processes.length > 0) {
            startSimulation();
        }
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!sim.finished && processes.length > 0) {
            stepSimulation();
        }
    } else if (e.key === 'r' || e.key === 'R') {
        resetSimulation();
    }
});

DOM.burstTime.addEventListener('keydown', e => {
    if (e.key === 'Enter') addProcess();
});
DOM.arrivalTime.addEventListener('keydown', e => {
    if (e.key === 'Enter') DOM.burstTime.focus();
});

// ── Theme Controller (Slate Light Default / Dark Toggle) ──
function initTheme() {
    const saved = localStorage.getItem('srtf_theme') || 'light';
    applyTheme(saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('srtf_theme', 'dark');
        const icon = $('themeIcon');
        const label = $('themeLabel');
        if (label) label.textContent = 'Dark Mode';
        if (icon) {
            icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('srtf_theme', 'light');
        const icon = $('themeIcon');
        const label = $('themeLabel');
        if (label) label.textContent = 'Slate Light';
        if (icon) {
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            `;
        }
    }
}

// ── Multi-Page Navigation ──
function switchPage(pageId) {
    // 1. Update Tabs
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = $(`tab-${pageId}`);
    if (activeTab) activeTab.classList.add('active');

    // 2. Hide / Show pages
    const simSidebar = $('simSidebar');
    const simContent = $('simContent');
    const pageComp = $('pageComparison');
    const pageQuiz = $('pageQuiz');
    const pageTheory = $('pageTheory');

    if (pageId === 'simulator') {
        if (simSidebar) simSidebar.style.display = 'flex';
        if (simContent) simContent.style.display = 'flex';
        if (pageComp) pageComp.style.display = 'none';
        if (pageQuiz) pageQuiz.style.display = 'none';
        if (pageTheory) pageTheory.style.display = 'none';
    } else {
        if (simSidebar) simSidebar.style.display = 'none';
        if (simContent) simContent.style.display = 'none';
        if (pageComp) pageComp.style.display = pageId === 'comparison' ? 'flex' : 'none';
        if (pageQuiz) pageQuiz.style.display = pageId === 'quiz' ? 'flex' : 'none';
        if (pageTheory) pageTheory.style.display = pageId === 'theory' ? 'flex' : 'none';

        if (pageId === 'comparison') runAlgorithmComparison();
        if (pageId === 'quiz') initQuiz();
    }
}

// ── Algorithm Comparison Engine ──
function getProcessColor(base) {
    const colors = {
        'Chrome': '#ea4335',
        'Firefox': '#ff7a00',
        'Edge': '#0078d7',
        'Netflix': '#e50914',
        'YouTube': '#ff0000',
        'Spotify': '#1db954',
        'Prime Video': '#00a8e0',
        'WhatsApp': '#25d366',
        'Instagram': '#d6249f',
        'Discord': '#5865f2',
        'Twitter': '#0f172a',
        'Amazon': '#ff9900',
        'Zoom': '#2d8cff',
        'Slack': '#36c5f0',
        'VS Code': '#007acc',
        'Antivirus': '#10b981',
        'Updater': '#f59e0b',
        'Backup': '#8b5cf6'
    };
    return colors[base] || '#2563eb';
}

function simulateFCFS(procs) {
    const list = procs.map(p => ({ ...p })).sort((a, b) => a.arrivalTime - b.arrivalTime);
    let time = 0, totalWT = 0, totalTAT = 0, switches = 0;
    const slices = [];
    list.forEach(p => {
        if (time < p.arrivalTime) {
            slices.push({ name: 'Idle', dur: p.arrivalTime - time, color: '#94a3b8' });
            time = p.arrivalTime;
        }
        const ct = time + p.burstTime;
        const tat = ct - p.arrivalTime;
        const wt = tat - p.burstTime;
        totalWT += wt;
        totalTAT += tat;
        switches++;
        slices.push({ name: p.id.split(' ')[0], dur: p.burstTime, color: getProcessColor(p.base) });
        time = ct;
    });
    return {
        name: 'FCFS (First-Come First-Served)',
        type: 'Non-Preemptive',
        avgWT: (totalWT / list.length).toFixed(2),
        avgTAT: (totalTAT / list.length).toFixed(2),
        switches: switches,
        slices
    };
}

function simulateSJF(procs) {
    const list = procs.map(p => ({ ...p, remaining: p.burstTime }));
    let time = 0, totalWT = 0, totalTAT = 0, switches = 0, completed = 0;
    const slices = [];
    while (completed < list.length) {
        const available = list.filter(p => p.arrivalTime <= time && p.remaining > 0);
        if (available.length === 0) {
            const nextArr = Math.min(...list.filter(p => p.remaining > 0).map(p => p.arrivalTime));
            slices.push({ name: 'Idle', dur: nextArr - time, color: '#94a3b8' });
            time = nextArr;
            continue;
        }
        available.sort((a, b) => a.burstTime - b.burstTime || a.arrivalTime - b.arrivalTime);
        const p = available[0];
        const ct = time + p.burstTime;
        const tat = ct - p.arrivalTime;
        const wt = tat - p.burstTime;
        totalWT += wt;
        totalTAT += tat;
        p.remaining = 0;
        completed++;
        switches++;
        slices.push({ name: p.id.split(' ')[0], dur: p.burstTime, color: getProcessColor(p.base) });
        time = ct;
    }
    return {
        name: 'SJF (Shortest Job First)',
        type: 'Non-Preemptive',
        avgWT: (totalWT / list.length).toFixed(2),
        avgTAT: (totalTAT / list.length).toFixed(2),
        switches: switches,
        slices
    };
}

function simulateSRTF(procs) {
    const list = procs.map(p => ({ ...p, remaining: p.burstTime, ct: 0 }));
    let time = 0, totalWT = 0, totalTAT = 0, switches = 0, completed = 0, current = null;
    const slices = [];
    while (completed < list.length) {
        const available = list.filter(p => p.arrivalTime <= time && p.remaining > 0);
        if (available.length === 0) {
            time++;
            continue;
        }
        available.sort((a, b) => a.remaining - b.remaining || a.arrivalTime - b.arrivalTime);
        const next = available[0];
        if (current !== next) {
            switches++;
            current = next;
            slices.push({ name: next.id.split(' ')[0], dur: 1, color: getProcessColor(next.base) });
        } else {
            slices[slices.length - 1].dur++;
        }
        next.remaining--;
        time++;
        if (next.remaining === 0) {
            next.ct = time;
            completed++;
            const tat = next.ct - next.arrivalTime;
            const wt = tat - next.burstTime;
            totalWT += wt;
            totalTAT += tat;
            current = null;
        }
    }
    return {
        name: 'SRTF (Shortest Remaining Time First)',
        type: 'Preemptive',
        avgWT: (totalWT / list.length).toFixed(2),
        avgTAT: (totalTAT / list.length).toFixed(2),
        switches: switches,
        slices,
        isOptimal: true
    };
}

function simulateRR(procs, quantum = 2) {
    const list = procs.map(p => ({ ...p, remaining: p.burstTime, inQueue: false }));
    list.sort((a, b) => a.arrivalTime - b.arrivalTime);
    let time = 0, totalWT = 0, totalTAT = 0, switches = 0, completed = 0;
    const queue = [];
    const slices = [];

    list.filter(p => p.arrivalTime === 0).forEach(p => { queue.push(p); p.inQueue = true; });

    while (completed < list.length) {
        if (queue.length === 0) {
            const unarrived = list.filter(p => p.remaining > 0 && !p.inQueue);
            if (unarrived.length > 0) {
                const nextArr = Math.min(...unarrived.map(p => p.arrivalTime));
                slices.push({ name: 'Idle', dur: nextArr - time, color: '#94a3b8' });
                time = nextArr;
                list.filter(p => p.arrivalTime <= time && p.remaining > 0 && !p.inQueue).forEach(p => {
                    queue.push(p);
                    p.inQueue = true;
                });
                continue;
            } else {
                break;
            }
        }

        const p = queue.shift();
        switches++;
        const runTime = Math.min(quantum, p.remaining);
        p.remaining -= runTime;
        time += runTime;
        slices.push({ name: p.id.split(' ')[0], dur: runTime, color: getProcessColor(p.base) });

        list.filter(job => job.arrivalTime <= time && job.remaining > 0 && !job.inQueue && job !== p).forEach(job => {
            queue.push(job);
            job.inQueue = true;
        });

        if (p.remaining > 0) {
            queue.push(p);
        } else {
            completed++;
            const tat = time - p.arrivalTime;
            const wt = tat - p.burstTime;
            totalWT += wt;
            totalTAT += tat;
        }
    }

    return {
        name: `Round Robin (Quantum = ${quantum}ms)`,
        type: 'Preemptive',
        avgWT: (totalWT / list.length).toFixed(2),
        avgTAT: (totalTAT / list.length).toFixed(2),
        switches: switches,
        slices
    };
}

function runAlgorithmComparison() {
    if (!processes || processes.length === 0) return;
    const countEl = $('compProcCount');
    if (countEl) countEl.textContent = processes.length;

    const srtfRes = simulateSRTF(processes);
    const sjfRes = simulateSJF(processes);
    const fcfsRes = simulateFCFS(processes);
    const rrRes = simulateRR(processes, 2);

    const all = [srtfRes, sjfRes, fcfsRes, rrRes];

    const tbody = $('compTableBody');
    if (tbody) {
        tbody.innerHTML = all.map(alg => `
            <tr>
                <td style="font-weight:700; text-align:left; padding-left:16px;">
                    ${alg.name}
                </td>
                <td><span class="status-badge ${alg.type === 'Preemptive' ? 'running' : 'waiting'}">${alg.type}</span></td>
                <td style="font-weight:700; color: ${alg.isOptimal ? 'var(--success)' : 'var(--text)'};">
                    ${alg.avgWT} ms
                </td>
                <td>${alg.avgTAT} ms</td>
                <td>${alg.switches}</td>
                <td>
                    ${alg.isOptimal ? '<span class="comp-badge-optimal">★ Proven Optimal</span>' : '<span style="color:var(--text-muted); font-size:0.7rem;">Sub-optimal</span>'}
                </td>
            </tr>
        `).join('');
    }

    const ganttContainer = $('compGanttContainer');
    if (ganttContainer) {
        ganttContainer.innerHTML = all.map(alg => {
            const totalDur = alg.slices.reduce((acc, s) => acc + s.dur, 0);
            return `
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:600; margin-bottom:4px;">
                        <span>${alg.name}</span>
                        <span style="font-family:var(--font-mono); color:var(--text-muted);">Avg WT: ${alg.avgWT}ms</span>
                    </div>
                    <div class="comp-gantt-preview">
                        ${alg.slices.map(s => `
                            <div class="cg-slice" style="flex: ${s.dur}; background: ${s.color};" title="${s.name} (${s.dur}ms)">
                                ${s.dur >= 2 ? s.name : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ── Interactive Preemption Quiz Engine ──
const QUIZ_QUESTIONS = [
    {
        badge: 'Preemption Criteria',
        question: 'Process A is running with 5ms remaining at t=3ms. Process B arrives with a burst time of 3ms. What action will the SRTF scheduler take?',
        options: [
            { text: 'Preempt Process A immediately and dispatch Process B', correct: true },
            { text: 'Continue executing Process A until its 5ms completes', correct: false },
            { text: 'Wait 2ms then swap to Process B', correct: false },
            { text: 'Terminate Process A and place both in waiting queue', correct: false }
        ],
        explanation: 'In SRTF, preemption occurs strictly when Remaining(P_arriving) < Remaining(P_running). Since 3ms < 5ms, Process A is interrupted and Process B takes over.'
    },
    {
        badge: 'Tie-Breaking Rule',
        question: 'Two ready processes P1 and P2 both have identical remaining burst times of 4ms. P1 arrived at t=1ms and P2 arrived at t=4ms. How does the scheduler break the tie?',
        options: [
            { text: 'Dispatches P1 because it arrived earlier (lower Arrival Time)', correct: true },
            { text: 'Dispatches P2 because it arrived more recently', correct: false },
            { text: 'Divides CPU time equally between them simultaneously', correct: false },
            { text: 'Raises a CPU scheduler exception', correct: false }
        ],
        explanation: 'When remaining burst times are identical, SRTF breaks ties deterministically using First-Come First-Served (earlier Arrival Time).'
    },
    {
        badge: 'Starvation & Real-World OS',
        question: 'What is the most significant operational risk of pure SRTF in an environment with high arrival rates of short jobs?',
        options: [
            { text: 'Starvation of long batch jobs (indefinite postponement)', correct: true },
            { text: 'Deadlock between competing threads', correct: false },
            { text: 'Zero CPU utilization across cores', correct: false },
            { text: 'Memory buffer overflows', correct: false }
        ],
        explanation: 'If short processes continuously arrive, long jobs will never get scheduled (Starvation). Real operating systems solve this using Aging.'
    },
    {
        badge: 'Formula Calculation',
        question: 'A process arrives at t=3ms, finishes execution at t=12ms, and has a burst time of 4ms. What is its Waiting Time (WT)?',
        options: [
            { text: '5 ms (TAT = 12 - 3 = 9ms; WT = 9 - 4 = 5ms)', correct: true },
            { text: '8 ms', correct: false },
            { text: '9 ms', correct: false },
            { text: '1 ms', correct: false }
        ],
        explanation: 'TAT = Completion Time − Arrival Time = 12 − 3 = 9ms. Waiting Time = TAT − Burst Time = 9 − 4 = 5ms.'
    }
];

let quizScore = 0;
const answeredQuestions = new Set();

function initQuiz() {
    const container = $('quizContainer');
    if (!container || container.children.length > 0) return;

    container.innerHTML = QUIZ_QUESTIONS.map((q, qIdx) => `
        <div class="quiz-card" id="qcard-${qIdx}">
            <span class="quiz-badge">${q.badge}</span>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((opt, optIdx) => `
                    <button class="quiz-opt-btn" onclick="answerQuiz(${qIdx}, ${optIdx}, ${opt.correct})">
                        <span>${String.fromCharCode(65 + optIdx)}.</span>
                        <span>${opt.text}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="qfb-${qIdx}" style="display:none;"></div>
        </div>
    `).join('');
}

function answerQuiz(qIdx, optIdx, isCorrect) {
    if (answeredQuestions.has(qIdx)) return;
    answeredQuestions.add(qIdx);

    const card = $(`qcard-${qIdx}`);
    const btns = card.querySelectorAll('.quiz-opt-btn');
    const fb = $(`qfb-${qIdx}`);

    btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === optIdx) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (QUIZ_QUESTIONS[qIdx].options[idx].correct) {
            btn.classList.add('correct');
        }
    });

    if (isCorrect) {
        quizScore++;
        const scoreEl = $('quizScoreText');
        if (scoreEl) scoreEl.textContent = quizScore;
    }

    if (fb) {
        fb.style.display = 'block';
        fb.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        fb.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect.'}</strong> ${QUIZ_QUESTIONS[qIdx].explanation}`;
    }
}

// Run Init
init();

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    switchPage(urlParams.get('page'));
}
