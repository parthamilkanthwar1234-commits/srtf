# Shortest Remaining Time First (SRTF) CPU Scheduling System

An interactive, animated, multi-page educational web system for the **Preemptive Shortest Remaining Time First (SRTF / Preemptive SJF)** CPU scheduling algorithm.

Designed for Operating Systems coursework, lab evaluations, professor demonstrations, and algorithmic study.

---

## ⚡ Key Highlights & Architecture

### 1. 🖥️ Interactive Live Simulator
- **Real Application Modeling**: Uses real-world apps (Google Chrome, Netflix, WhatsApp, Amazon, Spotify, Zoom, Discord, etc.) with official vector brand SVG logos instead of abstract $P_1, P_2, P_3$ labels.
- **Accurate SRTF Algorithm**:
  - Preemption logic: Preempts the running job strictly when an arriving job has a shorter remaining burst time.
  - Deterministic tie-breaking: Ties are resolved by arrival time ($AT$).
- **Live Animated Execution**:
  - **CPU Core States**: Animated hardware breathing idle radar when waiting, and dual counter-spinning orbital tracks with progress shimmers when executing.
  - **Full Process Metrics Table**: Displays all processes live tick-by-tick with status badges (`RUNNING`, `PREEMPTED`, `IN QUEUE`, `COMPLETED`), Arrival Time ($AT$), Burst Time ($BT$), Remaining Time, Completion Time ($CT$), Turnaround Time ($TAT$), Waiting Time ($WT$), and Response Time ($RT$).
  - **Gantt Chart Execution Timeline**: Timeline ruler with tick graduations, real-time process intervals (`[Start - End ms]`), and boundary tick markers.
  - **Interactive Ready Queue**: Dynamically sorted by shortest remaining burst time first with `#1 NEXT` priority indicators.
  - **Preemption Flash & Banner**: Visual alerts indicating which process preempted the running task and why.
  - **Scheduler Decision Journal**: Detailed system log recording every arrival, dispatch, preemption, and completion event.

### 2. 📊 Algorithm Benchmark & Comparative Analytics
- Dynamically benchmarks the currently configured workload across **4 core CPU scheduling algorithms**:
  1. **SRTF (Preemptive SJF)**
  2. **SJF (Non-Preemptive Shortest Job First)**
  3. **FCFS (First-Come, First-Served)**
  4. **Round Robin (Time Quantum = 2ms)**
- Generates a side-by-side performance comparison matrix (Average Waiting Time, Turnaround Time, Context Switches, and Proven Optimality badge).
- Comparative visual execution timelines displaying the distinct scheduling orders side by side.

### 3. 🧠 Preemption Challenge & Interactive Quiz
- 4 interactive scheduling challenges that test and explain preemption:
  - Preemption criteria verification
  - Tie-breaking rules
  - Starvation vulnerability in batch systems
  - Exact Turnaround and Waiting Time formula calculation
- Instant visual feedback (green/red) with detailed mathematical explanations and live score tracking.

### 4. 📚 OS Theory & Mathematical Guide
- Formal definition and preemption condition proofs.
- Mathematical equations:
  - $\text{Turnaround Time (TAT)} = \text{CT} - \text{AT}$
  - $\text{Waiting Time (WT)} = \text{TAT} - \text{BT}$
  - $\text{Response Time (RT)} = \text{First CPU Time} - \text{AT}$
  - $\text{CPU Utilization} = \frac{\sum \text{Burst}}{\text{Makespan}} \times 100\%$
- Analysis of Smith's Rule & optimality proof.
- Starvation analysis and the OS **Aging** mitigation technique.

### 5. 🎨 Ergonomic Theme System
- **Warm Slate Light Mode (Default)**: Soft on the eyes (`#f8fafc` slate-50 background, `#ffffff` cards, `#0f172a` high-contrast typography, royal blue accents) — designed to avoid harsh stark white glare.
- **Dark Mode**: Integrated 1-click toggle for night-time viewing.

---

## 🚀 Live Demo on GitHub Pages

You can view and interact with the live system directly in your browser:

🔗 **[https://parthamilkanthwar1234-commits.github.io/srtf/](https://parthamilkanthwar1234-commits.github.io/srtf/)**

---

## 💻 Local Setup & Running

This project uses standard vanilla HTML5, CSS3, and modern JavaScript with zero external runtime dependencies.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parthamilkanthwar1234-commits/srtf.git
   cd srtf
   ```

2. **Run locally using any HTTP server:**
   - **Using Python 3:**
     ```bash
     python -m http.server 3000
     ```
   - **Using Node (npx serve):**
     ```bash
     npx serve .
     ```
   - Or simply open `index.html` directly in any modern web browser.

3. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| <kbd>Space</kbd> | Play / Pause Simulation |
| <kbd>→</kbd> | Step forward by 1 ms |
| <kbd>R</kbd> | Reset Simulation |
| <kbd>Enter</kbd> (in inputs) | Quick add process |
