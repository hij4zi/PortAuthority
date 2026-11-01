/* ==========================================================
   PORT OF ENTRY — 2026–2035 Capital Plan data
   Source: Port Authority board presentation (Nov 2025), the plan
   document, and project pages on portauthoritybuilds.com.
   See docs/sources.md for URLs. Edit here; every page reads this.
   ========================================================== */
window.PLAN = {
  total: "$45B",
  direct: "$42B",
  jobs: "50,000+",
  years: "2026–2035",
  tagline: "A decade of big ambition",

  modes: {
    air: {
      name: "Air", letter: "A", budget: "$20.7B", share: "49%",
      place: "Newark Liberty International",
      headline: "Newark remade by 2035",
      summary: "The largest share of the plan. A new Terminal B, an expanded five-star Terminal A, an updated Terminal C, a third taxiway, a simpler roadway network, and the $3.5 billion AirTrain opening in 2030.",
      stats: [["$3.5B", "AirTrain, opens 2030"], ["2026", "NEC station link opens"], ["$50B+", "across three airports by 2035"]],
      projects: ["New world-class Terminal B", "Expand Terminal A, update Terminal C", "$3.5B EWR AirTrain, opening 2030", "Third major taxiway to cut delays"]
    },
    land: {
      name: "Land", letter: "L", budget: "$15.4B", share: "37%",
      place: "Lincoln Tunnel and the Midtown Bus Terminal",
      headline: "A new bus terminal, a bridge for another century",
      summary: "Tunnels, bridges and terminals take the second-largest share. The $11 billion Midtown Bus Terminal is the plan's centerpiece: ramps straight into the Lincoln Tunnel by 2030, the main hall and a 3.5-acre park by 2035.",
      stats: [["$11B", "Midtown Bus Terminal"], ["2035", "main terminal and park open"], ["$2B", "Restore the George"]],
      projects: ["$11B Midtown Bus Terminal, phase 1 2030, complete 2035", "$2B restoration of the George Washington Bridge", "Lincoln Tunnel Helix rehabilitation", "Outerbridge Crossing rehabilitation"]
    },
    rail: {
      name: "Rail", letter: "R", budget: "$2.6B", share: "6%",
      place: "PATH",
      headline: "Every line, every day",
      summary: "One of the largest service increases in PATH history. All four lines run seven days a week in 2026, the first time in 25 years, with direct weekend service, more rush-hour trains, new uptown tracks and new fare gates.",
      stats: [["2026", "all four lines, seven days a week"], ["25 yrs", "since that last happened"], ["200,000+", "riders every weekday"]],
      projects: ["All four lines operating every day, 2026", "Direct weekend service JSQ–33rd, HOB–33rd, HOB–WTC", "All new uptown tracks", "State-of-the-art fare gates"]
    },
    sea: {
      name: "Sea", letter: "S", budget: "$2B", share: "5%",
      place: "Port Newark–Elizabeth",
      headline: "Deeper water, bigger ships",
      summary: "The East Coast's largest port stays the must-call port. The harbor deepens from 50 to 55 feet, sixty-year-old wharves are rebuilt, the Port Street Corridor opens, and $1.2 billion of private money goes into the terminals.",
      stats: [["55 ft", "harbor depth, from 50"], ["60+", "wharves and berths restored"], ["$1.2B+", "private terminal investment"]],
      projects: ["Deepen the harbor to 55 feet with the Army Corps", "Restore or replace 60+ wharves and berths", "Finish the $220M Port Street Corridor", "$1.2B+ private investment in terminal operations"]
    }
  },

  // [year, sub-label, mode, status (done|ahead), title, description, era (last|new|next)]
  milestones: [
    ["2017", "", "agency", "done", "2017–2026 plan adopted", "A $37 billion plan, later described by the agency as an unprecedented wave of renewal across airports, bus terminal, seaport, PATH and the World Trade Center.", "last"],
    ["2018", "", "land", "done", "New Goethals Bridge", "Opened as the first major new bridge construction since 1931, built to serve for the next hundred years.", "last"],
    ["2019", "", "sea", "done", "Bayonne Bridge raised", "The $1.7 billion raising of the roadway to 215 feet of clearance, a world first, let the largest container ships reach the port. Paired with deepening the harbor to 50 feet.", "last"],
    ["2022", "", "rail", "done", "PATH signal system", "A $1 billion state-of-the-art signal system, letting trains run closer together safely. The fleet grew 20% and nine-car trains began on Newark–WTC, adding 12% capacity.", "last"],
    ["2022", "", "land", "done", "Cashless tolling", "Gates removed at all six crossings. The agency reports crashes down 57%, with time and emissions saved.", "last"],
    ["2023", "jan", "air", "done", "Newark Terminal A opens", "The $2.7 billion terminal earned a five-star Skytrax rating and was named among the best new terminals in the world.", "last"],
    ["2023", "", "sea", "done", "ExpressRail Bayonne", "The last of four on-dock rail terminals, a $600 million investment that moves cargo straight onto the national rail network.", "last"],
    ["2024", "", "air", "done", "LaGuardia complete", "The $8 billion rebuild finished: Terminal B, named the world's best new terminal, and Delta's Terminal C.", "last"],
    ["2025", "", "land", "done", "Bus terminal breaks ground", "Construction begins on the Dyer Avenue deck-overs, the first stage of the $11 billion Midtown Bus Terminal, after a unanimous City Council vote in 2024.", "last"],
    ["2025", "", "rail", "done", "Tap-to-pay and countdown clocks", "Twenty-first-century amenities across the system: tap-to-pay fare readers, updated countdown clocks, the RidePATH app.", "last"],
    ["2025", "nov", "agency", "done", "2026–2035 plan proposed", "The Board is asked to post a $45 billion plan for public comment: finish what was started, and advance the renewal agenda. 50,000+ jobs.", "new"],
    ["2026", "early", "rail", "ahead", "PATH Forward complete", "The $430 million program to repair aging stations, tracks and switches finishes, the foundation for the service increases that follow.", "new"],
    ["2026", "", "rail", "ahead", "Every line, every day", "For the first time in 25 years all four PATH lines run seven days a week. Direct weekend service from Journal Square and Hoboken to 33rd Street and from Hoboken to WTC; Friday late-night service doubled by mid-year.", "new"],
    ["2026", "", "air", "ahead", "NEC station link opens", "The long-overdue community access point at the Newark Airport rail station on the Northeast Corridor opens.", "new"],
    ["2026", "", "air", "ahead", "First new JFK gates", "The first gates open at the $9.5 billion New Terminal One and the $4.2 billion Terminal 6.", "new"],
    ["2026", "spring", "rail", "ahead", "Fare changes begin", "PATH fares rise $0.25, with further $0.25 steps each January through 2029. Fares cover about a quarter of the cost of a ride; the agency pays the rest.", "new"],
    ["2026", "", "sea", "ahead", "Port Street Corridor opens", "The $220 million rebuild of the main entry to Port Newark and the Elizabeth terminal, to cut congestion and improve safety.", "new"],
    ["2027", "", "rail", "ahead", "More Newark–WTC trains", "Additional trains in the weekday peak and on weekend daytimes in the first half of the year.", "new"],
    ["2027", "", "land", "ahead", "Off-peak discount phases out", "The $2 E-ZPass off-peak discount for cars starts a four-year phase-out, 50 cents a year, to fund state-of-good-repair work at the crossings. Staten Island and truck discounts are unchanged.", "new"],
    ["2029", "est.", "land", "ahead", "Bus terminal first phase", "The project page gives 2029 (est.); the deck gives 2030. The ramps straight into the Lincoln Tunnel and a storage and staging building for up to 350 buses, which also serves as the temporary terminal.", "new"],
    ["2030", "", "air", "ahead", "Newark AirTrain opens", "The $3.5 billion replacement for the 1996 monorail enters service.", "new"],
    ["2030", "", "land", "ahead", "Restore the George", "The $2 billion-plus rehabilitation of the George Washington Bridge continues through the decade, over 60% done at the start of the plan, to extend the bridge's life for another century.", "new"],
    ["2031", "onward", "sea", "ahead", "Harbor to 55 feet", "Deepening from 50 to 55 feet with the Army Corps of Engineers, plus $1.2 billion of private terminal investment and 60-plus rebuilt wharves.", "new"],
    ["2035", "", "land", "ahead", "Bus terminal opens", "The 2.1 million square foot main terminal and the 3.5-acre park on the deck-overs. Buses off local streets; built for an all-electric fleet.", "new"],
    ["2035", "", "air", "ahead", "Newark fully transformed", "New Terminal B, an expanded Terminal A, an updated Terminal C, a third taxiway and a simplified roadway network. Across the three airports, a $50 billion-plus remaking is complete.", "new"],
    ["2035", "goal", "wtc", "ahead", "Towers 2 and 5", "The stated goal: build out the World Trade Center campus, with One WTC kept Class A at 95% leased.", "new"],
    ["2036", "next plan", "land", "ahead", "Helix and Outerbridge replaced", "Replacement of the Lincoln Tunnel Helix and the Outerbridge Crossing is planned for the 2036–2045 capital plan.", "next"]
  ]
};
