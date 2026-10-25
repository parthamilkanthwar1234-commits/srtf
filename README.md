# Shortest Remaining Time First (SRTF) CPU Scheduling Simulator

An interactive, animated, web-based simulator for the **Preemptive Shortest Remaining Time First (SRTF / Preemptive SJF)** CPU scheduling algorithm.

Designed for Operating Systems coursework, demonstrations, and algorithmic study.

---

## ⚡ Features

- **Real Application Modeling**: Uses real-world applications (Google Chrome, Netflix, WhatsApp, Amazon, Spotify, Zoom, Discord, etc.) with official vector brand logos instead of generic $P_1, P_2, P_3$ labels.
- **Accurate SRTF Algorithm**:
  - Preemption logic: Preempts the running job strictly when an arriving job has a shorter remaining burst time.
  - Deterministic tie-breaking: Ties are resolved by arrival time ($AT$).
- **Live Animated Execution**:
  - **CPU Core States**: Animated hardware breathing idle radar when waiting, and dual counter-spinning orbital rings with progress shimmers when executing.
  - **Real-Time Process Metrics Table**: Displays all processes live tick-by-tick with status badges (`RUNNING`, `PREEMPTED`, `IN QUEUE`, `COMPLETED`), Arrival Time ($AT$), Burst Time ($BT$), Remaining Time, Completion Time ($CT$), Turnaround Time ($TAT$), Waiting Time ($WT$), and Response Time ($RT$).
  - **Gantt Chart Execution Timeline**: Timeline ruler with tick graduations, real-time process intervals (`[Start - End ms]`), and boundary tick markers.
  - **Interactive Ready Queue**: Dynamically sorted by shortest remaining burst time first with `#1 NEXT` priority indicators.
  - **Preemption Flash & Banner**: Visual alerts indicating which process preempted the running task and why.
  - **Scheduler Decision Journal**: Detailed system log recording every arrival, dispatch, preemption, and completion event.
- **Playback Controls**: Run, Pause, Single-Step ($\rightarrow$), Reset ($R$), and variable playback speed ($0.25\times$ to $10\times$).
- **Built-in Presets**: Quick-load Mixed Workloads, Streaming Heavy, and Social/Chat workloads.
- **Custom Workloads**: Add custom processes with tailored Arrival Time and Burst Time.

---

## 🚀 Live Demo on GitHub Pages

You can view and run the simulator directly in your browser:

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

---

## 📊 Scheduling Formulas

- **Completion Time ($CT$)**: Time at which a process finishes execution.
- **Turnaround Time ($TAT$)**:
  $$\text{TAT} = \text{CT} - \text{AT}$$
- **Waiting Time ($WT$)**:
  $$\text{WT} = \text{TAT} - \text{BT}$$
- **Response Time ($RT$)**:
  $$\text{RT} = \text{First CPU Time} - \text{AT}$$
- **CPU Utilization**:
  $$\text{Utilization} = \frac{\sum \text{Burst Times}}{\text{Makespan}} \times 100\%$$
