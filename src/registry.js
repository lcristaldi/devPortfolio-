// Central registry mapping each project to its launch + heartbeat strategy.
// The Launcher UI and the heartbeat daemon both consume this file.

export const PROJECTS = [
  {
    id: "homesprint",
    name: "HomeSprint",
    tagline: "Home-buying command center",
    description:
      "Full-stack dashboard that tracks mortgage projections, market comps, and home-buying milestones. Next.js frontend with a FastAPI backend running real-time financial models.",
    stack: ["Next.js", "Tailwind", "FastAPI", "Python"],
    color: "#6b8258",           // moss green — hand-painted, dusty
    gradient: "from-emerald-600 to-green-700",
    spineHighlight: "#a8be8e", // lighter painterly wash
    spineShadow: "#3f4e33",    // deeper pigment pooling
    icon: "home",
    type: "web-local",
    cwd: "/Users/dfmon/homesprint/frontend",
    startCmd: "npm run dev",
    port: 3000,
    url: "http://localhost:3000",
    prodUrl: "https://homesprint-three.vercel.app/",
    githubUrl: "#", // TODO: fill in real GitHub URL
    processHint: "next dev",
    preview: "/previews/homesprint.mp4",
    // Watercolor illustration for the card (drop PNG/JPG into src/assets/scenes/)
    scene: "/assets/scenes/homesprint.jpg",
    scenePosition: "center 85%",
    cover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    sidecars: [
      {
        id: "homesprint-api",
        cwd: "/Users/dfmon/homesprint/backend",
        cmd: "./venv/bin/uvicorn app.main:app --reload --port 8000",
        port: 8000,
      },
    ],
  },
  {
    id: "project-whoa",
    name: "Sam Intel",
    tagline: "Recompete radar intelligence",
    description:
      "Contract intelligence platform that surfaces recompete opportunities using federal procurement data. D3 visualizations, Supabase-backed, deployed on Vercel.",
    stack: ["Next.js 16", "D3.js", "Supabase", "Tremor"],
    color: "#546988",           // twilight blue — dusty, faded
    gradient: "from-blue-800 to-indigo-900",
    spineHighlight: "#8ea1bd",
    spineShadow: "#2f3d52",
    icon: "radar",
    type: "web-remote",
    url: "https://sam-intel.vercel.app/",
    prodUrl: "https://sam-intel.vercel.app/",
    githubUrl: "#", // TODO: fill in real GitHub URL
    preview: "/previews/project-whoa.mp4",
    scene: "/assets/scenes/project-whoa.jpg",
    scenePosition: "center 35%",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "mom-beading-page",
    name: "Mom's Beadwork",
    tagline: "Handmade jewelry storefront",
    description:
      "Portfolio + shop for my mom's handmade beaded jewelry. Next.js on App Router with Supabase-backed catalog, Framer Motion flourishes, and NextAuth for admin-only edits.",
    stack: ["Next.js 16", "Supabase", "Framer Motion", "NextAuth"],
    color: "#b87a3d",           // terracotta — warm, aged
    gradient: "from-amber-500 to-orange-600",
    spineHighlight: "#dba66c",
    spineShadow: "#6b3f1a",
    icon: "beads",
    type: "web-local",
    cwd: "/Users/dfmon/mom-beading-page",
    startCmd: "npm run dev -- -p 3100",
    port: 3100,
    url: "http://localhost:3100",
    prodUrl: "https://project-yc9yt.vercel.app/",
    githubUrl: "#", // TODO: fill in real GitHub URL
    processHint: "next dev.*3100",
    preview: "/previews/mom-beading-page.mp4",
    scene: "/assets/scenes/mom-beading-page.jpg",
    scenePosition: "center 55%",
    cover: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: "shirtfilah",
    name: "ShirtFilah",
    tagline: "Workout tracker with soul",
    description:
      "A minimalist iOS workout tracker with weekly wrapped summaries, streaks, and a calm pixel-inspired aesthetic. Built with SwiftUI + SwiftData. Live-demoed in-browser via Appetize.",
    stack: ["SwiftUI", "SwiftData", "iOS 17+"],
    color: "#9a5555",           // plum red — faded leatherbound
    gradient: "from-red-900 to-rose-950",
    spineHighlight: "#c48383",
    spineShadow: "#512a2a",
    icon: "dumbbell",
    type: "ios-appetize",
    // Appetize free tier blocks embedding — open the standalone play page instead
    appetizeUrl: "https://appetize.io/app/b_pnn5bps2or7g3dye2sk3x3lagi",
    githubUrl: "#",             // TODO: real GitHub URL
    testflightUrl: "#",         // TODO: real TestFlight invite URL
    scene: "/assets/scenes/shirtfilah.jpg",
    scenePosition: "center 55%",
  },
  {
    id: "vinylsheetz",
    name: "VinylSheetz",
    tagline: "Crate-digger's archive",
    description:
      "Vinyl record collection manager powered by MusicBrainz and Cover Art Archive. Built as a Tauri desktop app, now also runs in-browser with custom web shims.",
    stack: ["React", "Tauri", "SQLite", "MusicBrainz API"],
    color: "#7d4a2a",           // cognac — aged wood, vinyl sleeve
    gradient: "from-orange-800 to-amber-900",
    spineHighlight: "#ae7a52",
    spineShadow: "#40230f",
    icon: "disc",
    type: "web-local",
    cwd: "/Users/dfmon/vinylsheetz-archive",
    startCmd: "npm run dev",
    port: 1420,
    url: "http://localhost:1420",
    prodUrl: "https://vinylsheetz-archive.vercel.app/",
    githubUrl: "#", // TODO: fill in real GitHub URL
    processHint: "vite.*1420",
    preview: "/previews/vinylsheetz.mp4",
    scene: "/assets/scenes/vinylsheetz.jpg",
    scenePosition: "center 65%",
    cover: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=800&q=80",
  },
];
